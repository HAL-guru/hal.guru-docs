(function () {
    function getContentRoot() {
        return document.querySelector('.md-content .md-content__inner') || document.querySelector('.md-content') || document;
    }

    function getTocRoots() {
        // Na stronie są dwa TOC z klasą md-nav--secondary (lewy w drzewie i prawy pływający)
        return Array.from(document.querySelectorAll('nav.md-nav--secondary'));
    }

    function collectHeadingTargets(contentRoot) {
        const map = new Map(); // id -> { hrefAttr, hrefAbs }
        const headings = contentRoot.querySelectorAll('h2, h3, h4, h5, h6');
        headings.forEach(h => {
            const id = h.id;
            if (!id) return;
            const link = h.querySelector('a[href]:not(.headerlink):not([href^="#"])');
            if (!link) return;

            const hrefAttr = link.getAttribute('href');
            if (!hrefAttr) return;

            // Absolutny, zresolwowany URL — użyjemy go w handlerze click, żeby uniknąć problemów z bazą i nawigacją
            const hrefAbs = link.href;
            map.set(id, { hrefAttr, hrefAbs });
        });
        return map;
    }

    function attachExternalNavigation(a, hrefAbs) {
        if (a.dataset.forwardedClick === 'true') return;
        a.addEventListener('click', (e) => {
            // Zatrzymaj smooth-scroll handler Materiala
            e.preventDefault();
            e.stopPropagation();
            // Twarda nawigacja do celu
            window.location.href = hrefAbs;
        });
        a.dataset.forwardedClick = 'true';
    }

    function rewriteTocLinksOnce() {
        const contentRoot = getContentRoot();
        const tocRoots = getTocRoots();
        if (!contentRoot || tocRoots.length === 0) return false;

        const targets = collectHeadingTargets(contentRoot);
        if (targets.size === 0) return true;

        let changed = 0;

        tocRoots.forEach(tocRoot => {
            targets.forEach(({ hrefAttr, hrefAbs }, id) => {
                const tocLink = tocRoot.querySelector(`a[href="#${CSS.escape(id)}"]`);
                if (!tocLink) return;
                const current = tocLink.getAttribute('href');

                // Przepnij href w atrybucie (dla podglądu / hover), a także dołóż handler kliknięcia
                if (current !== hrefAttr) {
                    tocLink.setAttribute('href', hrefAttr);
                    changed++;
                }
                tocLink.setAttribute('data-forwarded', 'true');
                attachExternalNavigation(tocLink, hrefAbs);
            });
        });

        return changed >= 0;
    }

    function rewriteWithRetries() {
        let attempts = 0;
        const maxAttempts = 12;
        const interval = 150;

        const tick = () => {
            const ok = rewriteTocLinksOnce();
            attempts++;
            if (ok || attempts >= maxAttempts) return;
            setTimeout(tick, interval);
        };
        tick();
    }

    function observeDynamicChanges() {
        const observe = (el) => {
            if (!el) return;
            const mo = new MutationObserver(() => {
                rewriteTocLinksOnce();
            });
            mo.observe(el, { childList: true, subtree: true });
        };

        // Obserwuj wszystkie TOC i treść
        getTocRoots().forEach(observe);
        observe(getContentRoot());
    }

    function init() {
        rewriteWithRetries();
        observeDynamicChanges();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Obsługa navigation.instant (gdyby była włączona w przyszłości)
    if (window.document$ && typeof window.document$.subscribe === 'function') {
        window.document$.subscribe(() => {
            init();
        });
    }
})();

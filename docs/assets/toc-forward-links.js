(/**
 * Implements functionality to enhance interaction with the content and navigation elements
 * within a document. It includes methods for locating content root elements, updating table
 * of contents (TOC) links dynamically, and attaching navigation handlers for external links.
 */
function () {
    /**
     * Retrieves the root element of the content area.
     * Attempts to locate a specific element in the following order:
     * 1. An element with the selectors '.md-content .md-content__inner'.
     * 2. An element with the selector '.md-content'.
     * 3. Falls back to the document object if no matching elements are found.
     *
     * @return {Element|Document} The content root element or the document object if no specific element is found.
     */
    function getContentRoot() {
        return document.querySelector('.md-content .md-content__inner') || document.querySelector('.md-content') || document;
    }

    /**
     * Retrieves an array of root elements for the table of contents (TOC) found within secondary navigation sections.
     *
     * @return {Array<Element>} An array of DOM elements matching the 'nav.md-nav--secondary' selector.
     */
    function getTocRoots() {
        return Array.from(document.querySelectorAll('nav.md-nav--secondary'));
    }

    /**
     * Collects and maps heading elements with valid anchor links to their corresponding href attributes and absolute URL.
     *
     * @param {Element} contentRoot - The root element containing the headings to process.
     * @return {Map<string, {hrefAttr: string, hrefAbs: string}>} A map where the keys are the `id` of the headings
     * and the values are objects containing `hrefAttr` (the relative href attribute of the anchor link) and `hrefAbs`
     * (the absolute URL of the anchor link).
     */
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

            const hrefAbs = link.href;
            map.set(id, { hrefAttr, hrefAbs });
        });
        return map;
    }

    /**
     * Attaches an external navigation handler to the provided anchor element.
     * When the anchor is clicked, it prevents the default action, stops propagation,
     * and navigates the browser to the specified absolute URL.
     *
     * @param {HTMLAnchorElement} a The anchor element to attach the external navigation handler to.
     * @param {string} hrefAbs The absolute URL to navigate to when the anchor is clicked.
     * @return {void}
     */
    function attachExternalNavigation(a, hrefAbs) {
        if (a.dataset.forwardedClick === 'true') return;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = hrefAbs;
        });
        a.dataset.forwardedClick = 'true';
    }

    /**
     * Updates the Table of Contents (ToC) links within a document to reflect the correct locations of heading targets
     * and attaches external navigation functionality. This operation is performed only once per call.
     *
     * The method collects all heading targets in the content root and matches them with existing ToC links in the
     * specified ToC root elements. If a ToC link's `href` attribute does not match the intended heading target's identifier,
     * it updates the `href` value and marks the ToC link as updated with a `data-forwarded` attribute.
     *
     * @return {boolean} Returns `false` if the content root is invalid or there are no ToC roots.
     * Returns `true` if no heading targets are found. Otherwise, returns a boolean indicating whether any ToC links were updated.
     */
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

    /**
     * Executes the `rewriteTocLinksOnce` function repeatedly with a specified retry mechanism.
     * The function will keep retrying until it succeeds or the maximum number of attempts is reached.
     *
     * @return {void} This function does not return a value.
     */
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

    /**
     * Observes dynamic changes in the DOM elements such as the Table of Contents (TOC) or content roots
     * and updates the TOC links when relevant modifications are detected.
     *
     * @return {void} Does not return a value.
     */
    function observeDynamicChanges() {
        const observe = (el) => {
            if (!el) return;
            const mo = new MutationObserver(() => {
                rewriteTocLinksOnce();
            });
            mo.observe(el, { childList: true, subtree: true });
        };

        getTocRoots().forEach(observe);
        observe(getContentRoot());
    }

    /**
     * Initializes the application by performing the necessary setup operations.
     * This includes rewriting with retries and observing dynamic changes.
     *
     * @return {void} Does not return a value.
     */
    function init() {
        rewriteWithRetries();
        observeDynamicChanges();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    if (window.document$ && typeof window.document$.subscribe === 'function') {
        window.document$.subscribe(() => {
            init();
        });
    }
})();

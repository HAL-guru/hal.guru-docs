try:
    import requests
except Exception:
    requests = None

try:
    from markupsafe import Markup
except Exception:
    class Markup(str):
        pass


def define_env(env):
    print("[macros] define_env: start")

    @env.macro
    def ping():
        return "pong"

    @env.macro
    def badge(text, color="blue"):
        html = (
            f'<span class="mdx-badge"\n'
            f'      style="background:{color};\n'
            f'             padding:2px 6px;\n'
            f'             border-radius:4px;\n'
            f'             color:#fff;">\n'
            f'  {text}\n'
            f'</span>'
        )
        return Markup(html)

    @env.macro
    def get_versions():
        if requests is None:
            return {}
        try:
            r = requests.get('https://api.hal.guru/platform/versions', timeout=5)
            r.raise_for_status()
            return r.json()
        except Exception:
            return {}


    @env.macro
    def get_prerelease_versions():
        if requests is None:
            return {}
        try:
            r = requests.get('https://api-dev.hal.guru/platform/versions', timeout=5)
            r.raise_for_status()
            return r.json()
        except Exception:
            return {}

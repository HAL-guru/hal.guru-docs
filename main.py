from pathlib import Path

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
        """
        Macro function that returns a simple response when invoked. This function
        can be used as a utility to verify the framework or service's readiness
        or to provide a basic response for debugging purposes.

        :return: A string that contains the response "pong".
        :rtype: str
        """
        return "pong"

    @env.macro
    def badge(text, color="blue"):
        """
        Generates an HTML badge with customizable text and background color.

        This function creates an HTML `span` element styled to resemble a badge,
        applying a specified `color` to the badge's background and a specified
        `text` to be displayed inside the badge. The function returns the generated
        HTML with escaped content, ensuring safe injection.

        :param text: The text to display within the badge.
        :type text: str
        :param color: The background color of the badge. Defaults to "blue".
        :type color: str, optional
        :return: A Markup object containing the generated HTML.
        :rtype: Markup
        """
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
    def docs_version(default="", filename="autogen-docs-version.txt"):
        """
        Attempts to retrieve the version from a specified file in the project directory. If the file
        does not exist or cannot be read, the default version is returned. Ensures that the function
        gracefully handles errors, returning the default value in any exception case.

        :param default: Default version string to return when no valid version can be retrieved.
        :type default: str
        :param filename: Name of the file expected to contain the version information.
        :type filename: str
        :return: Version string extracted from the file or the provided default string in case of
                 absence of the file or errors.
        :rtype: str
        """
        try:
            docs_dir = env.conf.get("docs_dir", "docs")
            base = Path(env.project_dir) / docs_dir
            path = base / filename
            if not path.exists():
                return default
            value = path.read_text(encoding="utf-8").strip()
            return value or default
        except Exception:
            return default

    try:
        extra = env.conf.get("extra") or {}
        extra["docs_version"] = docs_version()
        env.conf["extra"] = extra
    except Exception:
        pass

    print("[macros] registered")

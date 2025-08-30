
/**
 * Checks if the platform environment is stable by invoking the platform environment checking mechanism.
 *
 * @return {Promise<void>} A promise that resolves once the platform environment has been checked.
 */
async function checkPlatformStableEnvironment() {
    await checkFileVersion('', 'https://docs.hal.guru/autogen-docs-version.txt', 'warning-message');
    await checkPlatformEnvironment('', '');
}

/**
 * Checks if the platform is operating under a prerelease or developer environment by
 * validating it against specific environment flags.
 *
 * @return {Promise<void>} A promise that resolves when the platform environment check is complete.
 */
async function checkPlatformPrereleaseEnvironment() {
    await checkPlatformEnvironment('-prerelease', '-dev');
}

/**
 * Checks the platform environment by performing version and status checks for multiple services.
 * This includes verifying the compatibility and availability of services like CLI, API, admin, chat, webhook, internal services, and login.
 *
 * @param {string} idPostfix - The postfix string appended to service identifiers and messages.
 * @param {string} subdomainPostfix - The postfix string appended to service subdomains in URLs.
 * @return {Promise<void>} A promise that resolves when all platform environment checks are complete.
 */
async function checkPlatformEnvironment(idPostfix, subdomainPostfix) {
    await checkFileVersion(
        'cli' + idPostfix,
        'https://docs.hal.guru/autogen-cli' + idPostfix + '-version.txt',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'api' + idPostfix,
        'https://api' + subdomainPostfix + '.hal.guru/platform/status',
        'https://api' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'admin' + idPostfix,
        'https://admin' + subdomainPostfix + '.hal.guru/platform/status',
        'https://admin' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'chat' + idPostfix,
        'https://chat' + subdomainPostfix + '.hal.guru/platform/status',
        'https://chat' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'login' + idPostfix,
        'https://login' + subdomainPostfix + '.hal.guru/platform/status',
        'https://login' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'webhook' + idPostfix,
        'https://webhook' + subdomainPostfix + '.hal.guru/platform/status',
        'https://webhook' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'internal' + idPostfix,
        'https://internal' + subdomainPostfix + '.hal.guru/platform/status',
        'https://internal' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');
}

/**
 * Checks the platform status and fetches the API version if active, otherwise sets inactive messages and displays a warning.
 *
 * @param {string} idPrefix - Prefix used for identifying message elements and API calls.
 * @param {string} statusUrl - URL to retrieve the platform's status.
 * @param {string} versionUrl - URL to fetch the API version when the platform is active.
 * @param {string} warningId - Identifier for displaying warning messages.
 * @return {Promise<void>} Promise resolving when the status check and version retrieval or warnings are complete.
 */
async function checkPlatformStatusAndVersion(idPrefix, statusUrl, versionUrl, warningId) {
    const status = await getStatus(idPrefix + '-status', statusUrl);

    if (status) {
        await getApiVersion(idPrefix, versionUrl);
    } else {
        setMessage(idPrefix + '-app-version', '🛑 Inactive');
        setMessage(idPrefix + '-core-version', '🛑 Inactive');
        setWarningMessage(warningId);
    }
}

/**
 * Checks the file version of a given file identified by the idPrefix and URL.
 * If the file version cannot be retrieved, it sets a warning message identified by warningId.
 *
 * @param {string} idPrefix - The prefix identifier for the file.
 * @param {string} url - The URL of the file to check the version for.
 * @param {string} warningId - The identifier for the warning message to be set if the file version is not found.
 * @return {Promise<void>} A promise that resolves when the operation is complete.
 */
async function checkFileVersion(idPrefix, url, warningId) {

    if (!await getFileVersion(idPrefix, url)) {
        setWarningMessage(warningId);
    }
}

/**
 * Fetches the file version from the specified URL and updates the corresponding elements with the retrieved version.
 *
 * @param {string} idPrefix - The prefix for the IDs of the elements to be updated with the version.
 * @param {string} url - The URL from which the version information will be fetched.
 * @return {Promise<boolean>} - A promise that resolves to `true` if the version was successfully fetched and updated, or `false` if an error occurred.
 */
async function getFileVersion(idPrefix, url) {
    setMessage(idPrefix + '-app-version', 'Updating...');
    setMessage(idPrefix + '-core-version', 'Updating...');
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const version = await response.text() ?? 'Unknown';
        setMessage(idPrefix + '-app-version', '<strong>' + version + '</strong>');
        setMessage(idPrefix + '-core-version', '<strong>' + version + '</strong>');
        return true;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage(idPrefix + '-app-version', 'Unknown');
        setMessage(idPrefix + '-core-version', 'Unknown');
        return false;
    }
}

/**
 * Fetches a status update from a given URL and updates the message based on the response.
 *
 * @param {string} statusId - The ID used to identify the status message to update.
 * @param {string} url - The URL from which to fetch the status update.
 * @return {Promise<boolean>} A promise that resolves to `true` if the status is "OK", otherwise `false`.
 */
async function getStatus(statusId, url) {
    setMessage(statusId, '🔄 Updating...');
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const result = await response.text();
        if (result === 'OK') {
            setMessage(statusId, '🟢 Active');
            return true;
        }
        setMessage(statusId, '🛑 ' + result);
        return false;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage(statusId, '🛑 Inactive');
        return false;
    }
}

/**
 * Fetches the API version details from the given URL and updates the specified UI elements with the version information.
 *
 * @param {string} idPrefix - The prefix used to identify the HTML elements that will be updated with version information.
 * @param {string} url - The URL from which the API version details will be fetched.
 * @return {Promise<boolean>} A promise that resolves to `true` if the version details are fetched and updated successfully, or `false` if an error occurred.
 */
async function getApiVersion(idPrefix, url) {
    setMessage(idPrefix + '-app-version', 'Updating...');
    setMessage(idPrefix + '-core-version', 'Updating...');

    try {
        const versionsResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!versionsResponse.ok) {
            throw new Error(`HTTP ${versionsResponse.status}: ${versionsResponse.statusText}`);
        }

        const versions = await versionsResponse.json();
        if (versions && typeof versions === 'object') {
            for (const [key, value] of Object.entries(versions)) {
                setMessage(idPrefix + '-' + key + '-version', '<strong>' + value + '</strong>');
            }
        }
        return true;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage(idPrefix + '-app-version', 'Unknown');
        setMessage(idPrefix + '-core-version', 'Unknown');
        return false;
    }
}

/**
 * Updates the innerHTML of a span element with the specified message.
 *
 * @param {string} id The ID of the span element to update.
 * @param {string} message The message to set as the innerHTML of the span element.
 * @return {void} Does not return any value.
 */
function setMessage(id, message) {
    const span = document.getElementById(id);
    if (!span) {
        console.warn(`id="${id}" not found. Make sure you have a span with this id in the HTML. Example: <span id="${id}"></span>.`);
        return;
    }
    span.innerHTML = message;
}

/**
 * Sets a warning message for a specified element by ID.
 *
 * @param {string} id - The unique identifier of the element where the warning message will be set.
 * @return {void} This function does not return a value.
 */
function setWarningMessage(id) {
    setMessage(id, '<blockquote>Please check back later.</blockquote>');
}

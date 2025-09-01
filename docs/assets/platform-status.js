/**
 * Updates the platform status and versions for the "stable" release channel.
 * This function utilizes the `updatePlatformStatusAndVersions` method, specifically targeting the "stable" channel.
 *
 * @return {Promise<void>} A promise that resolves when the platform status and versions for the "stable" release channel are successfully updated.
 */
async function updateStablePlatformStatusAndVersions() {
    await updatePlatformStatusAndVersions('stable');
}

/**
 * Updates the platform status and versions for the prerelease environment.
 * This function calls `updatePlatformStatusAndVersions` with a "prerelease" parameter
 * to manage platform versions and statuses specifically for the prerelease configuration.
 *
 * @return {Promise<void>} A promise that resolves when the platform status
 * and version updates for the prerelease environment are complete.
 */
async function updatePrereleasePlatformStatusAndVersions() {
    await updatePlatformStatusAndVersions('prerelease');
}

/**
 * Updates the platform's status and versions for various subdomains based on the specified environment.
 *
 * @param {string} [environment='stable'] - The environment to be used for the platform update. Valid values are 'stable' and 'prerelease'. Defaults to 'stable'.
 * @return {Promise<void>} A promise that resolves when all updates are completed.
 */
async function updatePlatformStatusAndVersions(environment = 'stable') {
    let subdomainPostfix = '';
    if (environment === 'prerelease') {
        subdomainPostfix = '-dev';
    } else if (environment !== 'stable') {
        console.error('Unknown environment: ', environment);
        return;
    }

    if (environment === 'stable') {
        await updateVersionsFromTextFile('https://docs.hal.guru/autogen-docs-version.txt',
            null, 'docs-core-version');
        await updateVersionsFromTextFile(
            'https://docs.hal.guru/autogen-cli-version.txt',
            'cli-app-version', 'cli-core-version');
    } else {
        await updateVersionsFromTextFile(
            'https://docs.hal.guru/autogen-cli-prerelease-version.txt',
            'cli-app-version', 'cli-core-version');
    }

    await updatePlatformStatusAndVersion(
        'https://api' + subdomainPostfix + '.hal.guru/platform/status',
        'https://api' + subdomainPostfix + '.hal.guru/platform/versions',
        'api-status', 'api-app-version', 'api-core-version');

    await updatePlatformStatusAndVersion(
        'https://admin' + subdomainPostfix + '.hal.guru/platform/status',
        'https://admin' + subdomainPostfix + '.hal.guru/platform/versions',
        'admin-status', 'admin-app-version', 'admin-core-version');

    await updatePlatformStatusAndVersion(
        'https://chat' + subdomainPostfix + '.hal.guru/platform/status',
        'https://chat' + subdomainPostfix + '.hal.guru/platform/versions',
        'chat-status', 'chat-app-version', 'chat-core-version');

    await updatePlatformStatusAndVersion(
        'https://login' + subdomainPostfix + '.hal.guru/platform/status',
        'https://login' + subdomainPostfix + '.hal.guru/platform/versions',
        'login-status', 'login-app-version', null);

    await updatePlatformStatusAndVersion(
        'https://webhook' + subdomainPostfix + '.hal.guru/platform/status',
        'https://webhook' + subdomainPostfix + '.hal.guru/platform/versions',
        'webhook-status', 'webhook-app-version', 'webhook-core-version');

    await updatePlatformStatusAndVersion(
        'https://internal' + subdomainPostfix + '.hal.guru/platform/status',
        'https://internal' + subdomainPostfix + '.hal.guru/platform/versions',
        'internal-status', 'internal-app-version', 'internal-core-version');

    if (environment === 'stable') {
        await updateSchemasStatusAndVersion(
            'https://docs.hal.guru/schemas/halguru-schema.json',
            'schemas-status', 'schemas-core-version');
    }
}

/**
 * Updates the status and version based on the provided URLs.
 * Fetches the status from the `statusUrl` and updates the application and core versions
 * if the status is successfully retrieved. Otherwise, sets the version messages to "Unknown".
 *
 * @param {string} statusUrl - The URL to fetch the status from.
 * @param {string} versionUrl - The URL to fetch version details from.
 * @param {string} statusId - The identifier for the status to update.
 * @param {string} appVersionId - The identifier for the application version to update.
 * @param {string} coreVersionId - The identifier for the core version to update.
 * @return {Promise<void>} Resolves when the status and version updates are completed.
 */
async function updatePlatformStatusAndVersion(statusUrl, versionUrl, statusId, appVersionId, coreVersionId) {
    const status = await updatePlatformStatus(statusUrl, statusId);
    if (status) {
        await updatePlatformVersions(versionUrl, appVersionId, coreVersionId);
    } else {
        setMessage('Unknown', appVersionId);
        setMessage('Unknown', coreVersionId);
        setWarningMessage();
    }
}

/**
 * Updates application and core version labels by fetching version information from the given URL.
 *
 * @param {string} url - The URL from which the version information will be fetched.
 * @param {string} appVersionId - The identifier for the element where the application version will be displayed.
 * @param {string} coreVersionId - The identifier for the element where the core version will be displayed.
 * @return {Promise<boolean>} A promise that resolves to true if the versions were successfully updated, or false if an error occurred.
 */
async function updateVersionsFromTextFile(url, appVersionId, coreVersionId) {
    setMessage('Updating...', appVersionId);
    setMessage('Updating...', coreVersionId);
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
        setMessage('<strong>' + version + '</strong>', appVersionId);
        setMessage('<strong>' + version + '</strong>', coreVersionId);
        return true;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage('Unknown', appVersionId);
        setMessage('Unknown', coreVersionId);
        setWarningMessage();
        return false;
    }
}

/**
 * Updates the status of an element identified by the provided statusId based on a response from the provided URL.
 *
 * @param {string} url - The URL to fetch the status information from.
 * @param {string} statusId - The identifier of the element whose status needs to be updated.
 * @return {Promise<boolean>} A promise that resolves to true if the status update was successful, otherwise false.
 */
async function updatePlatformStatus(url, statusId) {
    setMessage('🔄 Updating...', statusId);
    try {
        const result = await downloadTextFile(url);
        if (result === 'OK') {
            setMessage('🟢 Active', statusId);
            return true;
        }
        setMessage('🛑 ' + result, statusId);
        setWarningMessage();
        return false;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage('🛑 Inactive', statusId);
        setWarningMessage();
        return false;
    }
}

/**
 * Updates application and core version details by fetching information from a JSON URL.
 *
 * @param {string} url - The URL to fetch the JSON data from.
 * @param {string} appVersionId - The identifier for the application version message.
 * @param {string} coreVersionId - The identifier for the core version message.
 * @return {Promise<boolean>} Resolves to true if the update is successful, otherwise false.
 */
async function updatePlatformVersions(url, appVersionId, coreVersionId) {
    setMessage('Updating...', appVersionId);
    setMessage('Updating...', coreVersionId);

    try {
        const versions = await downloadJsonFile(url);
        setMessage('<strong>' + versions['app'] + '</strong>', appVersionId);
        setMessage('<strong>' + versions['core'] + '</strong>', coreVersionId);
        return true;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage('Unknown', appVersionId);
        setMessage('Unknown', coreVersionId);
        setWarningMessage();
        return false;
    }
}

/**
 * Updates the schema version by downloading data from the provided URL and setting the version message.
 *
 * @param {string} url - The URL to download the schema version data from.
 * @param {string} coreVersionId - The ID of the core version being updated, used to display messages.
 * @return {Promise<boolean>} A promise that resolves to true if the update was successful, or false if an error occurred.
 */
async function updateSchemasStatusAndVersion(url, statusId, coreVersionId) {
    setMessage('🔄 Updating...', statusId);
    setMessage('Updating...', coreVersionId);

    try {
        const versions = await downloadJsonFile(url);
        setMessage('🟢 Published', statusId);
        setMessage('<strong>' + versions['x-version'] + '</strong>', coreVersionId);
        return true;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage('🛑 Inactive', statusId);
        setMessage('Unknown', coreVersionId);
        setWarningMessage();
        return false;
    }
}

/**
 * Downloads a text file from the specified URL and returns its content as a string.
 *
 * @param {string} url - The URL of the text file to download.
 * @return {Promise<string>} A promise that resolves to the text content of the downloaded file.
 * @throws {Error} Throws an error if the HTTP response is not successful.
 */
async function downloadTextFile(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'text/plain'
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.text();
}

/**
 * Downloads a JSON file from the specified URL and parses its content.
 *
 * @param {string} url - The URL of the JSON file to be downloaded.
 * @return {Promise<Object>} A promise that resolves to the parsed JSON object.
 * @throws {Error} If the HTTP request fails or returns a non-OK status.
 */
async function downloadJsonFile(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
}

/**
 * Updates the inner HTML content of a span element identified by its id.
 *
 * @param {string} message - The message to be set as the inner HTML of the span element.
 * @param {string} spanId - The id of the span element to update.
 * @return {void} This method does not return a value.
 */
function setMessage(message, spanId) {
    if (spanId === undefined) {
        return;
    }
    const span = document.getElementById(spanId);
    if (!span) {
        console.warn(`id="${spanId}" not found. Make sure you have a span with this id in the HTML. Example: <span id="${spanId}"></span>.`);
        return;
    }
    span.innerHTML = message;
}

/**
 * Sets a warning message to be displayed to the user.
 *
 * This method uses a predefined message and assigns it to a specific
 * element on the page with a "warning-message" class or ID. The function
 * is intended to inform users to check back later for updates.
 *
 * @return {void} This method does not return a value.
 */
function setWarningMessage() {
    setMessage('<blockquote>Please check back later.</blockquote>', 'warning-message');
}

---
title: Platform Features
description: 
author: Chris Prusik
---

## Creating AI agents in your favorite IDE

You can edit AI agent configuration files with any text editor, but we recommend **Visual Studio Code** for its schema-based autocompletion, real-time validation with clear errors, hover hints and inline docs, quick fixes and snippets, and seamless setup that auto-installs and maps [YAML schemas](../schemas/index.md) — making editing faster, safer, and less error-prone; if you prefer another editor, you can manually install and map the YAML schemas (e.g., via a YAML language server) to get similar benefits like completion, validation, and tailored hints.

### → [Details](../architecture/yaml-editor.md)

## Centralized Auth with OpenID Connect

A centralized [authentication service](https://login.hal.guru) that handles user sign-in and registration for individuals interacting with AI agents. It manages user credentials, authentication flows, and secure access control for the AI communication platform. We provide out of the box “**Sign in with Google**” and “**Sign in with Microsoft**” for enterprise SSO, as well as support for Two‑Factor Authentication (**2FA**). 

### → [Details](../architecture/identity-server.md)

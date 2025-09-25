---
title: Centralized Auth with OpenID Connect
description: 
author: Chris Prusik
---

A centralized [authentication service](https://login.hal.guru)
that handles user login and registration processes for individuals interacting with AI agents. This service manages user credentials, authentication flows,
and secure access control for the AI communication platform.

## Open Standards and Strong Security

Identity platform uses open security standards (OpenID Connect 1.0, OAuth 2.1) with modern flows like Authorization Code + PKCE and short‑lived JWT access tokens. Cryptographic keys (RS256/ES256) are securely managed and rotated, with automated discovery endpoints for seamless integration. This means partners and internal apps can connect easily while maintaining strong, proven protection.

## SSO with Google and Microsoft, Backed by Robust 2FA

Access is tightly controlled through role‑based access control (RBAC), clear scopes,
and per‑tenant isolation, ensuring each customer’s data and permissions stay separate.
We provide out‑of‑the‑box “Sign in with Google” and “Sign in with Microsoft,”
including Azure Active Directory (Microsoft Entra ID) integration for enterprise SSO.
Two‑Factor Authentication (2FA) is supported across the platform,
with options such as TOTP, WebAuthn/Passkeys, and SMS/Email OTP.
Sessions are centrally managed, and global logout closes both browser 
and server sessions to minimize risk.

## End-to-End Security, Compliance, and Identity at Scale

Security is monitored end‑to‑end: rate limiting and anti‑brute‑force protections,
audit trails for logins and token actions, and webhook alerts for key events
(e.g., account lock, MFA enrollment). We support automated user provisioning via SCIM
and integrations with major identity providers (Google, Microsoft, Okta).
Compliance is built in with data retention policies and GDPR support
(right to erasure and data export).

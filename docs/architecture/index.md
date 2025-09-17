---
title: Platform Architecture
description: Platform Architecture
author: Chris Prusik
draft: true
---

The AI agent development platform consists of the following key components:

| Feature                         | Description |
|---------------------------------|-------------|
| **Agent Development Framework** | A set of tools and libraries that enable developers to create AI agents |
| **Agent Framework**             | A foundational structure that provides the basic architecture for AI agents |
| **Integration Layer**           | APIs and connectors that enable seamless communication between different services |
| **Orchestration Engine**        | A management system that coordinates multiple agents and their interactions |
| **RAG Database**                | A centralized repository for storing and accessing information used by agents |
| **Development Tools**           | CLI application with debugging tools and testing environments for agent creation |
| **Deployment Infrastructure**   | Cloud or on-premise hosting solutions for running AI agents at scale |
| **Monitoring & Analytics**      | Real-time performance tracking and behavioral analysis tools |
| **Security Layer**              | Authentication, authorization, and data protection mechanisms |

This platform enables developers to create, deploy, and manage intelligent agents that can perform various automated tasks, make decisions, and interact with users or other systems in a controlled and scalable environment.

## CLI application 

A cross-platform [command-line interface tool](../cli/index.md) (macOS, Windows, Linux) for creating, testing, and publishing AI agents

A command-line interface tool that enables developers to:
- Create and configure AI agents with custom behaviors and capabilities
- Test agent functionality and performance in various scenarios
- Deploy and publish agents to production environments
- Manage agent lifecycles and updates through simple CLI commands

<!-- [Hal.guru CLI](../images/halguru-cli.png) -->

## Web Chat Platform

A comprehensive platform for deployed AI agents through web-based chat interfaces.

## API Integration

The HAL.guru platform provides comprehensive API solutions for seamless 
integration across different application types and external services.

| Endpoint                               | Description |
|----------------------------------------|-------------|
| [API](https://api.hal.guru/swagger/)   | Primary API endpoint for external application integration with complete Swagger documentation. |
| [Internal](https://internal.hal.guru/) | Dedicated internal API designed for integration with Mobile applications (iOS, Android), Desktop applications (Windows, macOS), Web applications and services. |
| [WeHhook](https://webhook.hal.guru)    | External API endpoint specifically designed for receiving and processing messages from third-party communication services, including: **Twilio integration** supporting multiple communication channels, like SMS messaging, WhatsApp Business, Facebook Messenger, Instagram Direct Messages, Google Business Communication (RCS). |

## Internal Worker Services

Background services allow you to process queued tasks that are executed 
or consumed by AI agents. Typical use cases include automatically handling 
incoming messages in email inboxes configured within the system, 
enabling continuous, reliable processing without requiring user interaction.

## Orchestrator

An AI agent management application [admin.hal.guru](https://admin.hal.guru) 
designed for comprehensive oversight and control of artificial intelligence systems. 
This platform provides capabilities for monitoring agent conversations, 
verifying ongoing processes, and ensuring proper execution of AI workflows. 
The application includes robust user management features with granular access controls, 
allowing administrators to define permissions and maintain security across the AI ecosystem.

| Feature                                                                         | Description                                                                |
|---------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| **Agent Monitoring**                                                            | Real-time observation of AI agent activities and decision-making processes |
| **Conversation Management**                                                     | Complete visibility into agent interactions and communication flows        |
| **Process Verification** |  Tools for validating and auditing AI agent operations                     |
| **User Administration**                                                         | Comprehensive user management with role-based access control               
| **Security Oversight** | Ensuring proper authorization and maintaining system integrity across all AI operations |

> Currently in development.

## Desktop Applications

Cross-platform desktop applications for MacOS and Windows that enable seamless interaction with AI agents.

> Currently in development.

## Mobile Applications

Native mobile applications for Android and iOS platforms designed 
for conversing with AI agents available through the hal.guru platform. 

> Currently in development.
 
## Centralized Auth with OpenID Connect

A centralized [authentication service](https://login.hal.guru) that handles user sign-in and registration for individuals interacting with AI agents. It manages user credentials, authentication flows, and secure access control for the AI communication platform. We provide out of the box “Sign in with Google” and “Sign in with Microsoft,” including Azure Active Directory (Microsoft Entra ID) integration for enterprise SSO, as well as support for Two‑Factor Authentication (2FA). 

### ↗ [Details](identity-server.md)

## → [Status Dashboard](../status/index.md)

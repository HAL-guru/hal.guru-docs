---
title: Agent Configuration File
description:
author: Chris Prusik
---

A set of agent behaviors that can be toggled during a session. Each behavior specifies goals, tone, constraints, and switching commands. Behaviors can be combined, and the most recently activated behavior takes precedence on conflicts.

A comprehensive configuration covers:

| Feature                                                                               | Description                                                                                    |
|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Agent                                                                                 | Agent-specific settings, such as name, description, persona, and appearance.                   |
| Prompts                                                                               | System, developer, and task prompts that guide the agent’s tone, scope, and response style.    |
| LLM connectors                                                                        | Mapped providers, models, parameters (e.g., temperature, max tokens), and instruction sources. |
| RAG integrations                                                                      | Connectors to vector stores, retrievers, indexing policies, and grounding strategies.          |
| Behavior and policies                                                                 | Rules for safety, confidentiality, escalation, tool usage, and fallback logic.                 |
| Appearance and UX                                                                     | Name, description, persona, response formatting, and icons and color themes                    |
| Secrets and credentials |  Securely referenced tokens, API keys, and connection strings                                  |
| Metadata | Author, version, changelog, licensing, and compliance notes. |
| Testing and validation | Unit tests, prompt regression tests, evaluation metrics, and monitoring hooks. |
| Operational settings | Rate limits, caching, logging, observability, and error-handling policies. |

## → [Full Specification](autogen-root.md)
## → [Reference Index](../yaml-agent/autogen-reference-index.md)

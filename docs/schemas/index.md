---
title: YAML Schemas for hal.guru
description:
author: Chris Prusik
draft: true
---

YAML schemas define the structure, allowed fields, data types, and validation rules for 
AI Agent configurations. 
By describing what a valid configuration should look like, schemas help catch errors early, 
ensure consistency across environments, and enable richer tooling such as auto-completion, 
linting, and documentation hints in editors. 

They also make configurations more maintainable and self-descriptive, 
improving collaboration between teams. 
In practice, a schema acts as a contract that both authors and automated systems 
can rely on when creating, validating, and processing YAML files.

## AI Agent Configuration File

zestaw opisujących zachowanie agenta promptów, które mogą być przełączane w trakcie sesji.

a set of agent behaviors that can be toggled during a session. Each behavior specifies goals, tone, constraints, and switching commands. Behaviors can be combined, and the most recently activated behavior takes precedence on conflicts.

A comprehensive configuration covers:
**Prompts**: System, developer, and task prompts that guide the agent’s tone, scope, and response style.
- LLM connectors: Mapped providers, models, parameters (e.g., temperature, max tokens), and instruction sources.
- RAG integrations: Connectors to vector stores, retrievers, indexing policies, and grounding strategies.
- Behavior and policies: Rules for safety, confidentiality, escalation, tool usage, and fallback logic.
- Appearance and UX: Name, description, persona, response formatting, and channel-specific behaviors.
- Secrets and credentials: Securely referenced tokens, API keys, and connection strings.
- Metadata: Author, version, changelog, licensing, and compliance notes.
- Testing and validation: Unit tests, prompt regression tests, evaluation metrics, and monitoring hooks.
- Operational settings: Rate limits, caching, logging, observability, and error-handling policies.

### [AI Agent Configuration Schema](https://docs.hal.guru/schemas/halguru-schema.json)
Such a configuration ensures the agent remains reliable, secure, and consistent across environments while enabling predictable and testable behavior.

1. **[halguru-schema.json](halguru-schema.json)** -  The full configuration of an agent. See also: [*.halguru.yaml](https://docs.hal.guru/models/%28halguru%29/) files
2. **[halguru-state-schema.json](halguru-state-schema.json)** - Defines the operational state and associated metadata for a session of an AI agent. See also: [*.halguru-state.yaml](https://docs.hal.guru/models/%28state%29/) files
3. **[halguru-action-schema.json](halguru-action-schema.json)** - Represents an action executed by an AI agent in the system. See also: [*.halguru-action.yaml](https://docs.hal.guru/models/%28action%29/) files
4. **[halguru-website-schema.json](halguru-website-schema.json)** - Represents the configuration settings for a website crawler or scraper. Defines parameters such as the name of the website, the starting URL, maximum allowed levels and pages, specific URL patterns to process, and connectors required for linking external components like LLMs and file systems. See also: [*.halguru-website.yaml](https://docs.hal.guru/models/%28website%29/) files

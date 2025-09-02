---
title: Configuration Files for AI Agents
description:
author: Chris Prusik
draft: true
---

Wszystkie 

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

A set of agent behaviors that can be toggled during a session. Each behavior specifies goals, tone, constraints, and switching commands. Behaviors can be combined, and the most recently activated behavior takes precedence on conflicts.

A comprehensive configuration covers:
**Prompts**: System, developer, and task prompts that guide the agent’s tone, scope, and response style.
**LLM connectors**: Mapped providers, models, parameters (e.g., temperature, max tokens), and instruction sources.
**RAG integrations**: Connectors to vector stores, retrievers, indexing policies, and grounding strategies.
**Behavior and policies**: Rules for safety, confidentiality, escalation, tool usage, and fallback logic.
**Appearance and UX**: Name, description, persona, response formatting, and icons and color themes.
**Secrets and credentials**: Securely referenced tokens, API keys, and connection strings.
**Metadata**: Author, version, changelog, licensing, and compliance notes.
**Testing and validation**: Unit tests, prompt regression tests, evaluation metrics, and monitoring hooks.
**Operational settings**: Rate limits, caching, logging, observability, and error-handling policies.

### [AI Agent Configuration Schema](https://docs.hal.guru/schemas/halguru-schema.json)

Such a configuration ensures the agent remains reliable, secure, and consistent across environments while enabling predictable and testable behavior.

1. The full configuration of an agent. See also: *.halguru.yaml files
2. Defines the operational state and associated metadata for a session of an AI agent. See also: *.halguru-state.yaml files
3. Represents an action executed by an AI agent in the system. See also: *.halguru-action.yaml files
4. Represents the configuration settings for a website crawler or scraper. Defines parameters such as the name of the website, the starting URL, maximum allowed levels and pages, specific URL patterns to process, and connectors required for linking external components like LLMs and file systems. See also: *.halguru-website.yaml files

## Install Schema

## References

### ⮕ [YAML Tutorial](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
### ⮕ [YAML Official Manual](https://yaml.org/spec/1.2.2/)

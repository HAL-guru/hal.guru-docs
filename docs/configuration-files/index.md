---
title: Configuration Files for AI Agents
description:
author: Chris Prusik
---

We use YAML files to define the structure of AI agents, persist their runtime state, specify the actions they can execute, and configure web scraping workflows. This approach keeps configurations human-readable, versionable, and easy to validate, while separating logic from data for cleaner, more maintainable systems.

## Agent Configuration

An agent supports toggleable behaviors that define goals, tone, constraints, and switching commands, with the most recently activated behavior taking precedence on conflicts. A complete configuration includes prompts, LLM connectors, RAG integrations, safety and usage policies, UX/persona, secrets, metadata, testing/validation, and operational settings (rate limits, error handling).

### → [Introduction](../yaml-agent/index.md)
### → [Full Specification](../yaml-agent/autogen-root.md)
### → [Reference Index](../yaml-agent/autogen-reference-index.md)
<!-- ### →  [Reference](../yaml-agent/autogen-reference.md) -->

## Agent State

<!-- ### → [Introduction](../yaml-state/index.md) -->
### → [Full Specification](../yaml-state/autogen-root.md)
### → [Reference Index](../yaml-state/autogen-reference-index.md)

## Agent Actions

<!-- ### → [Introduction](../yaml-action/index.md) -->
### → [Full Specification](../yaml-action/autogen-root.md)
### → [Reference Index](../yaml-action/autogen-reference-index.md)

## Website Scraping Configuration

<!-- ### → [Introduction](../yaml-webscraping/index.md) -->
### → [Full Specification](../yaml-webscraping/autogen-root.md)
### → [Reference Index](../yaml-webscraping/autogen-reference-index.md)

## References

### ↗ [YAML Tutorial](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
### ↗ [YAML Official Manual](https://yaml.org/spec/1.2.2/)

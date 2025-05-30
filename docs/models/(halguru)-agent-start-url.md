<!--
title: Url
description: URL associated with the start configuration of the agent.
version: 1.40.7-beta.14
generated: true
date: 2025-04-29
node: This file is generated by the command-line program: `halguru manual -c -m`
-->


URL associated with the start configuration of the agent.

```yaml
Agent:
  Start:
    Url:
```

## Summary

Specifies a URL associated with the start configuration of the agent. Ensures the value conforms to a valid URL format.

## Properties

* [LlmConnectorName]((halguru)-agent-start-llmconnectorname.md) - Name of the LLM connector to be used from the LlmConnectors list.
* [PromptName]((halguru)-agent-start-promptname.md) - Name of the prompt to be used during the agent's initialization process.
* [Url]((halguru)-agent-start-url.md) - URL associated with the start configuration of the agent.

## Parent models

* [.halguru.yaml: Agent: Start:]((halguru)-agent-start.md)
## Summary

* Path: `.halguru.yaml: Agent: Start: Url:`
* Internal type: `AgentStart`
* Internal root type: `AgentConfiguration`
* JSON Schema for YAML: [https://docs.hal.guru/schemas/halguru-schema.json](https://docs.hal.guru/schemas/halguru-schema.json)

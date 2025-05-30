<!--
title: Command
description: The command associated with the agent's action.
version: 1.40.7-beta.14
generated: true
date: 2025-04-29
node: This file is generated by the command-line program: `halguru manual -c -m`
-->


The command associated with the agent's action.

```yaml
Command:
```

## Summary

Gets or sets the command associated with the agent's action. This property is used to define the specific operation or instruction that the agent should execute. It can be used in scenarios where execution logic is determined dynamically based on the command string. When this property is set, it represents a direct command to the agent.

## Properties

* [Command]((action)-command.md) - The command associated with the agent's action.
* [RunSqlSelect]((action)-runsqlselect.md) - The SQL SELECT action executed by the agent.
* [SendToPipedrive]((action)-sendtopipedrive.md) - The action to send data to Pipedrive.
* [ChangePrompt]((action)-changeprompt.md) - The action responsible for changing the agent's prompt.
* [ChangetLlmConnector]((action)-changetllmconnector.md) - The action responsible for configuring the LLM connector associated with the agent.

## Parent models

* [.halguru-action.yaml:]((action).md) - Represents an action executed by an agent in the system.

## Summary

* Path: `.halguru-action.yaml: Command:`
* Internal type: `ActionConfiguration`
* Internal root type: `ActionConfiguration`
* JSON Schema for YAML: [https://docs.hal.guru/schemas/halguru-action-schema.json](https://docs.hal.guru/schemas/halguru-action-schema.json)

<!--
title: Messages
description: Chat message themes associated with the theme design.
version: 1.38.9-beta.21
generated: true
date: 2025-04-15
node: This file is generated by the command-line program: `halguru manual -c -m`
-->


Chat message themes associated with the theme design.

```yaml
Agent:
  Themes:
    - Messages:
      Messages:
```

## Summary

Defines the collection of chat message themes related to the theme design, specifying visual and stylistic attributes for different message types.

## Remarks

This property stores a list of objects, each representing the configuration for a specific type of chat message, such as agent messages, user messages, or system notifications. It encompasses customizable details like icon properties and background color, enabling granular control over the presentation of messages within the theme.

## Properties

* [Theme]((halguru)-agent-themes-list-theme.md) - The visual theme for the design configuration - Light or Dark.
* [Messages]((halguru)-agent-themes-list-messages.md) - Chat message themes associated with the theme design.

## Parent models

* [.halguru.yaml: Agent: Themes[]:]((halguru)-agent-themes-list.md)
## Summary

* Path: `.halguru.yaml: Agent: Themes[]: Messages:`
* Internal type: `ThemeDesign`
* Internal root type: `AgentConfiguration`
* JSON Schema for YAML: [https://docs.hal.guru/schemas/halguru-schema.json](https://docs.hal.guru/schemas/halguru-schema.json)

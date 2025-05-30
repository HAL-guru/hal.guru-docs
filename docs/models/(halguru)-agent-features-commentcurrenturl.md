<!--
title: CommentCurrentUrl
description: Determines whether the robot should comment the current URL.
version: 1.40.7-beta.14
generated: true
date: 2025-04-29
node: This file is generated by the command-line program: `halguru manual -c -m`
-->


Determines whether the robot should comment the current URL.

```yaml
Agent:
  Features:
    CommentCurrentUrl:
```

## Summary

Indicates whether the robot should comment the current URL.

## Properties

* [CheckAllUrls]((halguru)-agent-features-checkallurls.md) - Determines whether all URLs exist and are valid in the generated answer.
* [CheckIsAnswerCorrect]((halguru)-agent-features-checkisanswercorrect.md) - Determines whether the answer provided is evaluated as correct.
* [CheckIsLastUrlCorrectAnswer]((halguru)-agent-features-checkislasturlcorrectanswer.md) - Determines whether the last URL in the provided collection is the correct answer.
* [CommentCurrentUrl]((halguru)-agent-features-commentcurrenturl.md) - Determines whether the robot should comment the current URL.
* [PerChannelThreading]((halguru)-agent-features-perchannelthreading.md) - Determines whether a separate thread is created for each channel.
* [MaxRetryAttempts]((halguru)-agent-features-maxretryattempts.md) - Determines whether the robot should retry the check fails.
* [DisplayImagesForUrls]((halguru)-agent-features-displayimagesforurls.md) - Determines whether the robot should display images for URLs.
* [DisplayWebsiteForUrl]((halguru)-agent-features-displaywebsiteforurl.md) - Determines whether the agent should display the website for the URL.

## Parent models

* [.halguru.yaml: Agent: Features:]((halguru)-agent-features.md) - Defines the configurable properties that determine how an agent operates during its execution.

## Summary

* Path: `.halguru.yaml: Agent: Features: CommentCurrentUrl:`
* Internal type: `AgentFeatures`
* Internal root type: `AgentConfiguration`
* JSON Schema for YAML: [https://docs.hal.guru/schemas/halguru-schema.json](https://docs.hal.guru/schemas/halguru-schema.json)

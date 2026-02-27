YAML schemas define the structure, allowed fields, data types, and validation rules for
hal.guru [configurations files](autogen-configuration-files.md). They are used to validate and process YAML files.

By describing what a valid configuration should look like, schemas help catch errors early,
ensure consistency across environments, and enable richer tooling such as auto-completion,
linting, and documentation hints in editors.

They also make configurations more maintainable and self-descriptive,
improving collaboration between teams.
In practice, a schema acts as a contract that both authors and automated systems
can rely on when creating, validating, and processing YAML files.

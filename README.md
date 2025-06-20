# OpenTelemetry POC

This is a simple Node.js API application that has OpenTelemetry tracing enabled.

## Getting Started

Install dependencies and start the server:

```bash
npm install
node index.js
```

The API exposes the following endpoints:

- `GET /` returns `Hello, World!`
- `GET /hello` returns a JSON greeting

Traces are exported to the console using the OpenTelemetry ConsoleSpanExporter.

# Node Function App With Process Crash

This is a simple function app that crashes when it receives a request. The function app is written in Node.js and uses the Azure Functions SDK.

## Get Started

- Rename `local.settings.sample.json` to `local.settings.json`
  - Add your Azure Storage connection string to the `AzureWebJobsStorage` key
- `npm install`
- `npm start`

## Functions

- `httpTrigger`
  - This function is triggered by an HTTP request and writes a `.txt` file to blob storage in the "samples-workitems" container.
- `httpTriggerCrash`
  - This function is triggered by an HTTP request and will crash the worker process after 500ms of being invoked, out of band.
- `storageBlobTrigger`:
  - There are 3 blob trigger functions that are exactly the same in functionality but varying delay intervals
  - These functions are triggered by a blob being written to the "samples-workitems" container.
    - `storageBlobTrigger1` healthy function, has 1 second delay
    - `storageBlobTrigger2` healthy function, has 6 second delay
    - `storageBlobTrigger3` healthy function, has 15 second delay

## Repro Information

In an attempt to repro the bug mentioned in [#9945](https://github.com/Azure/azure-functions-host/issues/9945),
the following steps were taken:

1. Start the function app
1. Invoke the `httpTrigger` function
1. Wait 5 seconds
1. Send a POST request to the `admin/host/restart` API
1. Invoke the `httpTriggerCrash` function

I have not been able to repro the issue but we are trying to create a situation where:

1. The host is requested to shut down with the active JobHost having at least one outstanding invocation
1. The outstanding invocation completing successfully after the active host has been orphaned
1. A new invocation coming in and failing with a process crash

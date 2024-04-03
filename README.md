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
- `storageBlobTrigger`:
  - There are 3 blob trigger functions that are exactly the same in functionality but varying delay intervals
  - These functions are triggered by a blob being written to the "samples-workitems" container.
    - `storageBlobTrigger1` healthy function, has 1 second delay
    - `storageBlobTrigger2` crashes after a 6 second delay
    - `storageBlobTrigger3` healthy function, has 15 second delay

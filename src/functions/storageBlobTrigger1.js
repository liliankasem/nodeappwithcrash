const { app } = require('@azure/functions');

app.storageBlob('storageBlobTrigger1', {
    path: 'samples-workitems/{name}',
    connection: 'AzureWebJobsStorage',
    handler: async (blob, context) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        context.log(`(1) Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
    }
});

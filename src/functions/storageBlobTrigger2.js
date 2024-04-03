const { app } = require('@azure/functions');

app.storageBlob('storageBlobTrigger2', {
    path: 'samples-workitems/{name}',
    connection: 'AzureWebJobsStorage',
    handler: async (blob, context) => {
        await new Promise(resolve => setTimeout(resolve, 6000));
        context.log(`(2) Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
    }
});

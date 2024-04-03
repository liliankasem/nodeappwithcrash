const { app } = require('@azure/functions');

app.storageBlob('storageBlobTrigger3', {
    path: 'samples-workitems/{name}',
    connection: 'AzureWebJobsStorage',
    handler: async (blob, context) => {
        await new Promise(resolve => setTimeout(resolve, 15000));
        context.log(`(3) Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
    }
});

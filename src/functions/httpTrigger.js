const { app, output } = require('@azure/functions');

const blobOutput = output.storageBlob({
    path: `samples-workitems/${Date.now().toString()}.txt`,
    connection: 'AzureWebJobsStorage',
});

app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    return: blobOutput,
    handler: async (request, context) => {
        context.log('Http function processed request.');
        context.log(blobOutput);
        return "hello world";
    }
});

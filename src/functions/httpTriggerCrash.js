const { app } = require('@azure/functions');

app.http('httpTriggerCrash', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Http function processed request.');

        setTimeout(function() {
            // do some stuff here that will execute out of band
            // after this function returns
            process.exit(1);
        }, 500);

        return { body: "hello world" };
    }
});

const { app } = require('@azure/functions');

app.cosmosDB('cosmosDBTrigger1', {
    connectionStringSetting: 'CosmosDBConnectionString', // Remplacez avec le nom de votre paramètre de chaîne de connexion dans les paramètres d'application
    databaseName: 'todo_app', // Nom de votre base de données Cosmos DB
    collectionName: 'tasks', // Nom de la collection (ou container)
    createLeaseCollectionIfNotExists: true, // Crée une collection de baux si elle n'existe pas
    handler: (documents, context) => {
        context.log(`Cosmos DB function processed ${documents.length} documents`);
        // Vous pouvez ajouter votre logique ici pour traiter les documents
    }
});


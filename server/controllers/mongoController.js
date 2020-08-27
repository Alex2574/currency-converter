
// const { MongoClient } = require('mongodb');
// const parserToJson = require('currencyController');
// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     // const uri = "mongodb+srv://Alex:orionring2574@cluster0/test?retryWrites=true&w=majority";
//     const uri = "mongodb://localhost:27017/convert-currency";

//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }


// async function currencyRates(client, newListing) {
//     const result = await client.db("convert-currency").collection("currency").insertOne(newListing);
//     console.log(`New listing created with the following id: ${result.insertedId}`);
// }
// // await createListing(client,
// //     {
// //         name: "Lovely Loft",
// //         summary: "A charming loft in Paris",
// //         bedrooms: 1,
// //         bathrooms: 1
// //     }
// // );
// main().catch(console.error);


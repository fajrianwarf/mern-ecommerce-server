const dotenv = require('dotenv');
const path = require('path');
const process = require('process');

dotenv.config();
// console.log(process.env);

module.exports = {
    rootPath: path.resolve(__dirname, '../'),
    serviceName: process.env.SERVICE_NAME,
    secretKey: process.env.SECRECT_KEY,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    dbAtlasUserName: process.env.DB_ATLAS_USERNAME,
    dbAtlasPass: process.env.DB_ATLAS_PASS,
    dbAtlasCluster: process.env.DB_ATLAS_CLUSTER,
    dbAtlasName: process.env.DB_ATLAS_DBNAME,
}

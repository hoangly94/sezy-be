
// const config: any = process.env?.database;

module.exports = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    // username: config?.username || "root",
    username: "root",
    password: "",
    database: "online",
    synchronize: true,
    dropSchema: false,
    entities: ["dist/**/entities/*.entity.js"],
    logging: false,
    logger: "file"
}
// migrate-mongo-config.cjs
module.exports = {
    mongodb: {
      url: "mongodb://admin:password@127.0.0.1:27017/lms?authSource=admin",
      databaseName: "lms",
    //   options: {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
    },
    migrationsDir: "migrations",
    changelogCollectionName: "changelog",
    lockCollectionName: "changelog_lock",
    lockTtl: 60,
    migrationFileExtension: ".js",
    useFileHash: false
  };
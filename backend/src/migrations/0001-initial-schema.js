export const up = async (db, client) => {
    // Create Users collection
    await db.createCollection('users', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "photo", "email", "password"],
          properties: {
            name: { bsonType: "string" },
            photo: { bsonType: "string" },
            email: { bsonType: "string" },
            password: { bsonType: "string" },
            role: { 
              bsonType: "string",
              enum: ["manager", "student"],
              description: "must be either 'manager' or 'student'"
            },
            courses: {
              bsonType: "array",
              items: {
                bsonType: "objectId"
              }
            },
            manager: { bsonType: "objectId" }
          }
        }
      }
    });
  
    // Create indexes for Users
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
  
    // Create Categories collection
    await db.createCollection('categories', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name"],
          properties: {
            name: { bsonType: "string" },
            courses: {
              bsonType: "array",
              items: {
                bsonType: "objectId"
              }
            }
          }
        }
      }
    });
  
    // Create Courses collection
    await db.createCollection('courses', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "thumbnail", "tagline", "description"],
          properties: {
            name: { bsonType: "string" },
            thumbnail: { bsonType: "string" },
            category: { bsonType: "objectId" },
            tagline: { bsonType: "string" },
            description: { bsonType: "string" },
            students: {
              bsonType: "array",
              items: {
                bsonType: "objectId"
              }
            },
            manager: { bsonType: "objectId" },
            details: {
              bsonType: "array",
              items: {
                bsonType: "objectId"
              }
            }
          }
        }
      }
    });
  
    // Create CourseDetails collection
    await db.createCollection('coursedetails', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["title", "course"],
          properties: {
            title: { bsonType: "string" },
            type: { 
              bsonType: "string",
              enum: ["video", "text"],
              description: "must be either 'video' or 'text'"
            },
            youtubeId: { bsonType: "string" },
            text: { bsonType: "string" },
            course: { bsonType: "objectId" }
          }
        }
      }
    });
  
    // Create Transactions collection
    await db.createCollection('transactions', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["user", "price"],
          properties: {
            user: { bsonType: "objectId" },
            price: { bsonType: "number" },
            status: { 
              bsonType: "string",
              enum: ["pending", "success", "failed"],
              description: "must be either 'pending', 'success' or 'failed'"
            }
          }
        }
      }
    });
  
    // Create indexes for Transactions
    await db.collection('transactions').createIndex({ user: 1 });
    await db.collection('transactions').createIndex({ status: 1 });
  };
  
  export const down = async (db, client) => {
    await db.collection('users').drop();
    await db.collection('categories').drop();
    await db.collection('courses').drop();
    await db.collection('coursedetails').drop();
    await db.collection('transactions').drop();
  };
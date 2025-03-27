export const up = async (db, client) => {
    // Add timestamps to collections that need them
    await db.collection('categories').updateMany(
      {},
      [{ $set: { createdAt: new Date(), updatedAt: new Date() } }]
    );
    
    await db.collection('coursedetails').updateMany(
      {},
      [{ $set: { createdAt: new Date(), updatedAt: new Date() } }]
    );
    
    await db.collection('transactions').updateMany(
      {},
      [{ $set: { createdAt: new Date(), updatedAt: new Date() } }]
    );
  };
  
  export const down = async (db, client) => {
    // Remove timestamps (though this can't fully revert the schema change)
    await db.collection('categories').updateMany(
      {},
      { $unset: { createdAt: "", updatedAt: "" } }
    );
    
    await db.collection('coursedetails').updateMany(
      {},
      { $unset: { createdAt: "", updatedAt: "" } }
    );
    
    await db.collection('transactions').updateMany(
      {},
      { $unset: { createdAt: "", updatedAt: "" } }
    );
  };
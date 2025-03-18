module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.createCollection('products', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: [
            'name', 'price', 'description', 'size', 'color', 'images',
            'gender', 'amount', 'productCategory'
          ],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            price: {
              bsonType: 'int',
              description: 'must be an integer and is required'
            },
            description: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            size: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            color: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            images: {
              bsonType: 'array',
              description: 'must be an array and is required'
            },
            amount: {
              bsonType: 'int',
              description: 'must be an integer and is required'
            },
            productCategory: {
              bsonType: 'objectId',
              description: 'must be a valid ObjectId referencing productCategorys'
            }
          }
        }
      }
    });
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('products').drop();
  }
};

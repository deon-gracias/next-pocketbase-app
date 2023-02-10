migrate((db) => {
  const collection = new Collection({
    "id": "otmrtmrao5mhqro",
    "created": "2023-02-10 16:08:17.924Z",
    "updated": "2023-02-10 16:08:17.924Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9qmda2qz",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "username",
            "avatar"
          ]
        }
      },
      {
        "system": false,
        "id": "9uoyjlbg",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "zjzi3swu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("otmrtmrao5mhqro");

  return dao.deleteCollection(collection);
})

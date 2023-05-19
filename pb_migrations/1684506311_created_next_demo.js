migrate((db) => {
  const collection = new Collection({
    "id": "npgtsat3wgrd440",
    "created": "2023-05-19 14:25:11.989Z",
    "updated": "2023-05-19 14:25:11.989Z",
    "name": "next_demo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iqxlyrio",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "frkbqqzi",
        "name": "file",
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
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("npgtsat3wgrd440");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeamyy12jiryl82")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgmkn5eo",
    "name": "category_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rjsuq317els9k99",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeamyy12jiryl82")

  // remove
  collection.schema.removeField("wgmkn5eo")

  return dao.saveCollection(collection)
})

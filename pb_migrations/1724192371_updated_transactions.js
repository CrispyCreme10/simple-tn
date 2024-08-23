/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeamyy12jiryl82")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dcbkgpwb",
    "name": "notes",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeamyy12jiryl82")

  // remove
  collection.schema.removeField("dcbkgpwb")

  return dao.saveCollection(collection)
})

const database = require("../database-connection");

module.exports = {
  list() {
    return database("owner").select();
  },
  read(id) {
    return database("owner")
      .select()
      .where("id", id)
      .first();
  },
  create(owner) {
    return database("owner")
      .select()
      .insert(owner)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, owner) {
    return database("owner")
      .update(owner)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("owner")
      .delete()
      .where("id", id);
  }
};
const database = require("../database-connection");

module.exports = {
  list() {
    return database("dogprofile").select();
  },
  read(id) {
    return database("dogprofile")
      .select()
      .where("id", id)
      .first();
  },
  create(dogprofile) {
    return database("dogprofile")
      .select()
      .insert(dogprofile)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, dogprofile) {
    return database("dogprofile")
      .update(dogprofile)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("dogprofile")
      .delete()
      .where("id", id);
  }
};
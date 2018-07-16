const database = require("../database-connection");

module.exports = {
  list() {
    return database("dogpark").select();
  },
  read(id) {
    return database("dogpark")
      .select()
      .where("id", id)
      .first();
  },
  create(dogpark) {
    return database("dogpark")
      .select()
      .insert(dogpark)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, dogpark) {
    return database("dogpark")
      .update(dogpark)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("dogpark")
      .delete()
      .where("id", id);
  }
};
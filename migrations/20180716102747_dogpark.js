exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogpark', dogpark => {
    dogpark.increments()
    dogpark.string('parkName')
    dogpark.string('address')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dogpark')
};

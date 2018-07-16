
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owner', owner => {
  owner.increments()
  owner.string('name')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('owner')
};

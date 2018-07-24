
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogprofile', dogprofile => {
    dogprofile.increments()
    dogprofile.string('name').notNullable()
    dogprofile.string('picture')
    dogprofile.string('breed')
    dogprofile.string('age')
    dogprofile.string('gender')
    dogprofile.string('size')
    dogprofile.time('check_in')
    dogprofile.time('check_out')
    dogprofile.boolean('checkedIn')
    dogprofile.integer('owner_id')
              .references('id')
              .inTable('owner')
              .onDelete('CASCADE')
              .index()
    dogprofile.integer('dogpark_id')
              .references('id')
              .inTable('dogpark')
              .onDelete('CASCADE')
              .index()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dogprofile')
};


exports.seed = function(knex, Promise) {
  return knex('owner').del()
    .then(function () {
      return knex('owner').insert([
        {
          id: 1, 
          name: 'Peter'
        }, {
          id: 2, 
          name: 'Nick'
        }, {
          id: 3, 
          name: 'Kaitlin'
        }, {
          id: 4,
          name: 'Fion'
        }

      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE owner_id_seq RESTART WITH 5;')
      });
    });
};

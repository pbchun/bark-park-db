
exports.seed = function(knex, Promise) {
  return knex('owner').del()
    .then(function () {
      return knex('owner').insert([
        {
          id: 1, 
          name: 'Peter C'
        }, {
          id: 2, 
          name: 'Nick M'
        }, {
          id: 3, 
          name: 'Kaitlin R'
        }, {
          id: 4,
          name: 'Fion W'
        }

      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE owner_id_seq RESTART WITH 5;')
      });
    });
};


exports.seed = function(knex, Promise) {
  return knex('dogpark').del()
    .then(function () {
      return knex('dogpark').insert([
        {
          id: 1, 
          parkName: 'Railyard Dog Park',
          address: '19th Street & Bassett Street, Denver, CO 80202'
        }, {
          id: 2, 
          parkName: 'Willow Bark Park',
          address: 'Trenton Street & 54th Place, Denver, CO 80238'
        }, {
          id: 3, 
          parkName: 'Stapleton Off Leash Dog Park',
          address: '2002 Spruce St, Denver, CO 80238'
        }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE dogpark_id_seq RESTART WITH 4;')
      });
    });
};

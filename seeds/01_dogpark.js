
exports.seed = function(knex, Promise) {
  return knex('dogpark').del()
    .then(function () {
      return knex('dogpark').insert([
        {
          id: 1, 
          parkName: 'Railyard Dog Park',
          address: '19th St & Bassett St, Denver, CO 80202',
          picture: 'https://s33.postimg.cc/799r1cij3/railyard.jpg'
        }, {
          id: 2, 
          parkName: 'Willow Bark Park',
          address: 'Trenton St & 54th Place, Denver, CO 80238',
          picture: 'https://s33.postimg.cc/uaqc75fmn/Image_from_i_OS.jpg'
        }, {
          id: 3, 
          parkName: 'Stapleton Off Leash Dog Park',
          address: '2002 Spruce St, Denver, CO 80238',
          picture: 'https://s33.postimg.cc/9du42hpbj/stapleton.jpg'
        }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE dogpark_id_seq RESTART WITH 4;')
      });
    });
};

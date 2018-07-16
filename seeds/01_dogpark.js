
exports.seed = function(knex, Promise) {
  return knex('dogpark').del()
    .then(function () {
      return knex('dogpark').insert([
        {
          id: 1, 
          parkName: 'Railyard Dog Park',
          address: '19th Street & Bassett Street, Denver, CO 80202',
          picture: 'https://s3.amazonaws.com/gs-waymarking-images/719bd382-0e25-41fe-a23e-144b19dafe03_d.JPG'
        }, {
          id: 2, 
          parkName: 'Willow Bark Park',
          address: 'Trenton Street & 54th Place, Denver, CO 80238',
          picture: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/20476360_10209682957210229_6933250128405196323_n.jpg?_nc_cat=0&oh=419ce4d556c1b99f95edc65c4962ddb3&oe=5BCC9516'
        }, {
          id: 3, 
          parkName: 'Stapleton Off Leash Dog Park',
          address: '2002 Spruce St, Denver, CO 80238',
          picture: 'https://woofalong.com/wp-content/uploads/2016/12/1585_Stapleton-Dog-Park-Denver-Colorado.jpg'
        }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE dogpark_id_seq RESTART WITH 4;')
      });
    });
};

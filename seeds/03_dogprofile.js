
exports.seed = function(knex, Promise) {
  return knex('dogprofile').del()
    .then(function () {
      return knex('dogprofile').insert([
        {
          id: 1, 
          name: 'Teddy',
          picture: 'https://s33.postimg.cc/aumktj9rj/teddy.jpg',
          breed: 'Terrier Mix',
          age: '6 mo',
          gender: 'M',
          size: 'Small',
          check_in: '18:00:00',
          check_out: '18:30:00',
          owner_id: 1,
          dogpark_id: 1
        }, {
          id: 2, 
          name: 'Annabelle',
          picture: 'https://s33.postimg.cc/56ga2x0cv/annabelle.jpg',
          breed:  'Dachshund/Beagle Mix',
          age: '2',
          gender: 'F',
          size: 'Small',
          check_in: '18:15:00',
          check_out: '18:45:00',
          owner_id: 2,
          dogpark_id: 1
        }, {
          id: 3, 
          name: 'Indio',
          picture: 'https://s33.postimg.cc/p12bp35an/indio.jpg',
          breed: 'Golden Retriever Mix',
          age: '4',
          gender: 'F',
          size: 'Med',
          check_in: '18:00:00',
          check_out: '18:45:00',
          owner_id: 3,
          dogpark_id: 1
        }, {
          id: 4, 
          name: 'Monkey',
          picture: 'https://s33.postimg.cc/ahv6np70v/monkey.jpg',
          breed: 'Yorkie Poo',
          age: '7',
          gender: 'F',
          size: 'Small',
          check_in: '18:00:00',
          check_out: '18:45:00',
          owner_id: 3,
          dogpark_id: 1
        }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE dogprofile_id_seq RESTART WITH 5;')
      });
    });
};

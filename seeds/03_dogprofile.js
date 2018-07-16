
exports.seed = function(knex, Promise) {
  return knex('dogprofile').del()
    .then(function () {
      return knex('dogprofile').insert([
        {
          id: 1, 
          name: 'Teddy',
          picture: '',
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
          picture: '',
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
          picture: '',
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
          picture: '',
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

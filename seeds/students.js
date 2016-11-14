
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('students').insert({
          id: 1,
          name: 'Joaquin Salazar-Diaz'
        }),
        knex('students').insert({
          id: 2,
          name: 'Sarah Martin'
        }),
        knex('students').insert({
          id: 3,
          name: 'Charlotte Frampton'
        }),
        knex('students').insert({
          id: 4,
          name: 'Alexia Yost'
        }),
        knex('students').insert({
          id: 5,
          name: 'Daria Prokhnitski'
        }),
        knex('students').insert({
          id: 6,
          name: 'Saige Ju'
        }),
        knex('students').insert({
          id: 7,
          name: 'Hannah Reyes'
        }),
        knex('students').insert({
          id: 8,
          name: 'Emerson Riegler'
        }),
        knex('students').insert({
          id: 9,
          name: 'Adelyne Kirshling'
        }),
        knex('students').insert({
          id: 10,
          name: 'Claire Herbert'
        }),
        knex('students').insert({
          id: 11,
          name: 'Sophia Munoz'
        }),
        knex('students').insert({
          id: 12,
          name: 'Brooke Smith'
        }),
        knex('students').insert({
          id: 13,
          name: 'Abigail Smith'
        }),
        knex('students').insert({
          id: 14,
          name: 'Emma Sipe'
        }),
        knex('students').insert({
          id: 15,
          name: 'Payton Rae Anderson'
        }),
        knex('students').insert({
          id: 16,
          name: 'Willa Broderick'
        }),
        knex('students').insert({
          id: 17,
          name: 'Teagan Crase'
        }),
        knex('students').insert({
          id: 18,
          name: 'Ella Lark'
        }),
        knex('students').insert({
          id: 19,
          name: 'Maria Kizhnerman'
        }),
        knex('students').insert({
          id: 20,
          name: 'Aidan Wolf'
        }),
        knex('students').insert({
          id: 21,
          name: 'Katie Mendelsberg'
        }),
        knex('students').insert({
          id: 22,
          name: 'Lili Travaglia'
        }),
        knex('students').insert({
          id: 23,
          name: 'Angelina Jacobson'
        }),
        knex('students').insert({
          id: 24,
          name: 'Isabella Jacobson'
        }),
        knex('students').insert({
          id: 25,
          name: 'Emma Shurley'
        }),
        knex('students').insert({
          id: 26,
          name: 'Aidan Wolf'
        }),
        knex('students').insert({
          id: 27,
          name: 'Katie Mendelsberg'
        }),
        knex('students').insert({
          id: 28,
          name: 'Kayla Engelhardt'
        }),
        knex('students').insert({
          id: 29,
          name: 'Wendy Fierro'
        }),
        knex('students').insert({
          id: 30,
          name: 'Adelaide Bowen'
        }),
        knex('students').insert({
          id: 31,
          name: 'Misha Martin-Williams'
        }),
        knex('students').insert({
          id: 32,
          name: 'Sofia Smith'
        }),
        knex('students').insert({
          id: 33,
          name: 'Adah Evans'
        }),
        knex('students').insert({
          id: 34,
          name: 'Almenny Larchick'
        }),
        knex('students').insert({
          id: 35,
          name: 'Sofia Vassine'
        }),
        knex('students').insert({
          id: 36,
          name: 'Veva Heilmann'
        }),
        knex('students').insert({
          id: 37,
          name: 'Shaelyn White'
        }),
        knex('students').insert({
          id: 38,
          name: 'Sofia Saavedra'
        }),
        knex('students').insert({
          id: 39,
          name: 'Elana Rosenwinkel'
        }),
        knex('students').insert({
          id: 40,
          name: 'Elizabeth Pozzi'
        }),
        knex('students').insert({
          id: 41,
          name: 'Stella Beckwith-Wolf'
        }),
        knex('students').insert({
          id: 42,
          name: 'Mia Terrazas'
        }),
        knex('students').insert({
          id: 43,
          name: 'Maren Strother'
        }),
        knex('students').insert({
          id: 44,
          name: 'Susie Leisegang'
        }),
        knex('students').insert({
          id: 45,
          name: 'Kayla Engelhardt'
        }),
        knex('students').insert({
          id: 46,
          name: 'Olive Evanson'
        }),
        knex('students').insert({
          id: 47,
          name: 'Meredith Hardin'
        }),
        knex('students').insert({
          id: 48,
          name: 'Stella Harrison-Baretta'
        }),
        knex('students').insert({
          id: 49,
          name: 'Isabela Schnurrenberger'
        }),
        knex('students').insert({
          id: 50,
          name: 'Sadie Liebgott'
        }),
        knex('students').insert({
          id: 51,
          name: 'Lexie Montoya'
        }),
        knex('students').insert({
          id: 52,
          name: 'Sloane Donahue'
        }),
        knex('students').insert({
          id: 53,
          name: 'Alessandra Kust'
        }),
        knex('students').insert({
          id: 54,
          name: 'Tamar Moskovich'
        }),
        knex('students').insert({
          id: 55,
          name: 'Madeline Whitney'
        }),
        knex('students').insert({
          id: 56,
          name: 'Tyra Smith'
        }),
        knex('students').insert({
          id: 57,
          name: 'Scarlet Harrison-Baretta'
        }),
        knex('students').insert({
          id: 58,
          name: 'Isabella Marquez'
        }),
        knex('students').insert({
          id: 59,
          name: 'Heidi Schmid'
        }),
        knex('students').insert({
          id: 60,
          name: 'Eliza Romero-Cahoone'
        }),
        knex('students').insert({
          id: 61,
          name: 'Natalia Noyes'
        }),
        knex('students').insert({
          id: 62,
          name: 'Alexandra Waryn'
        }),
        knex('students').insert({
          id: 63,
          name: 'Isabelle May'
        }),
        knex('students').insert({
          id: 64,
          name: 'Liliana Treitz'
        }),
        knex('students').insert({
          id: 65,
          name: 'Freya Nagy'
        }),
        knex('students').insert({
          id: 66,
          name: 'Kennedy Jacques'
        }),
        knex('students').insert({
          id: 67,
          name: 'Garnet Letendre'
        }),
        knex('students').insert({
          id: 68,
          name: 'Serena Smith'
        }),
        knex('students').insert({
          id: 69,
          name: 'Joella Shearer'
        }),
        knex('students').insert({
          id: 70,
          name: 'Alexandra Miripol'
        }),
        knex('students').insert({
          id: 71,
          name: 'Josilyn Strout'
        }),
        knex('students').insert({
          id: 72,
          name: 'Charlotte Ridgway'
        }),
        knex('students').insert({
          id: 73,
          name: 'Evangeline Ruff'
        }),
        knex('students').insert({
          id: 74,
          name: 'Samantha Milshtein'
        }),
        knex('students').insert({
          id: 75,
          name: 'Gabriella Brower'
        }),
        knex('students').insert({
          id: 76,
          name: 'Darya Savavi'
        }),
        knex('students').insert({
          id: 77,
          name: 'Ava Savavi'
        }),
        knex('students').insert({
          id: 78,
          name: 'Gracen Lashnits'
        })
      ]);
    });
};

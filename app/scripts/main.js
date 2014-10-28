var films = {
  movies : [
    { title: 'The Adventures of Baron Munchausen', director: 'Terry Gilliam' },
    { title: 'Sunshine', director: 'Danny Boyle'},
    { title: 'Better Off Dead', director: 'Savage Steve Holland'}
  ]
};

// var source = $('#movies').html();
var rendered = Handlebars.templates['fav'];
$('#movies').append(rendered(films));


// var tv = {
//   shows : [
//     { title: 'Game of Thrones', network: { company: 'HBO', series: '2011 - Present' }},
//     { title: 'Shark Tank', network: { company: 'ABC' series: '2009 - Present' }},
//     { title: 'Freaks and Geeks', network: { company: 'NBC', series: '1999 - 2000' }}
//   ]
// };

$(document).ready(function () {

  // Slider
  $('.slider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });

  // Posts dinamicos
  var posts = [
    {
      title: 'Prueba de titulo 1',
      date: moment().format('LL'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tellus sapien. Nam efficitur arcu quis nisi tristique, eget lobortis diam fringilla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Sed maximus congue condimentum.Ut quis ex non dolor egestas commodo sit amet non leo.Pellentesque faucibus ex in mollis viverra.Morbi nec ligula at sapien egestas lobortis ac eu leo.Suspendisse interdum, tellus in congue interdum, mauris leo ornare elit, eget finibus tortor lectus id eros.Ut risus libero, faucibus eget massa finibus, luctus consequat nisi.Donec orci nulla, vulputate id libero id, tempus ultrices mauris.Integer tempor, eros sed consequat interdum, enim odio efficitur nunc, nec pretium quam purus eu tellus. Praesent ac eros sagittis, condimentum nulla in, luctus nibh.Praesent efficitur est ac magna fringilla lobortis.Duis non odio erat. Aliquam tempor commodo lorem, fringilla sagittis est fermentum sed.Aenean id lobortis ante. Nullam suscipit euismod erat vitae consectetur.Proin sodales sem a consequat blandit.Aliquam in leo euismod, dignissim sem non, placerat odio.Praesent fermentum nulla non mi ultricies, eget consequat elit laoreet.'
    },
    {
      title: 'Prueba de titulo 2',
      date: moment().format('LL'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tellus sapien. Nam efficitur arcu quis nisi tristique, eget lobortis diam fringilla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Sed maximus congue condimentum.Ut quis ex non dolor egestas commodo sit amet non leo.Pellentesque faucibus ex in mollis viverra.Morbi nec ligula at sapien egestas lobortis ac eu leo.Suspendisse interdum, tellus in congue interdum, mauris leo ornare elit, eget finibus tortor lectus id eros.Ut risus libero, faucibus eget massa finibus, luctus consequat nisi.Donec orci nulla, vulputate id libero id, tempus ultrices mauris.Integer tempor, eros sed consequat interdum, enim odio efficitur nunc, nec pretium quam purus eu tellus. Praesent ac eros sagittis, condimentum nulla in, luctus nibh.Praesent efficitur est ac magna fringilla lobortis.Duis non odio erat. Aliquam tempor commodo lorem, fringilla sagittis est fermentum sed.Aenean id lobortis ante. Nullam suscipit euismod erat vitae consectetur.Proin sodales sem a consequat blandit.Aliquam in leo euismod, dignissim sem non, placerat odio.Praesent fermentum nulla non mi ultricies, eget consequat elit laoreet.'
    },
    {
      title: 'Prueba de titulo 3',
      date: moment().format('LL'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tellus sapien. Nam efficitur arcu quis nisi tristique, eget lobortis diam fringilla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Sed maximus congue condimentum.Ut quis ex non dolor egestas commodo sit amet non leo.Pellentesque faucibus ex in mollis viverra.Morbi nec ligula at sapien egestas lobortis ac eu leo.Suspendisse interdum, tellus in congue interdum, mauris leo ornare elit, eget finibus tortor lectus id eros.Ut risus libero, faucibus eget massa finibus, luctus consequat nisi.Donec orci nulla, vulputate id libero id, tempus ultrices mauris.Integer tempor, eros sed consequat interdum, enim odio efficitur nunc, nec pretium quam purus eu tellus. Praesent ac eros sagittis, condimentum nulla in, luctus nibh.Praesent efficitur est ac magna fringilla lobortis.Duis non odio erat. Aliquam tempor commodo lorem, fringilla sagittis est fermentum sed.Aenean id lobortis ante. Nullam suscipit euismod erat vitae consectetur.Proin sodales sem a consequat blandit.Aliquam in leo euismod, dignissim sem non, placerat odio.Praesent fermentum nulla non mi ultricies, eget consequat elit laoreet.'
    }
  ];

  posts.forEach(function(item, index) {
    var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
      </article>
    `
    $('#posts').append(post);
  });

  // Selector theme
  var theme = $('#theme');

  $('#to-green').click(function() {
    theme.attr('href', 'css/green.css');
    localStorage.removeItem('red');
    localStorage.removeItem('blue');
    localStorage.setItem('theme', 'green');
  });
  $('#to-red').click(function() {
    theme.attr('href', 'css/red.css');
    localStorage.removeItem('green');
    localStorage.removeItem('blue');
    localStorage.setItem('theme', 'red');
  });
  $('#to-blue').click(function() {
    theme.attr('href', 'css/blue.css');
    localStorage.removeItem('green');
    localStorage.removeItem('red');
    localStorage.setItem('theme', 'blue');
  });

 
  var consult_theme = localStorage.getItem('theme');
  if(consult_theme == 'green') {
    theme.attr('href', 'css/green.css');
  }
  else if(consult_theme == 'red') {
    theme.attr('href', 'css/red.css');
  }
  else {
    theme.attr('href', 'css/blue.css');
  }
  

  
});
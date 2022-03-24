$(document).ready(function () {

  // Slider
  if(window.location.href.indexOf('index') > -1) {
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });
  }

  // Posts dinamicos
  if(window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date: moment().format('LL'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tellus sapien. Nam efficitur arcu quis nisi tristique, eget lobortis diam fringilla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Sed maximus congue condimentum.Ut quis ex non dolor egestas commodo sit amet non leo.Pellentesque faucibus ex in mollis viverra.Morbi nec ligula at sapien egestas lobortis ac eu leo.Suspendisse interdum, tellus in congue interdum, mauris leo ornare elit, eget finibus tortor lectus id eros.Ut risus libero, faucibus eget massa finibus, luctus consequat nisi.Donec orci nulla, vulputate id libero id, tempus ultrices mauris.Integer tempor, eros sed consequat interdum, enim odio efficitur nunc, nec pretium quam purus eu tellus. Praesent ac eros sagittis, condimentum nulla in, luctus nibh.Praesent efficitur est ac magna fringilla lobortis.Duis non odio erat. Aliquam tempor commodo lorem, fringilla sagittis est fermentum sed.Aenean id lobortis ante.'
      },
      {
        title: 'Prueba de titulo 2',
        date: moment().format('LL'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tellus sapien. Nam efficitur arcu quis nisi tristique, eget lobortis diam fringilla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Sed maximus congue condimentum.Ut quis ex non dolor egestas commodo sit amet non leo.Pellentesque faucibus ex in mollis viverra.Morbi nec ligula at sapien egestas lobortis ac eu leo.Suspendisse interdum, tellus in congue interdum, mauris leo ornare elit, eget finibus tortor lectus id eros.Ut risus libero, faucibus eget massa finibus, luctus consequat nisi.Donec orci nulla, vulputate id libero id, tempus ultrices mauris.Integer tempor, eros sed consequat interdum, enim odio efficitur nunc, nec pretium quam purus eu tellus. Praesent ac eros sagittis, condimentum nulla in, luctus nibh.Praesent efficitur est ac magna fringilla lobortis.Duis non odio erat. Aliquam tempor commodo lorem, fringilla sagittis est fermentum sed.Aenean id lobortis ante.'
      },
      {
        title: 'Prueba de titulo 3',
        date: moment().format('LL'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tellus sapien. Nam efficitur arcu quis nisi tristique, eget lobortis diam fringilla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Sed maximus congue condimentum.Ut quis ex non dolor egestas commodo sit amet non leo.Pellentesque faucibus ex in mollis viverra.Morbi nec ligula at sapien egestas lobortis ac eu leo.Suspendisse interdum, tellus in congue interdum, mauris leo ornare elit, eget finibus tortor lectus id eros.Ut risus libero, faucibus eget massa finibus, luctus consequat nisi.Donec orci nulla, vulputate id libero id, tempus ultrices mauris.Integer tempor, eros sed consequat interdum, enim odio efficitur nunc, nec pretium quam purus eu tellus. Praesent ac eros sagittis, condimentum nulla in, luctus nibh.Praesent efficitur est ac magna fringilla lobortis.Duis non odio erat. Aliquam tempor commodo lorem, fringilla sagittis est fermentum sed.Aenean id lobortis ante.'
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
  }

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
  if(consult_theme == 'blue') {
    theme.attr('href', 'css/blue.css');
  }
  else if(consult_theme == 'red') {
    theme.attr('href', 'css/red.css');
  }
  else {
    theme.attr('href', 'css/green.css');
  }
  
  // Scroll top
  $('.scroll-top').click(function(e) {
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  });
  
  $('#login form').submit(function() {
    var form_name = $('#form_name').val();
    localStorage.setItem('user_name', form_name);
  });

  var user_name = localStorage.getItem('user_name');
  var user_info = $('#user_info');

  user_info.hover(displayMenu, hideMenu);

  function displayMenu() {
    user_info.append(menu);
  }

  function hideMenu() {
    user_info.hide();
    user_info.html('<span>U</span><a href="#">'+user_name+'</a>').show();
  }

  if(typeof user_name == 'string' && user_name != '') {
    user_info.html('<span>U</span><a href="#">'+user_name+'</a>');

    var menu = `
    <ul class="display_menu">
      <li><a href="#">Mi cuenta</a></li>
      <li><a href="#">Privacidad</a></li>
      <li><a href="#">Preguntas</a></li>
      <li><a id="logout" href="#">Cerrar sesion</a></li>
    </ul>
    `;

    $('#login').hide();

    $('#logout').click(function() {
      localStorage.clear();
      location.reload();
      console.log('salir');
    });
  }

  // Acordeon
  if(window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion();
  }

  // Reloj
  if(window.location.href.indexOf('watch') > -1) {
    var watch = moment().format('hh:mm:ss');
    $('#watch').html(watch);
    setInterval(function() {
      var watch = moment().format('hh:mm:ss');
      $('#watch').html(watch);
    }, 1000);
  }

  // Validacion de formulario
  if(window.location.href.indexOf('contact') > -1) {
    $.validate({
      lang: 'es'
    });

    $('#date-form').datepicker({
      dateFormat: 'dd-mm-yy'
    });
  }

});
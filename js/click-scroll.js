$(document).ready(function() {
    
    var currentPage = window.location.pathname.split("/").pop();

    // Si la ruta está vacía, significa que estamos en la página principal.
    if (currentPage === "") {
        currentPage = "index.html";
    }

    // 2. Quitamos la clase 'active' de TODOS los enlaces del menú para empezar de cero.
    $('.navbar-nav .nav-item .nav-link').removeClass('active');

    // 3. Buscamos el enlace que corresponde a la página actual y solo a ese le ponemos la clase 'active'.
    $('.navbar-nav .nav-item .nav-link').each(function() {
        var linkHref = $(this).attr('href').split("/").pop();

        if (linkHref === currentPage) {
            $(this).addClass('active');
        }
    });

});
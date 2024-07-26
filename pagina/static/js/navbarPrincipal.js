document.addEventListener("DOMContentLoaded", function() {
    // Función para cambiar aspecto entre modo claro y modo oscuro
    function aplicarModo(modo) {
        const elementos = [
            body, navbar, elementosNavbar, btnBuscar,
            iBuscar, iUsuario, iOpcionesUsuario, 
            btnMenuUsuario, menuUsuario, txtBarraBusqueda
        ];

        elementos.forEach(elemento => {
            if (elemento) {  // Verificar que el elemento no sea null
                elemento.classList.remove('modo-claro', 'modo-oscuro');
                elemento.classList.add(modo);
            }
        });

        if (modo === 'modo-oscuro') {
            iLogoPagina.src = iLogoPagina.getAttribute('data-logo-oscuro');
        } else {
            iLogoPagina.src = iLogoPagina.getAttribute('data-logo-claro');
        }

        localStorage.setItem('modoOscuro', modo === 'modo-oscuro');
    }

    const body = document.body;
    const switchModo = document.getElementById('flexSwitchCheckDefault');
    const navbar = document.getElementById('navbarPrincipal');
    const elementosNavbar = document.getElementById('elementosNavbarPrincipal');
    const btnBuscar = document.getElementById('btnBuscar');
    const iLogoPagina = document.getElementById('iLogoPagina');
    const iBuscar = document.getElementById('iBuscar');
    const iUsuario = document.getElementById('iUsuario');
    const iOpcionesUsuario = document.getElementById('iOpcionesUsuario');
    const btnMenuUsuario = document.getElementById('btnMenuUsuario');
    const menuUsuario = document.getElementById('menuUsuario');
    const txtBarraBusqueda = document.getElementById('txtBarraBusqueda');

    // Verificar el estado del modo oscuro almacenado en localStorage
    if (localStorage.getItem('modoOscuro') === 'true') {
        switchModo.checked = true;
        aplicarModo('modo-oscuro');
    } else {
        switchModo.checked = false;
        aplicarModo('modo-claro');
    }

    // Cambiar el modo cuando se cambia el switch
    switchModo.addEventListener('change', function() {
        if (switchModo.checked) {
            aplicarModo('modo-oscuro');
        } else {
            aplicarModo('modo-claro');
        }
    });


    // Ajuste para colocar una sombra en el botón de menú de usuario
    btnMenuUsuario.addEventListener('click', function(event) {
        event.stopPropagation(); // Previene el cierre inmediato al hacer click
        menuUsuario.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuUsuario.contains(event.target)) {
            menuUsuario.classList.remove('show');
        }
    });

    const dropdownItems = document.querySelectorAll('#menuUsuario .dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuUsuario.classList.remove('show');
        });
    });
});

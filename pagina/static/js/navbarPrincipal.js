/* Generar navbar */
document.addEventListener("DOMContentLoaded", function() {
    function generarNavbar() {
        const navbarHTML = `
            <nav class="navbar navbar-expand-lg fixed-top modo-claro" id="navbarPrincipal">
                <div class="container-fluid">

                    <a class="navbar-brand" href="/inicio/" id="logoPagina">Logo</a>

                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 modo-claro" id="elementosNavbarPrincipal">
                            <li class="nav-item">
                                <a class="nav-link" href="/inicio/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cuentos/">Cuentos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/podcast/">Podcast</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/blog/">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/sobre-mi/">Sobre mi</a>
                            </li>
                        </ul>

                        <form class="d-flex" role="search" id="grupoBarraBusqueda">
                            <div class="input-group">
                                <input 
                                    class="form-control modo-claro" 
                                    type="search"
                                    aria-label="Search"
                                    id="txtBarraBusqueda"
                                    placeholder="Buscar" 
                                >
                                <button 
                                    class="btn modo-claro" 
                                    type="submit" 
                                    id="btnBuscar"
                                    >
                                    <i class="bi bi-search modo-claro" id="iBuscar"></i>
                                </button>
                            </div>
                        </form>

                        <div class="dropdown modo-claro" id="menuUsuario">
                            <a class="btn dropdown-toggle modo-claro" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnMenuUsuario">
                                <i class="bi bi-list modo-claro" id="iOpcionesUsuario"></i>
                                <i class="bi bi-person-circle modo-claro" id="iUsuario"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Iniciar sesión</a></li>
                                <li><a class="dropdown-item" href="#">Registrarse</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li>
                                    <div class="switchModoOscuroYClaro">
                                        <i class="bi bi-sun modo-claro" id="iSol"></i>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                        </div>
                                        <i class="bi bi-moon modo-claro" id="iLuna"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </nav>
        `;
        

        // Insertar el navbar en el contenedor
        document.getElementById('navbar-principal').innerHTML = navbarHTML;
    }

    // Función para cambiar aspecto entre modo claro y modo oscuro
    function aplicarModo(modo) {
        const elementos = [
            body, navbar, elementosNavbar, btnBuscar,
            iBuscar, iUsuario, iOpcionesUsuario, btnMenuUsuario, menuUsuario,
            txtBarraBusqueda
        ];
        
        elementos.forEach(elemento => {
            elemento.classList.remove('modo-claro', 'modo-oscuro');
            elemento.classList.add(modo);
        });

        localStorage.setItem('modoOscuro', modo === 'modo-oscuro');
    }

    generarNavbar();

    const body = document.body;
    const switchModo = document.getElementById('flexSwitchCheckDefault');
    const navbar = document.getElementById('navbarPrincipal');
    const elementosNavbar = document.getElementById('elementosNavbarPrincipal');
    const btnBuscar = document.getElementById('btnBuscar');
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

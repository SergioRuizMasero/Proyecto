        window.onload = function () {

            // Variables
            let baseDeDatos = [
                {
                    id: 1,
                    nombre: 'Corsair Vengeance RGB Pro Optimizado AMD DDR4 3200 16GB 2x8GB CL16',
                    precio: 99,
                    imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/27/279642/corsair-vengeance-rgb-pro-optimizado-amd-ddr4-3200-16gb-2x8gb-cl16-opiniones.jpg'
                },
                {
                    id: 2,
                    nombre: 'Kingston HyperX Fury Black 16GB DDR4 2666Mhz PC-21300 (2x8GB) CL16',
                    precio: 79,
                    imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/23/233969/hyperx-fury-ddr4-9-fan-kit-of-2.jpg'
                },
                {
                    id: 3,
                    nombre: 'G.Skill Trident Z RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16',
                    precio: 116.98,
                    imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/11/114077/1140771.jpg'
                },
                {
                    id: 4,
                    nombre: 'Corsair Vengeance LPX DDR4 3000 PC4-24000 16GB 2x8GB CL15 Blanco',
                    precio: 84.99,
                    imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/12/124933/1249330.jpg'
                },
                {
                    id: 5,
                    nombre: 'G.Skill Trident Z Neo DDR4 3600 PC4-28800 32GB 2x16GB CL16',
                    precio: 216,
                    imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/22/225002/3.jpg'
                },
                {
                    id: 6,
                    nombre: 'G.Skill Ripjaws V Red DDR4 2400 PC4-19200 16GB 2x8GB CL15',
                    precio: 77.98,
                    imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/8/85979/g-skill-ripjaws-5-red-ddr4-2133-pc4-17000-8gb-2x4gb-cl15-2.jpg'
                }

            ]
            let $items = document.querySelector('#items');
            let carrito = [];
            let total = 0;
            let $carrito = document.querySelector('#carrito');
            let $total = document.querySelector('#total');
            // Funciones
            function renderItems () {
                for (let info of baseDeDatos) {
                    // Estructura
                    let miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    // Body
                    let miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    let miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = info['nombre'];
                    // Imagen
                    let miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', info['imagen']);
                    // Precio
                    let miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent = info['precio'] + '€';
                    // Boton 
                    let miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = '+';
                    miNodoBoton.setAttribute('marcador', info['id']);
                    miNodoBoton.addEventListener('click', anyadirCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    $items.appendChild(miNodo);
                }
            }

            function anyadirCarrito () {
                // Anyadimos el Nodo a nuestro carrito
                carrito.push(this.getAttribute('marcador'))
                // Calculo el total
                calcularTotal();
                // Renderizamos el carrito 
                renderizarCarrito();
            }

            function renderizarCarrito () {
                // Vaciamos todo el html
                $carrito.textContent = '';
                // Quitamos los duplicados
                let carritoSinDuplicados = [...new Set(carrito)];
                // Generamos los Nodos a partir de carrito
                carritoSinDuplicados.forEach(function (item, indice) {
                    // Obtenemos el item que necesitamos de la variable base de datos
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    // Cuenta el número de veces que se repite el producto
                    let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    // Creamos el nodo del item del carrito
                    let miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
                    // Boton de borrar
                    let miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.setAttribute('item', item);
                    miBoton.addEventListener('click', borrarItemCarrito);
                    // Mezclamos nodos
                    miNodo.appendChild(miBoton);
                    $carrito.appendChild(miNodo);
                })
            }

            function borrarItemCarrito () {
                console.log()
                // Obtenemos el producto ID que hay en el boton pulsado
                let id = this.getAttribute('item');
                // Borramos todos los productos
                carrito = carrito.filter(function (carritoId) {
                    return carritoId !== id;
                });
                // volvemos a renderizar
                renderizarCarrito();
                // Calculamos de nuevo el precio
                calcularTotal();
            }

            function calcularTotal () {
                // Limpiamos precio anterior
                total = 0;
                // Recorremos el array del carrito
                for (let item of carrito) {
                    // De cada elemento obtenemos su precio
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    total = total + miItem[0]['precio'];
                }
                // Formateamos el total para que solo tenga dos decimales
                let totalDosDecimales = total.toFixed(2);
                // Renderizamos el precio en el HTML
                $total.textContent = totalDosDecimales;
            }
            // Eventos

            // Inicio
            renderItems();
        } 

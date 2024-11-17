AOS.init({
    duration: 1000, // duración por defecto para todas las animaciones
	offset: -5,
  });


  // HERO PARTICLES ---------------------------------------------------------------------------------------------------
  tsParticles.load("tsparticles", {
	fpsLimit: 60,
	backgroundMode: {
	  enable: true,
	  zIndex: 1,
	},
	particles: {
	  number: {
		value: 20,
		density: {
		  enable: true,
		  area: 1000
		}
	  },
	  color: {
		value: [
		    "#bb00ff",
            "#9633f5",
            "#7066eb",
            "#4b99e0",
            "#25ccd6",
            "#00ffcc",
		]
	  },
	  destroy: {
		mode: "split",
		split: {
		  count: 1,
		  factor: {
			value: 5,
			random: {
			  enable: true,
			  minimumValue: 10
			}
		  },
		  rate: {
			value: 10,
			random: {
			  enable: true,
			  minimumValue: 5
			}
		  },
		  particles: {
			collisions: {
			  enable: true
			},
			destroy: {
			  mode: "split"
			},
			life: {
			  count: 1,
			  duration: {
				value: 1
			  }
			}
		  }
		}
	  },
	  shape: {
		type: "star",
		stroke: {
		  width: 0,
		  color: "#000000"
		},
		polygon: {
		  sides: 5
		}
	  },
	  opacity: {
		value: 1,
		random: false,
		animation: {
		  enable: false,
		  speed: 1,
		  minimumValue: 0.1,
		  sync: false
		}
	  },
	  size: {
		value: 5,
		random: {
		  enable: true,
		  minimumValue: 4
		},
		animation: {
		  enable: false,
		  speed: 40,
		  minimumValue: 0.5,
		  sync: false
		}
	  },
	  collisions: {
		enable: true,
		mode: "destroy"
	  },
	  move: {
		enable: true,
		speed: 6,
		direction: "none",
		random: false,
		straight: false,
		out_mode: "out",
		attract: {
		  enable: false,
		  rotateX: 600,
		  rotateY: 1200
		}
	  }
	},
	detectRetina: true
  });



  $('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });






// MODAL -------------------------------------------------------------------

// Obtener elementos del DOM
const openModalBtn = document.getElementById('openModalBtn'); // Botón para abrir el modal
const closeModalBtn = document.getElementById('customCloseModalBtn');
const modalOverlay = document.getElementById('customContactModal');

// Función para abrir el modal
openModalBtn?.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

// Función para cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Cerrar al hacer clic fuera del contenido
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});


// Obtener elementos del DOM
const openModalBtn2 = document.getElementById('openModalBtn2'); // Botón para abrir el modal
const closeModalBtn2 = document.getElementById('customCloseModalBtn2');
const modalOverlay2 = document.getElementById('customContactModal2');

// Función para abrir el modal
openModalBtn2.addEventListener('click', () => {
  modalOverlay2.style.display = 'flex';
});

// Función para cerrar el modal
closeModalBtn2.addEventListener('click', () => {
  modalOverlay2.style.display = 'none';
});

// Cerrar al hacer clic fuera del contenido
modalOverlay2.addEventListener('click', (e) => {
  if (e.target === modalOverlay2) {
    modalOverlay2.style.display = 'none';
  }
});


// Obtener elementos del DOM
const openModalBtn3 = document.getElementById('openModalBtn3'); // Botón para abrir el modal
const closeModalBtn3 = document.getElementById('customCloseModalBtn3');
const modalOverlay3 = document.getElementById('customContactModal3');

// Función para abrir el modal
openModalBtn3.addEventListener('click', () => {
  modalOverlay3.style.display = 'flex';
});

// Función para cerrar el modal
closeModalBtn3.addEventListener('click', () => {
  modalOverlay3.style.display = 'none';
});

// Cerrar al hacer clic fuera del contenido
modalOverlay3.addEventListener('click', (e) => {
  if (e.target === modalOverlay3) {
    modalOverlay3.style.display = 'none';
  }
});




// menú hamburguesa -------------------------------------------------------------------
 // Obtén el botón de hamburguesa y el menú
 const hamburgerIcon = document.getElementById('hamburger-icon');
 const mobileMenu = document.getElementById('mobile-menu-2');

 // Función para abrir/cerrar el menú
 hamburgerIcon.addEventListener('click', () => {
	 const isExpanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';
	 hamburgerIcon.setAttribute('aria-expanded', !isExpanded); // Alterna el estado del menú
	 mobileMenu.classList.toggle('hidden'); // Alterna la visibilidad del menú
 });

 // Cierra el menú si se hace clic en un enlace del menú
 const menuLinks = mobileMenu.querySelectorAll('a');
 menuLinks.forEach(link => {
	 link.addEventListener('click', () => {
		 mobileMenu.classList.add('hidden'); // Oculta el menú
		 hamburgerIcon.setAttribute('aria-expanded', 'false'); // Marca que el menú está cerrado
	 });
 });



 
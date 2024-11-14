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







  // Obtener elementos del DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('contactModal');

// Función para abrir el modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Función para cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

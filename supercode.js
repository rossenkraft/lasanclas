AOS.init();

let carouselIndex = 0;
let carouselInterval;

function showCarouselItem(index) {
	const carouselContent = document.getElementById("carousel-content");
	carouselContent.style.transition = "transform 0.5s ease";
	carouselContent.style.transform = `translateX(-${index * 100}%)`;
}

function nextCarouselItem() {
	const totalItems = document.querySelectorAll(".carousel-item").length;
	carouselIndex = (carouselIndex + 1) % totalItems;
	showCarouselItem(carouselIndex);
}

function startCarousel() {
	carouselInterval = setInterval(nextCarouselItem, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
	startCarousel();

	const carouselContainer = document.querySelector('.carousel-container');
	carouselContainer.addEventListener('mouseenter', () => {
		clearInterval(carouselInterval);
	});

	carouselContainer.addEventListener('mouseleave', () => {
		startCarousel();
	});
});


// Detener el carrusel cuando el mouse está sobre un elemento
document.querySelectorAll('.portfolio-item').forEach(item => {
	item.addEventListener('mouseenter', () => {
		document.querySelector('.portfolio-track').style.animationPlayState = 'paused';
	});
	item.addEventListener('mouseleave', () => {
		document.querySelector('.portfolio-track').style.animationPlayState = 'running';
	});
});

// JavaScript para un smooth scroll más controlado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// SWIPER
var swiper = new Swiper(".swiper", {
	effect: "cube",
	grabCursor: true,
	loop: true,
	speed: 1000,
	cubeEffect: {
	  shadow: false,
	  slideShadows: true,
	  shadowOffset: 10,
	  shadowScale: 0.94
	},
	autoplay: {
	  delay: 2000,
	  pauseOnMouseEnter: true
	}
  });
  

  //PARTICLES
  tsParticles.load("tsparticles", {
	fpsLimit: 60,
	backgroundMode: {
	  enable: true,
	  zIndex: -1
	},
	particles: {
	  number: {
		value: 20,
		density: {
		  enable: true,
		  area: 800
		}
	  },
	  color: {
		value: [
		  "#9B7EBD",
		  "#00FF9C",
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
			  minimumValue: 4
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
			  enable: false
			},
			destroy: {
			  mode: "none"
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
		type: "circle",
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
		value: 8,
		random: {
		  enable: true,
		  minimumValue: 4
		},
		animation: {
		  enable: false,
		  speed: 40,
		  minimumValue: 0.1,
		  sync: false
		}
	  },
	  collisions: {
		enable: true,
		mode: "destroy"
	  },
	  move: {
		enable: true,
		speed: 7,
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





  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});









// Toggle para el menú hamburguesa
function toggleMenu() {
	const mobileMenu = document.querySelector('.custom-mobile-menu');
	mobileMenu.classList.toggle('hidden');
  }
  
  // Cambiar el color de fondo al hacer scroll
  window.addEventListener('scroll', function() {
	const header = document.querySelector('.custom-header');
	if (window.scrollY > 10) {
	  header.classList.add('scrolled');
	} else {
	  header.classList.remove('scrolled');
	}
  });








// SMOOTH SCROLL & ACTION ON SCROLL-----------------------------------------------------------------------------


AOS.init();


// JavaScript para un smooth scroll más controlado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});


// HEADER ---------------------------------------------------------------------------------------------------

// Toggle para el menú hamburguesa
function toggleMenu() {
	const mobileMenu = document.querySelector('.custom-mobile-menu');
	mobileMenu.classList.toggle('hidden');
  }
  
  // Cambiar el color de fondo al hacer scroll
  window.addEventListener('scroll', function() {
	const header = document.querySelector('.custom-header');
	if (window.scrollY > 10) {
	  header.classList.add('scrolled');
	} else {
	  header.classList.remove('scrolled');
	}
  });


  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// HERO PARTICLES ---------------------------------------------------------------------------------------------------
  tsParticles.load("tsparticles", {
	fpsLimit: 60,
	backgroundMode: {
	  enable: true,
	  zIndex: -1
	},
	particles: {
	  number: {
		value: 20,
		density: {
		  enable: true,
		  area: 800
		}
	  },
	  color: {
		value: [
		  "#9B7EBD",
		  "#00FF9C",
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
			  minimumValue: 4
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
			  enable: false
			},
			destroy: {
			  mode: "none"
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
		type: "circle",
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
		value: 8,
		random: {
		  enable: true,
		  minimumValue: 4
		},
		animation: {
		  enable: false,
		  speed: 40,
		  minimumValue: 0.1,
		  sync: false
		}
	  },
	  collisions: {
		enable: true,
		mode: "destroy"
	  },
	  move: {
		enable: true,
		speed: 7,
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


// SWIPER--------------------------------------------------------------------------------------------------
var swiper = new Swiper(".swiper", {
	effect: "cube",
	grabCursor: true,
	loop: true,
	speed: 1000,
	cubeEffect: {
	  shadow: false,
	  slideShadows: true,
	  shadowOffset: 10,
	  shadowScale: 0.94
	},
	autoplay: {
	  delay: 2000,
	  pauseOnMouseEnter: true
	}
  });


// CAROUSEL ------------------------------------------------------------------------------------------------
let carouselIndex = 0;
let carouselInterval;

function showCarouselItem(index) {
	const carouselContent = document.getElementById("carousel-content");
	carouselContent.style.transition = "transform 0.5s ease";
	carouselContent.style.transform = `translateX(-${index * 100}%)`;
}

function nextCarouselItem() {
	const totalItems = document.querySelectorAll(".carousel-item").length;
	carouselIndex = (carouselIndex + 1) % totalItems;
	showCarouselItem(carouselIndex);
}

function startCarousel() {
	carouselInterval = setInterval(nextCarouselItem, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
	startCarousel();

	const carouselContainer = document.querySelector('.carousel-container');
	carouselContainer.addEventListener('mouseenter', () => {
		clearInterval(carouselInterval);
	});

	carouselContainer.addEventListener('mouseleave', () => {
		startCarousel();
	});
});


// Detener el carrusel cuando el mouse está sobre un elemento
document.querySelectorAll('.portfolio-item').forEach(item => {
	item.addEventListener('mouseenter', () => {
		document.querySelector('.portfolio-track').style.animationPlayState = 'paused';
	});
	item.addEventListener('mouseleave', () => {
		document.querySelector('.portfolio-track').style.animationPlayState = 'running';
	});
});
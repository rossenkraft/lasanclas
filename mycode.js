//---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Array of messages with <br> tags for line breaks
  const messages = [
"Your brand, reimagined and reinforced",
"Innovative branding solutions for growing businesses",
"A brand built for the future of your business",
"Distinctive branding that captures attention and loyalty",
"Your brand’s story, told with clarity and impact",
"Authentic branding that connects with your audience",
"Crafting a legacy through strategic brand development",
"A fresh perspective on building memorable brands",
"Tailored branding solutions that reflect your vision",
"The foundation of success, built through powerful branding",
"Brand identities that stand out in a competitive market",
"Strategic branding for businesses ready to grow",
"Brand clarity and direction for sustainable success",
"Empowering businesses with purposeful, results-driven branding",
"A unique brand presence that resonates with your market",
  ];

  // Select a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Display the message in the <p> element as HTML
  document.getElementById("random-title").innerHTML = randomMessage;
});


//----------------------------------------------------------------------------

AOS.init({
    duration: 1000, // duración por defecto para todas las animaciones
	offset: -5,
  });


  // COLOR TEXT --------------------------------------------------------------


  $('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });






// MODAL --------------------------------------------------------------

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



 
/* ------------------------------------------------------------------------------*/


 class AWaves extends HTMLElement {
  /**
   * Init
   */
  connectedCallback() {
    // Elements
    this.canvas = this.querySelector(".js-canvas");
    this.ctx = this.canvas.getContext("2d");

    // Properties
    this.mouse = {
      x: -10,
      y: 0,
      lx: 0,
      ly: 0,
      sx: 0,
      sy: 0,
      v: 0,
      vs: 0,
      a: 0,
      set: false
    };

    this.lines = [];
    this.noise = new Noise(Math.random());

    // Init
    this.setSize();
    this.setLines();

    this.bindEvents();

    // RAF
    requestAnimationFrame(this.tick.bind(this));
  }

  /**
   * Bind events
   */
  bindEvents() {
    window.addEventListener("resize", this.onResize.bind(this));

    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.addEventListener("touchmove", this.onTouchMove.bind(this));
  }

  /**
   * Resize handler
   */
  onResize() {
    this.setSize();
    this.setLines();
  }

  /**
   * Mouse handler
   */
  onMouseMove(e) {
    this.updateMousePosition(e.pageX, e.pageY);
  }

  /**
   * Touch handler
   */
  onTouchMove(e) {
    e.preventDefault();

    const touch = e.touches[0];
    this.updateMousePosition(touch.clientX, touch.clientY);
  }

  /**
   * Update mouse position
   */
  updateMousePosition(x, y) {
    const { mouse } = this;

    mouse.x = x - this.bounding.left;
    mouse.y = y - this.bounding.top + window.scrollY;

    if (!mouse.set) {
      mouse.sx = mouse.x;
      mouse.sy = mouse.y;
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      mouse.set = true;
    }
  }

  /**
   * Set size
   */
  setSize() {
    this.bounding = this.getBoundingClientRect();

    this.canvas.width = this.bounding.width;
    this.canvas.height = this.bounding.height;
  }

  /**
   * Set lines
   */
  setLines() {
    const { width, height } = this.bounding;

    this.lines = [];

    const xGap = 10;
    const yGap = 32;

    const oWidth = width + 200;
    const oHeight = height + 30;

    const totalLines = Math.ceil(oWidth / xGap);
    const totalPoints = Math.ceil(oHeight / yGap);

    const xStart = (width - xGap * totalLines) / 2;
    const yStart = (height - yGap * totalPoints) / 2;

    for (let i = 0; i <= totalLines; i++) {
      const points = [];

      for (let j = 0; j <= totalPoints; j++) {
        const point = {
          x: xStart + xGap * i,
          y: yStart + yGap * j,
          wave: { x: 0, y: 0 },
          cursor: { x: 0, y: 0, vx: 0, vy: 0 }
        };

        points.push(point);
      }

      // Add points
      this.lines.push(points);
    }
  }

  /**
   * Move points
   */
  movePoints(time) {
    const { lines, mouse, noise } = this;

    lines.forEach((points) => {
      points.forEach((p) => {
        // Wave movement
        const move =
          noise.perlin2(
            (p.x + time * 0.0125) * 0.002,
            (p.y + time * 0.005) * 0.0015
          ) * 12;
        p.wave.x = Math.cos(move) * 32;
        p.wave.y = Math.sin(move) * 16;

        // Mouse effect
        const dx = p.x - mouse.sx;
        const dy = p.y - mouse.sy;
        const d = Math.hypot(dx, dy);
        const l = Math.max(175, mouse.vs);

        if (d < l) {
          const s = 1 - d / l;
          const f = Math.cos(d * 0.001) * s;

          p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
          p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
        }

        p.cursor.vx += (0 - p.cursor.x) * 0.005; // String tension
        p.cursor.vy += (0 - p.cursor.y) * 0.005;

        p.cursor.vx *= 0.925; // Friction/duration
        p.cursor.vy *= 0.925;

        p.cursor.x += p.cursor.vx * 2; // Strength
        p.cursor.y += p.cursor.vy * 2;

        p.cursor.x = Math.min(100, Math.max(-100, p.cursor.x)); // Clamp movement
        p.cursor.y = Math.min(100, Math.max(-100, p.cursor.y));
      });
    });
  }

  /**
   * Get point coordinates with movement added
   */
  moved(point, withCursorForce = true) {
    const coords = {
      x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
      y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0)
    };

    // Round to 2 decimals
    coords.x = Math.round(coords.x * 10) / 10;
    coords.y = Math.round(coords.y * 10) / 10;

    return coords;
  }

  /**
   * Draw lines
   */
  drawLines() {
    const { lines, moved, ctx, bounding } = this;
  
    ctx.clearRect(0, 0, bounding.width, bounding.height);
  
    ctx.beginPath();
  
    // Cambia el color basado en el tiempo (hace un gradiente)
    const timeColor = Math.floor((Date.now() / 10) % 255);  // Genera un valor que cambia con el tiempo
    ctx.strokeStyle = `rgba(150,150,150,0.25)`;  // Gradiente entre rojo y verde
  
    lines.forEach((points, lIndex) => {
      let p1 = moved(points[0], false);
  
      ctx.moveTo(p1.x, p1.y);
  
      points.forEach((p1, pIndex) => {
        const isLast = pIndex === points.length - 1;
  
        p1 = moved(p1, !isLast);
  
        const p2 = moved(
          points[pIndex + 1] || points[points.length - 1],
          !isLast
        );
  
        ctx.lineTo(p1.x, p1.y);
      });
    });
  
    ctx.stroke();
  }
    

  /**
   * Tick
   */
  tick(time) {
    const { mouse } = this;

    // Smooth mouse movement
    mouse.sx += (mouse.x - mouse.sx) * 0.1;
    mouse.sy += (mouse.y - mouse.sy) * 0.1;

    // Mouse velocity
    const dx = mouse.x - mouse.lx;
    const dy = mouse.y - mouse.ly;
    const d = Math.hypot(dx, dy);

    mouse.v = d;
    mouse.vs += (d - mouse.vs) * 0.1;
    mouse.vs = Math.min(100, mouse.vs);

    // Mouse last position
    mouse.lx = mouse.x;
    mouse.ly = mouse.y;

    // Mouse angle
    mouse.a = Math.atan2(dy, dx);

    // Animation
    this.style.setProperty("--x", `${mouse.sx}px`);
    this.style.setProperty("--y", `${mouse.sy}px`);

    this.movePoints(time);
    this.drawLines();

    requestAnimationFrame(this.tick.bind(this));
  }
}

customElements.define("a-waves", AWaves);







document.querySelectorAll('.faq-item').forEach(item => {
  const trigger = item.querySelector('.faq-trigger');
  const content = item.querySelector('.faq-content');

  trigger.addEventListener('click', () => {
    if (item.classList.contains('open')) {
      collapse(content, () => item.classList.remove('open'));
    } else {
      // Cerrar otros elementos abiertos
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        const openContent = openItem.querySelector('.faq-content');
        collapse(openContent, () => openItem.classList.remove('open'));
      });
      // Abrir el seleccionado
      expand(content, () => item.classList.add('open'));
    }
  });
});

function expand(element, callback) {
  element.style.height = element.scrollHeight + 'px';
  element.style.overflow = 'hidden';
  element.style.transition = 'height 0.3s ease';
  element.addEventListener('transitionend', function handler() {
    element.style.height = 'auto'; // Permitir altura dinámica después de la animación
    element.removeEventListener('transitionend', handler);
    if (callback) callback();
  });
}

function collapse(element, callback) {
  element.style.height = element.scrollHeight + 'px'; // Establecer altura actual antes de colapsar
  requestAnimationFrame(() => {
    element.style.height = '0px'; // Reducir altura a 0
    element.style.transition = 'height 0.3s ease';
    element.addEventListener('transitionend', function handler() {
      element.removeEventListener('transitionend', handler);
      if (callback) callback();
    });
  });
}






document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Evento para cambiar entre filtros
  filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const filterValue = e.target.getAttribute("data-filter");

      // Cambiar clase activa en los botones
      filterButtons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");

      // Filtrar elementos
      portfolioItems.forEach(item => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";  // Mostrar el ítem
        } else {
          item.style.display = "none";  // Ocultar el ítem
        }
      });
    });
  });
});



//---------------------------------------------------------------------------
// BUBBLE BUTTONS
var animateButton = function(e) {
  e.preventDefault(); // Asegúrate de ejecutar el preventDefault correctamente, con paréntesis.
  
  // Resetear la animación
  e.target.classList.remove('animate');
  
  // Activar la animación
  e.target.classList.add('animate');
  
  // Eliminar la animación después de 700ms
  setTimeout(function() {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  // Cambiar el evento a mousedown para que se active al presionar el botón
  bubblyButtons[i].addEventListener('mousedown', animateButton, false);
}



//---------------------------------------------------------------------------
// Si deseas agregar efectos interactivos
document.querySelectorAll('.pricing-card').forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.03)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});








if (/Mobi|Android/i.test(navigator.userAgent)) {
  // En dispositivos móviles, aseguramos que el scroll no se bloquee
  canvas.addEventListener("touchmove", function(event) {
    event.stopPropagation();  // Evitar que se propague el evento y bloquee el scroll
  });
}





 // Animación del precio (resaltar con pulso)
 gsap.to(".card-price", {
  scale: 1.1,
  duration: 0.5,
  yoyo: true,  // Reversa la animación
  repeat: -1,  // Bucle infinito
  ease: "power1.inOut",
  delay: 1
});

// Animación del descuento (pulso con cambio de color)
gsap.to(".discount", {
  scale: 1.1,
  color: "#f9eb3d",  // Cambia el color del descuento
  duration: 0.6,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  delay: 1.5
});

// Animación del botón (crecer y reducir)
gsap.to("#openModalBtn", {
  scale: 1.02,
  duration: 0.7,
  yoyo: true,
  repeat: -1,
  ease: "power2.inOut",
  delay: 2
});




const ctaIcon = document.querySelector('.ctaicon');
const serviceBtn = document.getElementById('service1-btn');

// Agregar animación al hacer hover sobre el botón
serviceBtn.addEventListener('mouseover', () => {
    ctaIcon.classList.add('animate__animated', 'animate__jello');  // Agregar animación de Animate.css si prefieres efecto extra
});

// Quitar animación cuando el hover termina
serviceBtn.addEventListener('mouseout', () => {
    ctaIcon.classList.remove('animate__animated', 'animate__jello');  // Quitar la animación si se usa Animate.css
});
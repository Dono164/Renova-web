// Efecto de hover en botones
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#555';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#333';
    });
});

// Carga diferida de imágenes
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});



// Validación básica del formulario
const form = document.querySelector('.contacto form');
form.addEventListener('submit', (e) => {
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector('textarea').value;

    if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert('Por favor, completa todos los campos.');
    }
});

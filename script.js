const colorChange = () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Toggle entre modo claro y oscuro
    body.classList.toggle('dark-mode');

    // Cambiar el icono del botón según el modo
    if (body.classList.contains('dark-mode')) {
        // Si está en modo oscuro, cambia el icono a luna
        darkModeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    } else {
        // Si está en modo claro, cambia el icono a sol
        darkModeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    }
};

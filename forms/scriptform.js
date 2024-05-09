const colorChange = () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Toggle entre modo claro y oscuro
    body.classList.toggle('dark-mode');

    // Cambiar el icono del botón según el modo
    const isDarkMode = body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
};

document.querySelectorAll('.productImage').forEach(image => {
    const container = image.parentElement; // Obtener el contenedor de la imagen

    container.addEventListener('mouseover', () => {
        image.style.transform = 'scale(2)';
    });

    container.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

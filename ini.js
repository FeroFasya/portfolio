// Dragging container
const container = document.getElementById('container');
let offsetX = 0, offsetY = 0, isDragging = false;

// Untuk mouse
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
    container.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    container.style.left = `${e.clientX - offsetX}px`;
    container.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});

// Untuk touchscreen
container.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - container.getBoundingClientRect().left;
    offsetY = touch.clientY - container.getBoundingClientRect().top;
    container.style.cursor = 'grabbing';
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    container.style.left = `${touch.clientX - offsetX}px`;
    container.style.top = `${touch.clientY - offsetY}px`;
});

document.addEventListener('touchend', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});
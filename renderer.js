document.getElementById("reset").addEventListener('click', async () => {
    const result = await window.operations.reset();
    document.getElementById("count").innerText = `Count: ${result}`;
});

document.getElementById("add").addEventListener('click', async () => {
    const result = await window.operations.add();
    document.getElementById("count").innerText = `Count: ${result}`;
});

document.getElementById("subtract").addEventListener('click', async () => {
    const result = await window.operations.subtract();
    document.getElementById("count").innerText = `Count: ${result}`;
});

document.getElementById("toggle-dark-mode").addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle();
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light';
});

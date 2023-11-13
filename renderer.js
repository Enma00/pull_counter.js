document.getElementById("reset").addEventListener('click', async () => {
    const name_save = document.getElementById("name_save").value;
    const result = await window.operations.reset(name_save);
    document.getElementById("count").innerText = `Count: ${result}`;
    document.getElementById("name_save").value = "";
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

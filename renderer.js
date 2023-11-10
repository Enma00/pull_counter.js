
/* -------------------------------- Dark mode ------------------------------- */
document.getElementById("toggle-dark-mode").addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

/* ------------------------------ Bouton + / - ------------------------------ */
document.getElementById("add").addEventListener('click', async () => {
    const result = await window.operations.add();
    document.getElementById("count").innerText = `Count: ${result}`;
});
document.getElementById("subtract").addEventListener('click', async () => {
    const result = await window.operations.subtract();
    document.getElementById("count").innerText = `Count: ${result}`;
});
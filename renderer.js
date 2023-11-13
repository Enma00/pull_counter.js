document.getElementById("reset").addEventListener('click', async () => {
    const name_save = document.getElementById("name_save").value;
    const result = await window.operations.reset(name_save);
    document.getElementById("count").innerText = `Count: ${result}`;
    document.getElementById("name_save").value = "";
    updateLast5Counts();
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

async function updateLast5Counts() {
    try {
        const rawData = await fetch('data.json');
        const jsonData = await rawData.json();
        const last5Counts = jsonData.slice(-5).reverse();
        const html = last5Counts.map(item => `<p>${item}</p>`).join('');
        document.getElementById('last-5-counts').innerHTML = html;
    } catch (error) {
        console.error('Erreur lors de la mise à jour des 5 derniers éléments :', error);
    }
}
window.addEventListener('DOMContentLoaded', updateLast5Counts);

document.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        document.getElementById("reset").click();
    } else if (event.key === '+') {
        document.getElementById("add").click();
    } else if (event.key === '-') {
        document.getElementById("subtract").click();
    }
});


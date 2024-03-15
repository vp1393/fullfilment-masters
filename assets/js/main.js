const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});




function openTab(tabIndex) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('tab' + tabIndex).classList.add('active');
}

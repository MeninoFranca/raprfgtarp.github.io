function toggleCheckbox(checkbox) {
    checkbox.classList.toggle('checked');
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('checkbox-container');

    for (let i = 1; i <= 30; i++) {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';
        checkboxContainer.onclick = function () {
            toggleCheckbox(checkbox);
        };

        const checkbox = document.createElement('div');
        checkbox.className = 'checkbox';
        checkbox.id = 'checkbox' + i;

        const label = document.createElement('label');
        label.htmlFor = 'checkbox' + i;
        

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);

        container.appendChild(checkboxContainer);
    }
});
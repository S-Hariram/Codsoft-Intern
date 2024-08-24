document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;

            if (value === 'AC') {
                inputBox.value = '';
            } else if (value === 'DEL') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += value;
            }
        });
    });
});

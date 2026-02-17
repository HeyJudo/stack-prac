const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const emailInput = document.getElementById('email');
    alert(`Subscribed with email: ${emailInput.value}`);
});
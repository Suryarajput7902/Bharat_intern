document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsiusValue)) {
            fahrenheitInput.value = ((celsiusValue * 9/5) + 32).toFixed(2);
        } else if (!isNaN(fahrenheitValue)) {
            celsiusInput.value = ((fahrenheitValue - 32) * 5/9).toFixed(2);
        }
    });
});

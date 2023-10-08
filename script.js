document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const conversionTypeSelect = document.getElementById("conversionType");
    const convertButton = document.getElementById("convertButton");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const conversionType = conversionTypeSelect.value;

        if (!isNaN(temperature)) {
            let result;
            if (conversionType === "celsiusToFahrenheit") {
                result = (temperature * 9/5) + 32;
                resultElement.textContent = `${temperature} Celsius is ${result.toFixed(2)} Fahrenheit.`;
            } else if (conversionType === "fahrenheitToCelsius") {
                result = (temperature - 32) * 5/9;
                resultElement.textContent = `${temperature} Fahrenheit is ${result.toFixed(2)} Celsius.`;
            }
        } else {
            resultElement.textContent = "Please enter a valid temperature.";
        }
    });
});

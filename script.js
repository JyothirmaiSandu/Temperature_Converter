function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");

    if (inputValue == "") {
        alert("Please Enter any Number....");
        return;
    }

    if (type1.value == type2.value) {
        result.innerHTML = inputValue + " " + type1.value.charAt(0).toUpperCase() + type1.value.slice(1);
    } else if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let Fahrenheit = (Number(inputValue) * 9 / 5) + 32;
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    } else if (type1.value == "celcius" && type2.value == "kelvin") {
        let Kelvin = Number(inputValue) + 273.15;
        result.innerHTML = Kelvin.toFixed(3) + " K";
    } else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celcius = (Number(inputValue) - 32) * 5 / 9;
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`;
    } else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let Kelvin = ((Number(inputValue) - 32) * 5 / 9) + 273.15;
        result.innerHTML = Kelvin.toFixed(3) + " K";
    } else if (type1.value == "kelvin" && type2.value == "celcius") {
        let Celcius = Number(inputValue) - 273.15;
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`;
    } else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let Fahrenheit = ((Number(inputValue) - 273.15) * 9 / 5) + 32;
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    }
}
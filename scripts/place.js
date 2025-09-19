/* Last modified */
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modified: ${lastModified}`;

/* Windchill factor */

const temperature = 9;  // °C
const windSpeed = 15;   // km/h

function calculateWindChill(tempC, speedKmH) {
    return (13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speedKmH, 0.16)) + (0.3965 * tempC * Math.pow(speedKmH, 0.16))).toFixed(1);
}

let windChillDisplay = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChillDisplay;
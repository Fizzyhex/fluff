console.log("hi");

const hours = document.getElementById("hours");
const output = document.getElementById("output");

const HOURS_OF_SLEEP = 7;
const HOURS_PER_2_WEEKS = 24 * 14;
const WAKING_HOURS_PER_2_WEEKS = (24 - HOURS_OF_SLEEP) * 14;

function onChange() {
    const userHours = hours.value;
    const generalSpend = Math.round((userHours / HOURS_PER_2_WEEKS) * 100);
    const wakingSpend = Math.round((userHours / WAKING_HOURS_PER_2_WEEKS) * 100);
    const possibility = generalSpend > 100 ? " not possible, but:" : "";

    output.innerHTML =
        `that is...`
        + possibility
        + `<br><b>${generalSpend}%</b> of a day on average`
        + `<br><b>${wakingSpend}%</b> of a waking day on average<sup>*</sup>`
        + `<br><br></br><sup>* assuming ${HOURS_OF_SLEEP} hours of sleep a night</sup>`
}

hours.addEventListener("input", onChange);
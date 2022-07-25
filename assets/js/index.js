// Elements
const ageSpan = document.getElementById("age");

const birthdayDate = new Date(1088492400000);
const deltaYears = Math.round((Date.now() - birthdayDate.getTime() ) / (24 * 60 * 60 * 1000 * 365));

ageSpan.innerText = deltaYears;
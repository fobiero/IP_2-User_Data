function getValue() {
    const dates = document.getElementById("dateInput");
    const gender = document.getElementById("gender");

    var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // get day in an array 
    const date = new Date(dates.value);
    const dayDate = date.getDay();

    // get Akan name & append day 
    if (gender.value === 'male') {
        alert(`Akan name is ${males[dayDate]} Born on ${days[dayDate]}`)
    } else {
        alert(`Akan name is ${females[dayDate]} Born on ${days[dayDate]}`)
    }
}
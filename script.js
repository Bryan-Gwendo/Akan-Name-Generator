function generateAkan() {

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    
    let gender = document.querySelector('input[name="gender"]:checked');

       if (day < 1 || day > 31 || month < 1 || month > 12 || !gender) {
        alert("Please enter valid date and select gender");
        return;
    }

    gender = gender.value;

    let CC = Math.floor(year / 100);
    let YY = year % 100;
    let MM = month;
    let DD = day;

     let date = new Date(year, month - 1, day);
     let d = date.getDay();

    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

     let akanName;

    if (gender === "male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }

    document.getElementById("Akan Name").innerHTML =
        "Your Akan Name : " + akanName;
}

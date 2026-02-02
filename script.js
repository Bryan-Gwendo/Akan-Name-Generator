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
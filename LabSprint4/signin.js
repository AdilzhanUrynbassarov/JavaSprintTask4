

function signIn() {
    let jsonText = localStorage.getItem('users');
    let obj = JSON.parse(jsonText);




    var userEmail = document.getElementById('signEmail');
    var userPassword = document.getElementById('signPass');

let found = false;

    for (let i = 0; i < obj.length; i++) {
        if(userEmail.value == obj[i].email && userPassword.value == obj[i].password) {

            found = true;
            console.log("TRUE");
            break;

        } else {
           found = false;

           console.log("FALSE");
        }


    }

    if(found) {
        alert('You are logged in');
        let tempLog = {
            "email": userEmail.value,
            "password": userPassword.value
        }
        alert(userEmail.value);
        let objToString = JSON.stringify(tempLog);
        localStorage.setItem('temp', objToString);
        window.location.href = "http://localhost:8888/LabSprint4/profile.html"; // тут я подобрал порт 8888, у каждого на локалке по разному, так что вместо 8888 ставим свой порт в коде если что

    }
    else {
        document.getElementById('signEmail').style.border = "1px solid red";
        document.getElementById('signPass').style.border = "1px solid red";
    }


}




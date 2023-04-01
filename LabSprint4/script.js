
var users = [
    {"email": "erik2005kz@mail.ru", "password" : "12345a", "fullname" : "Adilzhan Urynbassarov", "country":"Kazakhstan", "birthdate": "27.09.2002" },
    {"email": "sanzhar2023kz@gmail.com", "password" : "5051", "fullname" : "Sanzhar Sakbay", "country":"Italy", "birthdate": "04.03.2023" },
    {"email": "dimash2008kz@mail.ru", "password" : "12345a", "fullname" : "Adilzhan Urynbassarov", "country":"Kazakhstan", "birthdate": "04.03.2002" }

];

if(localStorage.users.length != 3) {
    users = JSON.parse(localStorage.users);
}


loadDraft();

function register() {



    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var fullname = document.getElementById('fullname');
    var country = document.getElementById('country');
    var birthdate = document.getElementById('birthdate');




    let obj = {
        "email": email.value,
        "password": password.value,
        "fullname": fullname.value,
        "country": country.value,
        "birthdate": birthdate.value

    }
    if(email.value.length != 0 && password.value.length != 0 && fullname.value.length != 0 && country.value.length != 0 && birthdate.value.length != 0) {
        alert("NICE");
        users.push(obj);

    }
    else {
        alert("Fill properly every field");
    }



    let jsonText = JSON.stringify(users);




    localStorage.setItem('users', jsonText);



}




function loadDraft() {
    let jsonText = localStorage.users;
    let obj = JSON.parse(jsonText);

    let emailInput = document.getElementById('prEmail');

    let fullnameInput = document.getElementById('prFullname');
    let countryInput = document.getElementById('prCountry');
    let birthdateInput = document.getElementById('prBirthdate');


   let tempJson = localStorage.getItem('temp');
   let tempObj = JSON.parse(tempJson);

    let signEmail = tempObj.email;
    let signPass = tempObj.password;



    for (let i = 0; i < obj.length; i++) {
        if(signEmail== obj[i].email && signPass == obj[i].password ) {


            emailInput.value = obj[i].email;
            fullnameInput.value = obj[i].fullname;
            countryInput.value = obj[i].country;
            birthdateInput.value = obj[i].birthdate;

        }

        let newDiv = "";
        newDiv = "<h1 style='font-weight: 200'> Welcome " + fullnameInput.value + "</h1>";
        document.getElementById('header').innerHTML = newDiv;

        document.getElementById('pfp').innerText = fullnameInput.value ;
    }






}


loadDraft();


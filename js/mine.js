let input1 = document.getElementById("input1");
let input4 = document.getElementById("input4");
let rememberDiv = document.getElementById("remember");
let h = document.querySelector('h2');
let p = document.querySelector('p');
let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')

let userNameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let repasswordInput = document.querySelector("#repassword");
let inputdata;
let data = [];

function saveData() {
    inputdata = {
        name: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        repassword: repasswordInput.value
    }

    if (inputdata.password == inputdata.repassword) {
        data.push(inputdata);
        localStorage.setItem("loginData", JSON.stringify(data));
        return;
    } 
    else {
        alert("password Not Matched")
        regesterPage();
    }
}

function regesterPage() {
    input1.style.display = "inline-block";
    input4.style.display = "inline-block";
    rememberDiv.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "inline-block"
    h.innerHTML = "Sign up"
    p.innerHTML = `Already have an account 
            <a href="#" onclick="loginPage()">login</a>`
}

function loginPage() {
    input1.style.display = "none";
    input4.style.display = "none";
    rememberDiv.style.display = "flex";

    btn1.style.display = "inline-block";
    btn2.style.display = "none"
    h.innerHTML = "Login"
    p.innerHTML = `Don't have an account? <a href="#" onclick="regesterPage()"> Register</a>`
}
function login() {
    // Get input values
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    //   validation
    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'Please fill in all fields.';
        return;
    }

    //   login logic
    const validCredentials = checkCredentials(username, password);

    if (validCredentials) {
        // Successful login
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'Landing Page.html';
    } else {
        // Failed login
        document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
}

// Function to check credentials  
function checkCredentials(username, password) {
    return username === 'user' && password === 'password';


    
}


function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "logout.html"; // Redirect to home screen after logout
}

function checkLoggedIn() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    if (isLoggedIn) {
        loginLink.style.display = "none";
        logoutLink.style.display = "block";
    } else {
        loginLink.style.display = "block";
        logoutLink.style.display = "none";
    }
}

window.onload = function() {
    checkLoggedIn();
};




var storedObjects = JSON.parse(sessionStorage.getItem("objects")) || [];

function createObject() {
    var objectName = document.getElementById("objectName").value;
    var objectDescription = document.getElementById("objectDescription").value;
    var objectCategory = document.getElementById("objectCategory").value;
    var objectDate = document.getElementById("objectDate").value;

    var newObject = {
        name: objectName,
        description: objectDescription,
        category: objectCategory,
        date: objectDate
    };

    storedObjects.push(newObject);
    sessionStorage.setItem("objects", JSON.stringify(storedObjects));

    window.location.href = "object-list.html";
}

function updateObject(index) {
    var objectToUpdate = storedObjects[index];

    sessionStorage.setItem("objectToUpdate", JSON.stringify(objectToUpdate));
    sessionStorage.setItem("indexToUpdate", index);

    window.location.href = "update-object.html";
}

function deleteObject(index) {
    storedObjects.splice(index, 1);
    sessionStorage.setItem("objects", JSON.stringify(storedObjects));
    window.location.reload();
}

function saveUpdatedObject() {
    var updatedObject = JSON.parse(sessionStorage.getItem("objectToUpdate"));
    var indexToUpdate = sessionStorage.getItem("indexToUpdate");

    updatedObject.name = document.getElementById("updatedObjectName").value;
    updatedObject.description = document.getElementById("updatedObjectDescription").value;
    updatedObject.category = document.getElementById("objectCategory").value;
    updatedObject.date = document.getElementById("updatedObjectDate").value;

    storedObjects[indexToUpdate] = updatedObject;

    sessionStorage.setItem("objects", JSON.stringify(storedObjects));

    window.location.href = "object-list.html";
}


// script.js CountDown

var seconds = 5;

function countdown() {
    document.getElementById('redirectTimer').innerText = seconds;
    
    if (seconds === 0) {
        window.location.href = 'Landing Page.html'; // Redirect to the main page
    } else {
        seconds--;
    }
}

setInterval(countdown, 1000);

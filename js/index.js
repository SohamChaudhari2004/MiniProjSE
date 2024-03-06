const email = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.querySelector('.loginButton');
const loginForm = document.querySelector(".loginForm");

loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const user = email.value;
    const pass = password.value;

    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: user,password: pass })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json(); // Parse response as JSON
        console.log(responseData); // Access the parsed data
        console.log(response.status); // Access the HTTP status code
        console.log(response.headers); // Access the headers
    } catch (error) {
        console.error('Error:', error.message);
        // Handle the error as needed
    }
});

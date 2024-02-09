document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if(data.token) {
            localStorage.setItem('sessionToken', data.token);
            // Redirect to the quiz selection page
            window.location.href = '/quizSelection.html';
        } else {
            alert('Invalid username or password.');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('user.json')
        .then(response => response.json())
        .then(data => {
            var users = data.users;
            var isValidUser = users.some(user => user.username === username && user.password === password);

            if(isValidUser) {
                alert('Login successful!');
            } else {
                alert('Invalid username or password.');
            }
        })
        .catch(error => console.error('Error:', error));
});

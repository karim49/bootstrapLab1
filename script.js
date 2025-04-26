

    document.getElementById('go-to-register').addEventListener('click', function() {
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('register-form').classList.add('active');
    });

    document.getElementById('go-to-login').addEventListener('click', function() {
        document.getElementById('register-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
    });

    document.getElementById('register-btn').addEventListener('click', function(event) {
        event.preventDefault(); 
        alert('Registration successful! Redirecting to Login...');
        document.getElementById('register-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
    });

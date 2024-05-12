
// Kayıt işlevi
function register() {
    var username = document.getElementById('username_input').value;
    var password = document.getElementById('username_passw').value;

    // Yerel depolamada kullanıcıları sakla
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Kayıt işlemi başarıyla tamamlandı!');
}


// Giriş işlevi
function login() {
    var usernameInput = document.querySelector('.username input').value;
    var passwordInput = document.querySelector('.passw input').value;

    // Kullanıcı adı ve şifre doğrulama
    var user = users.find(function(user) {
        return user.username === usernameInput && user.password === passwordInput;
    });

    // Kullanıcı varsa giriş yap
    if (user) {
        console.log(user.username === usernameInput && user.password === passwordInput)
        console.log(user.username,user.password)
        alert('Başarıyla giriş yaptınız!');
        window.location.href = "index.html"; // Yönlendirilecek sayfanın URL'si
        
    } 
    else {
        alert('Kullanıcı adı veya şifre yanlış!');
    }
}

document.getElementById('username_passw').addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        login();
    }
})





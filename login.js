
var users = [
    //{username: isim , password: şifre} olacak mantığnında
];

// Kayıt ol işlevi
function register() {
    var usernameInput = document.querySelector('.username input').value;
    var passwordInput = document.querySelector('.passw input').value;

    // Yeni kullanıcıyı eklemek
    users.push({ username: usernameInput, password: passwordInput });

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


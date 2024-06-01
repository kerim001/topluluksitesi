// Kartları oluşturacak fonksiyon
function KartOlustur(baslik, ResimUrl,icerik, linkUrl,instagramUrl,twitterUrl) {
    var cardDiv = document.createElement("div"); // Yeni bir div oluşturur
    cardDiv.className = "card"; // Oluşturulan div elementine "card" sınıfını ekle

    var imgA = document.createElement("a") // Yeni bir <a> elementi oluşturur
    imgA.className="imagediv"; //imagediv adlı sınıf elementini verdik buna çünkü daha sonra aşağıda buna image elementini appendchild ile atayacağız
    imgA.href = linkUrl; // a ya link bağladık
   
    var image = document.createElement("img"); // Yeni bir <img> elementi oluştur
    image.src = ResimUrl; // <img> elementinin src özelliğini belirle
   // image.alt = baslik; // <img> elementinin alt özelliğini belirle OPSİYONEL KULLANILABİLİR ALT KULLANILIYOR GENELDE AMA MANTIĞINI TAM BİLMEDİĞİMDEN ŞİMDİ YAZMAIDM
    image.width=200;

    
    var cardbaslik = document.createElement("h2"); // Yeni bir <h2> elementi oluştur
    cardbaslik.textContent = baslik; // <h2> elementinin içeriğini belirle

    var cardContent = document.createElement("p"); // Yeni bir <p> elementi oluştur
    cardContent.className = "p_icerik"; // Oluşturulan <p> elementine "p_icerik" sınıfını ekle
    cardContent.textContent = icerik; // <p> elementinin içeriğini belirle

    var link = document.createElement("a"); // Yeni bir <a> elementi oluştur
    link.href = linkUrl; // <a> elementinin href özelliğini belirle
    link.textContent = "Devamı..."; // <a> elementinin içeriğini belirle

    
    var sosyal =document.createElement("div"); // bir div elementi oluşturduk ve buna sosyal dedik
    sosyal.className="sosyal";

    var instagram = document.createElement("a");
    instagram.href=instagramUrl;
    instagram.textContent="";
    
    var instaImage = document.createElement("img");
    instaImage.src = "images/insta.png"; // Burada "images" klasöründeki "insta.png" dosyasının yolunu belirtiyorsunuz.
    instaImage.width = 30;

    

    var twitter = document.createElement("a");
    twitter.href=twitterUrl;
    twitter.textContent="";
    
    var twitterImage = document.createElement("img");
    twitterImage.src = "images/twitter.png"; // Burada "images" klasöründeki "insta.png" dosyasının yolunu belirtiyorsunuz.
    twitterImage.width = 27;


    
    // Oluşturulan elementleri kartın içine yerleştir
    imgA.appendChild(image)
    cardDiv.appendChild(imgA);
    cardDiv.appendChild(cardbaslik);
    cardDiv.appendChild(cardContent);
    cardDiv.appendChild(link);
    
    instagram.appendChild(instaImage)
    sosyal.appendChild(instagram);
    
    twitter.appendChild(twitterImage)
    sosyal.appendChild(twitter)
    
    cardDiv.appendChild(sosyal);

    return cardDiv; // Oluşturulan kartı döndür
}

// Örnek kartlar için bir dizi
var cards = [
    { baslik: "Sürdürülebilirlik Kulübü", ResimUrl: "https://media.licdn.com/dms/image/D4E03AQFrY2yb1TDFLg/profile-displayphoto-shrink_200_200/0/1709667561025?e=2147483647&v=beta&t=W2q_XrukKH7vm65Rzujmh9M77ZB7Q5-xGDu6H21yQqE", icerik: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, error, iste dicta totam nobis necessitatibus cumque quaerat unde odio quos expedita vero neque provident, quis qui alias ut! Tempore?", linkUrl: "siteler/surdurulebilirlik.html",instagram:"https://www.instagram.com/comusurdurulebilirlik/",twitter:""},
    { baslik: "E-Spor Topluluğu", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4Y4CT22eWpQQ7kNvgHeOh2y&_nc_ht=scontent.fist13-1.fna&oh=00_AYA_5UF0cVnDlvtgbNG71C5PAhasUK-peinFvN3LbdZKeQ&oe=66611E87", icerik: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, error, iste dicta totam nobis necessitatibus cumque quaerat unde odio quos expedita vero neque provident, quis qui alias ut! Tempore?", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:""},
    { baslik: "Dijital oyun sanatları topluluğu", ResimUrl: "https://yt3.googleusercontent.com/z30ySnRejWLkzMaHn46svyyhsGFrJN6Qj9T9rYym2O3igk22DCLu0Sjoh0IzjZYkI9jfB9-9aw=s176-c-k-c0x00ffffff-no-rj", icerik: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, error, iste dicta totam nobis necessitatibus cumque quaerat unde odio quos expedita vero neque provident, quis qui alias ut! Tempore?", linkUrl: "siteler/",instagram:"",twitter:""},
    { baslik: "GDCS", ResimUrl: "https://media.licdn.com/dms/image/C4D0BAQFW1cgZvasV7w/company-logo_200_200/0/1662907611328/gdsc_comu_logo?e=2147483647&v=beta&t=HbCWJl8_8hN7M-XsnAolm7E2UdTCgC0KnACWHIL9sag", icerik: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, error, iste dicta totam nobis necessitatibus cumque quaerat unde odio quos expedita vero neque provident, quis qui alias ut! Tempore?", linkUrl: "siteler/",instagram:"https://www.instagram.com/gdsccomu/",twitter:"https://twitter.com/comugdsc"},
    { baslik: "IEEE", ResimUrl: "https://media.licdn.com/dms/image/C560BAQHhR5m0I3j2Hg/company-logo_200_200/0/1630664521813/ieee_anakkale_onsekiz_mart_university_student_branch_logo?e=2147483647&v=beta&t=9sMNSt9uqt3YU6fIQ9qqMlZJ4VjgsteIZn3ozzgEmvg", icerik: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, error, iste dicta totam nobis necessitatibus cumque quaerat unde odio quos expedita vero neque provident, quis qui alias ut! Tempore?", linkUrl: "siteler/",instagram:"https://www.instagram.com/ieee.comu/",twitter:"https://x.com/IEEEcomu"},
    { baslik: "Havacılık Kulübü", ResimUrl: "https://media.licdn.com/dms/image/D4E03AQF3OV4GKRY4xw/profile-displayphoto-shrink_200_200/0/1709051045793?e=2147483647&v=beta&t=yw6OD_ftKhMSy5qsPSnmN-PFqP-KbRyTM8e8rVXXcfI", icerik: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, error, iste dicta totam nobis necessitatibus cumque quaerat unde odio quos expedita vero neque provident, quis qui alias ut! Tempore?", linkUrl: "siteler/",instagram:"https://www.instagram.com/comuhavacilikkulubu/",twitter:""},


    // Diğer kartlar...
];

// Kartları HTML'e ekleme
var cardContainer = document.getElementById("cardContainer"); // HTML'de belirtilen "cardContainer" ID'ye sahip elementi bul

cards.forEach(function(cardData) {
    var card = KartOlustur(cardData.baslik, cardData.ResimUrl, cardData.icerik, cardData.linkUrl,cardData.instagram,cardData.twitter); // Her kart için KartOlustur fonksiyonunu kullanarak bir kart oluştur
    cardContainer.appendChild(card); // Oluşturulan kartı "cardContainer" elementine ekle
});
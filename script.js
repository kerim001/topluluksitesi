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
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/326491669_511010991173758_4247924090873419947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tTHM4sb8nfYQ7kNvgHwMYL2&_nc_ht=scontent.fist13-1.fna&oh=00_AYD7cVJiuGvMzeQGzdwLkjLwuDSIFjYirE5VsrF7J7THQQ&oe=66554107", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "siteler/espor.html",instagram:"https://www.instagram.com/comuespor/",twitter:"https://www.instagram.com/ismail_kerim7"},
   

    // Diğer kartlar...
];

// Kartları HTML'e ekleme
var cardContainer = document.getElementById("cardContainer"); // HTML'de belirtilen "cardContainer" ID'ye sahip elementi bul

cards.forEach(function(cardData) {
    var card = KartOlustur(cardData.baslik, cardData.ResimUrl, cardData.icerik, cardData.linkUrl,cardData.instagram,cardData.twitter); // Her kart için KartOlustur fonksiyonunu kullanarak bir kart oluştur
    cardContainer.appendChild(card); // Oluşturulan kartı "cardContainer" elementine ekle
});
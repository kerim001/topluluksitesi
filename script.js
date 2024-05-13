// Kartları oluşturacak fonksiyon
function KartOlustur(baslik, ResimUrl,icerik, linkUrl) {
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

    // Oluşturulan elementleri kartın içine yerleştir
    imgA.appendChild(image)
    cardDiv.appendChild(imgA);
    cardDiv.appendChild(cardbaslik);
    cardDiv.appendChild(cardContent);
    cardDiv.appendChild(link);

    return cardDiv; // Oluşturulan kartı döndür
}

// Örnek kartlar için bir dizi
var cards = [
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
    { baslik: "ÇOMÜ E-Spor", ResimUrl: "https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-1/326491669_511010991173758_4247924090873419947_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HRK9GGHPbGYQ7kNvgGmrl5r&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAXPYKkJzACz3W1hsrH26Rc_hQqXcKDwJ3702OUsW5sfg&oe=6642AA81", icerik: "topluluğumuz e spor ile alakalıdır daha çok içerik için bizi sosyal medya adreslerimizden takip etmeyi unutmayın", linkUrl: "https://www.instagram.com/comuespor/"},
   


    // Diğer kartlar...
];

// Kartları HTML'e ekleme
var cardContainer = document.getElementById("cardContainer"); // HTML'de belirtilen "cardContainer" ID'ye sahip elementi bul

cards.forEach(function(cardData) {
    var card = KartOlustur(cardData.baslik, cardData.ResimUrl, cardData.icerik, cardData.linkUrl); // Her kart için KartOlustur fonksiyonunu kullanarak bir kart oluştur
    cardContainer.appendChild(card); // Oluşturulan kartı "cardContainer" elementine ekle
});
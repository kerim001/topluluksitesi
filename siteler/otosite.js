function sayfaOlustur(){

    var AnaKart = document.createElement("div")
    AnaKart.className="ana_kart";
    

    var logo_div = document.createElement("div")
    logo_div.className="ana_logo";

    var image =document.createElement("img");
    image.src="";
    image.width=300;

    var baslik_icerik = document.createElement("div");
    baslik_icerik.className="baslik_icerik"
    var h1=document.createElement("h1");
    h1.textContent=document.getElementById("baslik");
    var p =document.createElement("p")
    p.textContent="blabalbalbala";






    logo_div.appendChild(image)
    
    baslik_icerik.appendChild(h1)
    baslik_icerik.appendChild(p)
    
    AnaKart.appendChild(baslik_icerik)



return AnaKart;
}


var KartKonteynır = document.getElementById("cardContainer"); // HTML'de belirtilen "cardContainer" ID'ye sahip elementi bul
var kart1=sayfaOlustur();
KartKonteynır.appendChild(kart1);
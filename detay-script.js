// JSON dosyasından gelen verileri saklamak için boş bir nesne
let data = {};

// JSON dosyasını yükleme ve verileri alıp saklama
fetch('detay-j.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        // Sayfa yüklendiğinde ilk içerik gösterilsin
        showContent(data.content1);
    })
    .catch(error => console.error('Hata:', error));

// Linklere tıklama olaylarını dinleme ve içerikleri gösterme
document.getElementById('link1').addEventListener('click', () => {
    showContent(data.content1);
});

document.getElementById('link2').addEventListener('click', () => {
    showContent(data.content2);
});

document.getElementById('link3').addEventListener('click', () => {
    showContent(data.content3);
});

// İçeriği gösteren fonksiyon
function showContent(content) {
    // İçeriği belirtilen alana yerleştirme
    document.getElementById('content').innerHTML = content.content;

    // Meta etiketlerini güncelleme
    document.getElementById('titlePlaceholder').textContent = content.title;
    document.getElementById('descriptionPlaceholder').setAttribute('content', content.description);
}

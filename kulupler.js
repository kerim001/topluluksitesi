// Sayfa tamamen yüklendiğinde bu fonksiyon çalıştırılır.
document.addEventListener("DOMContentLoaded", function() {
    
    // 'kulpler.json' dosyasını getirme isteği yapar.
    fetch('kulupler.json')
        .then(response => response.json())  // JSON dosyasının yüklenmesini bekler ve JSON formatında ayrıştırır.
        .then(data => {  // JSON dosyasının içeriğini aldıktan sonra bu fonksiyon çalıştırılır.
            const clubSelect = document.getElementById('club');  // 'club' id'sine sahip select elementini bulur.
            
            // JSON verisinde bulunan her kulüp için bu döngü çalıştırılır.
            data.kulupler.forEach(club => {
                const option = document.createElement('option');  // Yeni bir <option> elementi oluşturur.
                option.value = club;  // <option> elementinin value özelliğine kulüp ismini atar.
                option.textContent = club;  // <option> elementinin görünen metnine kulüp ismini atar.
                clubSelect.appendChild(option);  // Oluşturulan <option> elementini <select> elementine ekler.
            });
        })
        .catch(error => console.error('Error fetching the kulpler:', error));  // Eğer dosya getirilirken bir hata olursa bu kod çalışır ve hatayı konsola yazdırır.
});

// JSON dosyasını yükleme işlemi
function loadEvents(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'events.json', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}
// Takvimde etkinlikleri gösterme işlemi
function renderCalendarWithEvents(events) {
    // Takvim işlemleri burada gerçekleştirilecek
}



// Ayların adlarını içeren bir dizi oluşturulur.
const monthNames = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

// Haftanın günlerinin adlarını içeren bir dizi oluşturulur.
const weekdays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

// Mevcut tarih bilgisini alır.
const currentDate = new Date();

// Mevcut ay ve yıl bilgilerini alır.
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// HTML'de bulunan ay ve günlerin listelerine erişim sağlanır.
const monthElement = document.querySelector('.month-name');
const daysElement = document.querySelector('.days');

// Takvimin yeniden oluşturulması için fonksiyon.
function renderCalendar() {
    // Ayın ve yılın adı takvimde görüntülenir.
    monthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    daysElement.innerHTML = ''; // Günler listesi temizlenir.

    // İlk günün ve son günün tarih bilgileri alınır.
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate(); // Ayın gün sayısı alınır.

    // Ayın ilk gününün haftanın hangi günü olduğu belirlenir.
    let firstDayOfWeek = firstDayOfMonth.getDay();
    if (firstDayOfWeek === 0) firstDayOfWeek = 7; // Pazar günü 0 olarak döner, 7 ile değiştirilir.

    // Boş günler oluşturulur.
    for (let i = 1; i < firstDayOfWeek; i++) {
        const dayElement = document.createElement('li');
        daysElement.appendChild(dayElement);
    }

    // Ayın günleri listeye eklenir.
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('li');
        dayElement.textContent = i; // Gün numarası atanır.

        // Eğer gün bugünün tarihine eşitse 'today' sınıfı eklenir.
        if (currentDate.getMonth() === currentMonth && currentDate.getDate() === i && currentDate.getFullYear() === currentYear) {
            dayElement.classList.add('today');
        }

        // Burada etkinlik kontrolü yapılabilir, gerekirse 'event' class'ı eklenir
        // Örneğin:
        // if (i === 3 && currentMonth === 2) {
        //     dayElement.classList.add('event');
        // }

        // Oluşturulan gün listeye eklenir.
        daysElement.appendChild(dayElement);
    }
}

// Takvim oluşturma fonksiyonu çağrılır.
renderCalendar();

// Önceki ay butonuna tıklanınca çağrılan fonksiyon.
document.querySelector('.prev').addEventListener('click', () => {
    currentMonth -= 1; // Bir önceki ayın indeksi azaltılır.
    if (currentMonth < 0) { // Ay indeksi 0'dan küçükse yıl bir önceki yıla ayarlanır.
        currentMonth = 11;
        currentYear -= 1;
    }
    renderCalendar(); // Takvim yeniden oluşturulur.
});

// Sonraki ay butonuna tıklanınca çağrılan fonksiyon.
document.querySelector('.next').addEventListener('click', () => {
    currentMonth += 1; // Bir sonraki ayın indeksi artırılır.
    if (currentMonth > 11) { // Ay indeksi 11'den büyükse yıl bir sonraki yıla ayarlanır.
        currentMonth = 0;
        currentYear += 1;
    }
    renderCalendar(); // Takvim yeniden oluşturulur.
});


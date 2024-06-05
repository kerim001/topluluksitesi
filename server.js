// Express modülünü yükler, bu modül web sunucusu oluşturmak için kullanılır.
const express = require('express');

// Body-parser modülünü yükler, bu modül gelen isteklerin gövdesini kolayca okumak için kullanılır.
const bodyParser = require('body-parser');

// Cors modülünü yükler, bu modül Cross-Origin Resource Sharing (CORS) yönetmek için kullanılır.
const cors = require('cors');

// File system modülünü yükler, bu modül dosya sistemi ile çalışmak için kullanılır.
const fs = require('fs');

// Path modülünü yükler, bu modül dosya ve dizin yollarını çalışmak için kullanılır.
const path = require('path');

// Express uygulamasını başlatır.
const app = express();

// Uygulamanın çalışacağı port numarasını belirler.
const PORT = 3000;

// Cors'u kullanarak farklı kaynaklardan gelen istekleri kabul etmesini sağlar.
app.use(cors());

// Gelen isteklerin gövdesini JSON formatında parse etmek için body-parser kullanır.
app.use(bodyParser.json());

// Public dizinindeki statik dosyaları servis eder (örn. HTML, CSS, JS dosyaları).
app.use(express.static(path.join(__dirname, 'public')));

// '/register' endpoint'i için POST isteği işleyicisini tanımlar.
app.post('/register', (req, res) => {
    // İstek gövdesinden gelen yeni kayıt verilerini alır.
    const newRegistration = req.body;

    // Mevcut kayıtları okumak için 'registrations.json' dosyasını okur.
    fs.readFile('registrations.json', (err, data) => {
        // Eğer dosya okuma sırasında bir hata olursa (ve bu hata 'dosya bulunamadı' değilse), 500 hata kodu ile hata mesajı döndürür.
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading registrations file.');
        }
        
        // Mevcut kayıtları JSON formatında parse eder, eğer dosya yoksa boş bir dizi kullanır.
        let registrations = JSON.parse(data || '[]');

        // Yeni kaydın e-posta adresinin zaten var olup olmadığını kontrol eder.
        const emailExists = registrations.some(registration => registration.email === newRegistration.email);
        
        // Eğer e-posta adresi zaten varsa, 400 hata kodu ile hata mesajı döndürür.
        if (emailExists) {
            return res.status(400).send('Bu e-posta adresi zaten kayıtlı.');
        }

        // Yeni kaydı mevcut kayıtlar dizisine ekler.
        registrations.push(newRegistration);

        // Güncellenmiş kayıtları pretty-print (düzenlenmiş) formatında 'registrations.json' dosyasına yazar.
        fs.writeFile('registrations.json', JSON.stringify(registrations, null, 4), err => {
            // Eğer dosya yazma sırasında bir hata olursa, 500 hata kodu ile hata mesajı döndürür.
            if (err) {
                return res.status(500).send('Error saving registration.');
            }
            // Eğer başarıyla kayıt yapıldıysa, 200 durum kodu ile başarı mesajı döndürür.
            res.status(200).send('Kayıt başarılı.');
        });
    });
});

// Uygulamanın belirtilen port numarasında çalışmasını sağlar ve sunucunun çalıştığını konsola yazdırır.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



//KODLARIN GENEL AÇIKLAMASI

// const express = require('express');

// Express modülünü projeye dahil eder. Bu modül, Node.js ile web sunucusu oluşturmak için kullanılır.
// const bodyParser = require('body-parser');

// Body-parser modülünü projeye dahil eder. Bu modül, HTTP isteklerinin gövdesini JSON formatına çevirmek için kullanılır.
// const cors = require('cors');

// Cors modülünü projeye dahil eder. Bu modül, sunucunun farklı kaynaklardan gelen istekleri kabul etmesini sağlar (CORS - Cross-Origin Resource Sharing).
// const fs = require('fs');

// File System modülünü projeye dahil eder. Bu modül, dosya sistemi ile etkileşime geçmek için kullanılır.
// const path = require('path');

// Path modülünü projeye dahil eder. Bu modül, dosya ve dizin yolları ile çalışmak için kullanılır.
// const app = express();

// Express uygulamasını başlatır.
// const PORT = 3000;

// Uygulamanın çalışacağı port numarasını belirler.
// app.use(cors());

// Uygulamanın tüm kaynaklardan gelen istekleri kabul etmesini sağlar.
// app.use(bodyParser.json());

// Gelen HTTP isteklerinin gövdesini JSON formatına parse eder.
// app.use(express.static(path.join(__dirname, 'public')));

// 'public' dizinindeki statik dosyaları (HTML, CSS, JS) servis eder.
// app.post('/register', (req, res) => { ... });

// '/register' endpoint'i için bir POST isteği işleyicisi tanımlar. Bu işleyici, kullanıcı kayıtlarını işleyecektir.
// const newRegistration = req.body;

// İstek gövdesinden gelen yeni kayıt verilerini alır.
// fs.readFile('registrations.json', (err, data) => { ... });

// Mevcut kayıtları okumak için 'registrations.json' dosyasını okur.
// if (err && err.code !== 'ENOENT') { ... }

// Dosya okuma sırasında bir hata olursa (ve bu hata 'dosya bulunamadı' değilse), 500 hata kodu ile hata mesajı döndürür.
// let registrations = JSON.parse(data || '[]');

// Mevcut kayıtları JSON formatında parse eder. Eğer dosya yoksa, boş bir dizi kullanır.
// const emailExists = registrations.some(registration => registration.email === newRegistration.email);

// Yeni kaydın e-posta adresinin zaten var olup olmadığını kontrol eder.
// if (emailExists) { ... }

// Eğer e-posta adresi zaten varsa, 400 hata kodu ile hata mesajı döndürür.
// registrations.push(newRegistration);

// Yeni kaydı mevcut kayıtlar dizisine ekler.
// fs.writeFile('registrations.json', JSON.stringify(registrations, null, 4), err => { ... });

// Güncellenmiş kayıtları pretty-print (düzenlenmiş) formatında 'registrations.json' dosyasına yazar. JSON.stringify'nin ikinci ve üçüncü parametreleri, JSON verilerini daha okunabilir hale getirmek için kullanılır.
// if (err) { ... }

// Dosya yazma sırasında bir hata olursa, 500 hata kodu ile hata mesajı döndürür.
// res.status(200).send('Kayıt başarılı.');

// Başarıyla kayıt yapıldığında, 200 durum kodu ile başarı mesajı döndürür.
// app.listen(PORT, () => { ... });

// Uygulamanın belirtilen port numarasında çalışmasını sağlar ve sunucunun çalıştığını konsola yazdırır.

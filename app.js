/*
1-Bakiye goruntuleme
2-Para cekme
3-Para yatırma
4-Cikis

ATM Uygulamasi
*/
let yeniSatir = "\r\n";
let bakiye = 1000;


let metin = "1-Bakiye goruntuleme " + yeniSatir
    + "2-Para cekme " + yeniSatir
    + "3-Para yatırma " + yeniSatir
    + "4-Çıkış Yap " + yeniSatir
    + "Lütfen bir işlem seçiniz: ";
//alert(metin);
let secim = prompt(metin);
switch (secim) {
    case "1":
        console.log("Bakiyeniz : " + bakiye);
        
        break;
    case "2":
        let miktar = parseInt(prompt("Kaç TL para almak istiyorsunuz ?"));
        if (bakiye >= miktar) {
            console.log(`${miktar}TL Para Aldınız Bakiyeniz ${bakiye - miktar
                } TL`);
            bakiye -= miktar;
        } else {
            console.log("Yeterli Bakiye Yok");
        }
        break;
    case "3":
        let yatirma = parseInt(prompt("Ne kadar para yatırmak istersiniz?"));
        console.log(`${yatirma}TL Bakiyenize Eklendi.`);
        bakiye += yatirma;
        break;
    case "4":
        alert("Hesabinizdan cikis yapiyorsunuz.Tekrar Görüşürüz.");
    //process.exit();
        break;
    default:
        alert("Geçersiz İşlem Seçiminiz var.Lutfen 1-4 arasinda secim yapiniz");
}
       



# REACT JS GEREKLİ KURULUMLAR VE NOTLARIM

# Kurulum

        İlk olarak reactJS çalıştırabilmek için bunu yayınlayacak ve kodları yorumalayacak bir sunucuya ihtiyaç var.
    Ayrıca paket kurulumları için bir paket yöneticisine ihtiyaç bulunmaktadır. 
    NodeJS tüm gerekli servis ve paket yönetim araçlarını içerisinde barındırmaktadır.

    https://nodejs.org/tr/download/prebuilt-installer

# node js kurulumunu kontrol etmek için
node -v
# paket yöneticisini kontrol etmek için
npm -v

# ReactJS Rehberleri
- https://create-react-app.dev/docs/getting-started
- https://react.dev/learn/start-a-new-react-project


JS doğası gereği tip güvenliği sağlamamaktadır. Bu nedenle kodlarımızı daha güvenli ve yönetilebilir yapmak için projelerimizi TypeScript(TS) ile kuracağız ya da önceden startdart olarak kurmuş isek ek olarak TS kurulumu ekleyerek TS haline getireceğiz.

'''bash
# TS olmadan kurulum yapmak yani JS
npx create-react app uygulama-adi 
'''

'''bash
# TypeScript destekli şekilde uygulamayı kurmak
npx create-react-app uygulama-adi --template typescript
'''

 Örnek Proje:
    npx create-react-app ilkuygulama --template typescript

DİKKAT!!!! kurulumlar ve başlatma işleri için öncelikle terminal ekranına geçiniz. Burada hangi dizin içerisine projeyi atacak iseniz öncelikle o klasöre geçin. --->>> cd Uygulamalarim (terminalden yazacan bunu)

Sonra buraya oluşturmak istediniz proje komutunu giriyorsunuz. (npx create-react-app uygulama-adi --template typescript)

 
## Çalıştırmak - Uygulamayı başlatmak

Uygulama başlatmak için "npm start" yeterlidir. Ancak, uygulamanın başlaması için uygulama configlerini içeren package.json dosyasına gerek vardır. Eğer konum olarak uygulamanın dizininde değil iseniz npm start hata verecektir. 
Örn:
Uygulamanızın paket yapısı şöyle olsun 
- REACTJS (Ana klasör)
-- ilkislemler (alt klasör)
--- Uygulamalarim (alt klasör)
---- ilkuygulama (uygulama klasörü)

CMD: ReactJS>Uygulamalarim> npm start Hata verektir. çünkü projenin içinde değilsin.
Çözüm için cd ile uygulama klasörünün directorysine geçiceksin. (in this case -> ilkuygulama)

Programı sonlandırmak için cmd'de control + c .

## Uygulamanın Portunu değiştirmek 

/
"scripts": {
    //default olarak çalışır, 3000 portu kullanılır.
    //port değiştirmek içim aşağıdaki start modifikasyonunu kullanabilirsin.

    "start": "set PORT=9990 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}

## Kaynak kodlarının görünürlüğünü karıştırmak

"build": "set GENERATE_SOURCEMAP=false && react-scripts build"

bir projeyi build almak için "npm run build" 


in case of error starting -> npm install ajv ajv-keywords


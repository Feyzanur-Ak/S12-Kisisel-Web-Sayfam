# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Proje: React ve Redux ile Modern Web Uygulaması

Bu proje, React, Redux, Tailwind CSS, React Testing Library gibi modern frontend teknolojileri kullanılarak geliştirilmiş, kullanıcı odaklı bir web uygulamasıdır. Projede, kullanıcı deneyimini ön planda tutarak kolay anlaşılabilir bir tasarım ve sağlam bir altyapı hedeflenmiştir.

Proje Özellikleri

1. Tailwind CSS ile Görsel Tasarım

Utility-First CSS Framework: Tailwind CSS ile CSS yazmadan, HTML elementlerine doğrudan sınıflar ekleyerek tasarım oluşturuldu.
Responsive Tasarım:
sm:, md:, lg: gibi kısaltmalar kullanılarak farklı ekran boyutlarına göre tasarımlar yapıldı.

Örneğin:

<div class="max-w-7xl mx-auto">...</div>

Bu kod ile sayfanın genişliği sınırlandırıldı ve içerik ortalandı.

Avantajlar:

Hızlı prototipleme.

Mobil uyumlu ve modern bir kullanıcı deneyimi.

2. Kullanıcı Deneyimi

Kolay Anlaşılır Tasarım: Kullanıcılar için temiz ve sezgisel bir arayüz sunuldu.
Contact Me Sayfası:
Kullanıcıların veri girişi yaptığı bir form alanı oluşturuldu.
Form verileri bir REST API'ye POST isteği ile gönderildi ve konsolda görüntülendi.

3. React Context API ile Global Durum Yönetimi
Dil ve Tema Yönetimi:

Kullanıcıların dil (tr/en) ve tema (light/dark) tercihleri merkezi olarak yönetildi.
Bu tercihler localStorage'da saklanarak sayfa yenilendiğinde korunması sağlandı.

GlobalContext:

createContext ile dil ve tema gibi değerlere her yerden erişim sağlandı.

GlobalProvider:

Bu değerler, uygulamanın tüm bileşenlerine aktarıldı.

useLocalStorage:

language ve theme değerleri tarayıcının localStorage’ına kaydedildi ve okundu.
4. Redux Store ile Merkezi Durum Yönetimi
Kullanıcı Bilgileri Yönetimi:
Redux Store’da kullanıcı bilgileri ve durumları saklandı.
combineReducers ile birden fazla reducer birleştirildi ve createStore ile Store oluşturuldu.
React Bileşenlerinde Kullanım:
useSelector ile Redux Store’daki verilere erişim sağlandı.
useDispatch ile Redux Store’daki durumlar güncellendi.
5. React Testing Library (RTL)
Kullanıcı Odaklı Testler:
RTL ile bileşenlerin tıklanabilirliği ve görünürlüğü gibi kullanıcı davranışları test edildi.
Kolay kullanımı sayesinde tercih edildi.
Test Örneği:
Bir düğmenin tıklanabilirliğini kontrol eden test:
javascript
Kodu kopyala
test('Düğmeye tıklanınca metin değişiyor', () => {
  const { getByText } = render(<App />);
  const button = getByText(/Tıkla/i);
  fireEvent.click(button);
  expect(getByText(/Merhaba Dünya/i)).toBeInTheDocument();
});
6. Proje Akışı
Form Veri Yönetimi
Kullanıcı bir form alanında değişiklik yaptığında:
handleChange fonksiyonu tetiklenir:
javascript
Kodu kopyala
const handleChange = (e) => {
  const { name, value } = e.target;
  dispatch(setField(name, value));
};
Form verileri Redux Store’a gönderilir ve güncellenir.
Redux Store Kullanımı
Action ve Dispatch Kullanımı:
Action’lar Redux’ta durum güncellemeleri için kullanılır.
dispatch ile bu action’lar reducer’a gönderilir.
useSelector ile Veri Erişimi:
Redux Store’daki verilere kolayca erişim sağlanır:
javascript
Kodu kopyala
const { name, email } = useSelector((state) => state.user);
Projenin Avantajları
Hızlı ve Ölçeklenebilir Geliştirme:
Tailwind CSS ile hızlı prototipleme.
Context API ve Redux ile merkezi durum yönetimi.
Responsive Tasarım:
Farklı cihazlarda sorunsuz kullanıcı deneyimi.
Test Edilebilirlik:
React Testing Library ile kullanıcı davranışlarına odaklı testler.
Performans ve Tutarlılık:
Local Storage kullanımı sayesinde kullanıcı tercihleri korunur.

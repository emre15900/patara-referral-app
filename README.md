# Patara Referral App

Bu proje, kripto para kullanıcılarının arkadaşlarını davet ederek kazanç sağlayabilecekleri Patara platformunun referans UI uygulamasıdır.

## Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- **Next.js (Pages Router)** - React çerçevesi
- **TypeScript** - Tip güvenliği için
- **Tailwind CSS** - Stil ve tasarım için
- **shadcn/ui** - UI bileşenleri
- **Framer Motion** - Animasyonlar için
- **React Icons** - İkonlar için

## Özellikler

- Responsive tasarım (mobil ve masaüstü uyumlu)
- Karanlık mod tasarımı
- Komponent bazlı modüler kod yapısı
- Framer Motion ile canlandırılmış arayüz
- Referans davetleri ve kazanç takibi

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Repoyu klonlayın:
```bash
git clone [repo-url]
cd patara-referral-app
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
```

4. Tarayıcınızı açın ve [http://localhost:3000](http://localhost:3000) adresine gidin.

## Sayfalar

- **Ana Sayfa (/)** - Karşılama sayfası ve giriş
- **Referanslar (/referrals)** - Referans linkini paylaşma ve istatistikler
- **Kazançlar (/earnings)** - Kazanç takibi ve işlem geçmişi

## Dağıtım

Bu proje, Vercel, Netlify veya diğer statik site barındırma platformlarına kolayca dağıtılabilir.

```bash
npm run build
# veya
yarn build
```

## Notlar

Bu uygulama, gerçek bir blockchain altyapısına bağlı değildir ve sadece bir UI demosu olarak gösterilmektedir. Gerçek uygulamada, web3 bağlantısı ve kontrat entegrasyonu eklenmelidir.

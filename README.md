# 🛒 E-Commerce Backend API

Bu proje, NestJS kullanılarak geliştirilmiş bir e-ticaret backend uygulamasıdır.
Ürün yönetimi, sepet işlemleri, kullanıcı kimlik doğrulama (JWT) ve sipariş oluşturma gibi temel e-ticaret işlevlerini içerir.

---

## 🚀 Kullanılan Teknolojiler

* **NestJS** – Backend framework
* **TypeScript** – Programlama dili
* **PostgreSQL** – Veritabanı
* **Prisma ORM** – Veritabanı yönetimi
* **JWT (JSON Web Token)** – Authentication
* **Swagger (OpenAPI)** – API dokümantasyonu
* **Class-validator** – DTO validation

---

## 📦 Özellikler

### ✅ Ürün Yönetimi

* Ürün oluşturma
* Ürün listeleme
* Ürün detay görüntüleme

### 🛒 Sepet Yönetimi

* Sepete ürün ekleme
* Sepetten ürün çıkarma
* Ürün adedi güncelleme
* Sepeti görüntüleme

### 🔐 Authentication (JWT)

* Kullanıcı kayıt (register)
* Kullanıcı giriş (login)
* Token ile korunan endpointler

### 📦 Sipariş Yönetimi (Bonus)

* Sepeti siparişe dönüştürme (checkout)
* Sipariş toplam tutar hesaplama
* Stok güncelleme
* Sepeti temizleme
* Sipariş listeleme
* Sipariş detay görüntüleme

---

## 🧪 API Dokümantasyonu

Swagger UI:

```
http://localhost:3000/api/docs
```

---

## ⚙️ Kurulum

### 1. Projeyi klonla

```bash
git clone https://github.com/kullanici-adi/repo-adi.git
cd repo-adi
```

### 2. Paketleri yükle

```bash
npm install
```

---

## 🔑 Environment Variables

Proje kök dizinine `.env` dosyası oluştur:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME"
JWT_SECRET="supersecretkey"
JWT_EXPIRES_IN="1d"
PORT=3000
```

---

## 🗄️ Veritabanı Kurulumu

```bash
npx prisma generate
npx prisma migrate dev
```

---

## ▶️ Uygulamayı Çalıştır

```bash
npm run start:dev
```

---

## 🔍 Prisma Studio (Veritabanı UI)

```bash
npx prisma studio
```

```
http://localhost:5555
```

---

## 🔐 Authentication Kullanımı

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

Response:

```json
{
  "accessToken": "..."
}
```

---

### Swagger’da Token Kullanımı

1. Swagger aç
2. Sağ üstte **Authorize** butonuna bas
3. Şunu gir:

```
Bearer TOKEN
```

---

## 🛒 Order (Checkout) Akışı

1. Ürün oluştur
2. Sepete ürün ekle
3. Login ol ve token al
4. `Authorize` ile token gir
5. Checkout yap:

```
POST /api/orders/checkout
```

### Checkout sonucu:

* Sipariş oluşturulur
* Toplam tutar hesaplanır
* Stok düşürülür
* Sepet temizlenir

---

## ⚠️ Hata Yönetimi

Global exception filter ile tüm hatalar standart formatta döndürülür:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message",
  "path": "/api/endpoint",
  "timestamp": "..."
}
```

---

## 📊 Logging

Tüm requestler middleware ile loglanır:

```
GET /api/products 200 - 12ms
POST /api/cart/items 201 - 8ms
```

---

## 🧠 Varsayımlar

* Her kullanıcı için tek sepet bulunmaktadır
* Checkout sırasında stok kontrolü yapılır
* Kullanıcı auth sistemi basit tutulmuştur (role-based değil)
* Siparişler “CREATED” status ile başlar

---

## ⭐ Bonus Özellikler

* JWT Authentication
* Protected endpointler
* Order & Checkout sistemi
* Stock management
* Cart temizleme
* Global error handling
* Request logging

---

## 🏁 Sonuç

Bu proje:

* Modüler yapı
* Temiz kod prensipleri
* RESTful API standartları
* Güvenli authentication
* Gerçek e-ticaret akışı

göz önünde bulundurularak geliştirilmiştir.

---

## 👤 Geliştirici

**Satı İlayda Öncül**

---

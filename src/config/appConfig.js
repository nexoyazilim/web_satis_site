// Uygulama genelinde kullanılan sabit ID ve anahtarlar
// Tek yerden yönetim için burada toplandı

export const SITE_ID = '5'; // demo-veteriner varsayılan site id
export const DEFAULT_CUSTOMER_ID = '4'; // varsayılan müşteri id
// API key: env varsa onu kullan, yoksa prod anahtar ile çalış
export const API_KEY = import.meta.env.VITE_API_KEY || 'prod-key';
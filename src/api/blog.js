import apiClient from './client';

// Development: Vite proxy (/api) üzerinden; Production: gerçek URL
const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com');
const API_KEY = 'dev-local-key'; // Backend'de tanımlı olan key
const SITE_ID = '5'; // demo-veteriner

const blogService = {
  // Blog ayarlarını getir
  async getBlogSettings() {
    try {
    const response = await apiClient.get('/blog/settings', {
        headers: {
          'Content-Type': 'application/json',
          'x-site-id': SITE_ID,
          'x-api-key': API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error('Blog ayarları yüklenemedi:', error);
      throw error;
    }
  },

  // Blog yazılarını getir
  async getPosts(customerId = '4', category = null) {
    try {
      const params = { customer_id: customerId };
      if (category) params.category = category;
      
    const response = await apiClient.get('/blog/posts', {
        headers: {
          'Content-Type': 'application/json',
          'x-site-id': SITE_ID,
          'x-api-key': API_KEY
        },
        params
      });
      return response.data;
    } catch (error) {
      console.error('Blog yazıları yüklenemedi:', error);
      throw error;
    }
  },

  // Tek blog yazısı getir
  async getPost(slug, customerId = '4') {
    try {
    const response = await apiClient.get(`/blog/posts/slug/${slug}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-site-id': SITE_ID,
          'x-api-key': API_KEY
        },
        params: { customer_id: customerId }
      });
      return response.data;
    } catch (error) {
      console.error('Blog yazısı yüklenemedi:', error);
      throw error;
    }
  },

      // Yeni blog yazısı oluştur
      async createPost(postData, customerId = '4') {
        try {
          const requestBody = {
            title: postData.title,
            content: postData.content,
            customer_id: parseInt(customerId), // Number olarak gönder
            featured_image: postData.featured_image || '',
            description: postData.description || '',
            category: postData.category || 'Genel',
            is_published: postData.is_published !== undefined ? postData.is_published : true
          };
          
          console.log('🔵 CREATE POST REQUEST:', {
            url: '/blog/posts',
            body: requestBody,
            headers: {
              'x-site-id': SITE_ID,
              'x-api-key': API_KEY
            }
          });
          
          const response = await apiClient.post('/blog/posts', requestBody, {
            headers: {
              'x-site-id': SITE_ID,
              'x-api-key': API_KEY
            }
          });
          
          console.log('✅ CREATE POST SUCCESS:', response.data);
          return response.data;
        } catch (error) {
          console.error('🔴 Blog yazısı oluşturulamadı:', error);
          console.error('🔴 Error Response:', error.response?.data);
          console.error('🔴 Error Status:', error.response?.status);
          throw error;
        }
      },

  // Blog yazısını güncelle
  async updatePost(id, postData, customerId = '4') {
    try {
      const response = await apiClient.put(`/blog/posts/${id}`, {
        ...postData,
        customer_id: customerId
      }, {
        headers: {
          'x-site-id': SITE_ID,
          'x-api-key': API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error('Blog yazısı güncellenemedi:', error);
      throw error;
    }
  },

  // Blog yazısını sil
  async deletePost(id, customerId = '4') {
    try {
      const response = await apiClient.delete(`/blog/posts/${id}`, {
        headers: {
          'x-site-id': SITE_ID,
          'x-api-key': API_KEY
        },
        params: { customer_id: customerId }
      });
      return response.data;
    } catch (error) {
      console.error('Blog yazısı silinemedi:', error);
      throw error;
    }
  },

  // Fallback: Statik blog verileri
  getFallbackPosts() {
    return [
      {
        id: 'fallback-1',
        title: 'Evcil Hayvanınızın Beslenme İhtiyaçlarını Anlama',
        description: 'Evcil hayvanınızın yaşı ve ırkı için doğru yiyeceği nasıl seçeceğinizi öğrenin.',
        content: 'Doğru diyet seçimi marka isimlerinden çok daha fazlasıdır.\n\nYaşam evresini (yavru/kedi, yetişkin, yaşlı) ve ırka özgü ihtiyaçları göz önünde bulundurarak başlayın. Makro besinleri (protein, yağ, karbonhidrat) dengeleyin ve temel mikro besinleri (kediler için taurin, cilt/tüy için omega-3) sağlayın.\n\nYeni diyetleri 7-10 gün boyunca kademeli olarak tanıtın ve mide rahatsızlığını önlemek için her zaman temiz su bulundurun. Ani kilo değişimi, donuk tüy veya halsizlik fark ederseniz veterinerinize danışın.',
        category: 'nutrition',
        slug: 'evcil-hayvan-beslenme-ihtiyaclari',
        is_published: true,
        created_at: new Date().toISOString()
      },
      {
        id: 'fallback-2',
        title: 'Yaygın Evcil Hayvan Sağlığı Efsaneleri Çürütüldü',
        description: 'Evcil hayvanınızın sağlığı söz konusu olduğunda gerçekleri kurgudan ayırın.',
        content: 'Evcil hayvan sağlığı konusunda birçok efsane dolaşımda. İşte en yaygın olanları:\n\n1. "Kediler her zaman dört ayak üzerine düşer" - Bu doğru değil, yüksekten düşen kediler ciddi yaralanmalar yaşayabilir.\n\n2. "Köpeklerin ağzı insanlardan daha temizdir" - Köpeklerin ağzında zararlı bakteriler bulunabilir.\n\n3. "Kuru mama dişleri temizler" - Kuru mama diş temizliği sağlamaz, düzenli diş bakımı gerekir.',
        category: 'health',
        slug: 'evcil-hayvan-sagligi-efsaneleri',
        is_published: true,
        created_at: new Date().toISOString()
      },
      {
        id: 'fallback-3',
        title: 'Evcil Hayvanınızı Nasıl Eğitirsiniz',
        description: 'Pozitif pekiştirme teknikleri ile evcil hayvanınızı eğitmenin yolları.',
        content: 'Evcil hayvan eğitimi sabır ve tutarlılık gerektirir. İşte temel prensipler:\n\n1. Pozitif pekiştirme kullanın - Ödüller cezadan daha etkilidir\n2. Tutarlı olun - Aynı komutları aynı şekilde kullanın\n3. Kısa seanslar yapın - 10-15 dakikalık eğitimler yeterli\n4. Sabırlı olun - Her hayvan farklı hızda öğrenir\n5. Profesyonel yardım alın - Gerekirse eğitmen desteği alın',
        category: 'training',
        slug: 'evcil-hayvan-egitimi',
        is_published: true,
        created_at: new Date().toISOString()
      }
    ];
  }
};

export default blogService;


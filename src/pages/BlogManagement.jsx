import React, { useState, useEffect } from 'react';
import blogService from '../api/blog';

const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [confirmDeletePostId, setConfirmDeletePostId] = useState(null);
  const [confirmDeletePostTitle, setConfirmDeletePostTitle] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Müşteri ID'sini localStorage'dan al
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const customerId = user.id || '4'; // Fallback
      
      const response = await blogService.getPosts(customerId);
      setPosts(response.data || []);
    } catch (error) {
      console.warn('API hatası, statik veriler kullanılıyor:', error);
      
      // Fallback: Statik veriler
      const fallbackPosts = blogService.getFallbackPosts();
      setPosts(fallbackPosts);
      setError('API bağlantısı kurulamadı, statik veriler gösteriliyor.');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (id, postData) => {
    try {
      setLoading(true);
      setError(null);
      
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const customerId = user.id || '4';
      
      console.log('🔵 BlogManagement createPost:', { id, postData, customerId });
      
      await blogService.createPost(postData, customerId);
      setSuccess('Blog yazısı başarıyla oluşturuldu!');
      fetchPosts();
      setShowForm(false);
    } catch (error) {
      setError('Blog yazısı oluşturulamadı: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (id, postData) => {
    try {
      setLoading(true);
      setError(null);
      
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const customerId = user.id || '4';
      
      await blogService.updatePost(id, postData, customerId);
      setSuccess('Blog yazısı başarıyla güncellendi!');
      fetchPosts();
      setEditingPost(null);
    } catch (error) {
      setError('Blog yazısı güncellenemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const requestDeletePost = (post) => {
    setConfirmDeletePostId(post.id);
    setConfirmDeletePostTitle(post.title || '');
  };

  const cancelDeletePost = () => {
    setConfirmDeletePostId(null);
    setConfirmDeletePostTitle('');
  };

  const confirmDeletePost = async () => {
    if (!confirmDeletePostId) return;
    try {
      setLoading(true);
      setError(null);
      
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const customerId = user.id || '4';
      
      await blogService.deletePost(confirmDeletePostId, customerId);
      setSuccess('Blog yazısı başarıyla silindi!');
      setConfirmDeletePostId(null);
      setConfirmDeletePostTitle('');
      fetchPosts();
    } catch (error) {
      setError('Blog yazısı silinemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'health', label: 'Sağlık' },
    { value: 'nutrition', label: 'Beslenme' },
    { value: 'training', label: 'Eğitim' },
    { value: 'general', label: 'Genel' }
  ];

  return (
    <div className="blog-management">
      <div className="blog-header">
        <h2>Blog Yönetimi</h2>
        <p>Veteriner siteniz için blog yazılarınızı yönetin</p>
        
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
          disabled={loading}
        >
          Yeni Blog Yazısı Ekle
        </button>
      </div>

      {/* Mesajlar */}
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}
      
      {success && (
        <div className="alert alert-success">
          {success}
          <button onClick={() => setSuccess(null)}>×</button>
        </div>
      )}

      {/* Blog Yazıları Listesi */}
      <div className="posts-list">
        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : posts.length === 0 ? (
          <div className="no-posts">
            <p>Henüz blog yazınız yok. İlk yazınızı ekleyin!</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="post-item">
              <div className="post-header">
                <h3>{post.title}</h3>
                <div className="post-meta">
                  <span className={`category-badge ${post.category}`}>
                    {categories.find(c => c.value === post.category)?.label}
                  </span>
                  <span className="date">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </span>
                  <span className={`status ${post.is_published ? 'published' : 'draft'}`}>
                    {post.is_published ? 'Yayında' : 'Taslak'}
                  </span>
                </div>
              </div>
              fetch
              
              <p className="post-description">{post.description}</p>
              
              <div className="post-actions">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setEditingPost(post)}
                  disabled={loading}
                >
                  Düzenle
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => requestDeletePost(post)}
                  disabled={loading}
                >
                  Sil
                </button>
                <a 
                  href={`https://demo-veteriner.nexoyazilim.com/blog/${post.slug}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Görüntüle
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Yeni Yazı Ekleme/Düzenleme Formu */}
      {(showForm || editingPost) && (
        <BlogPostForm
          post={editingPost}
          onSubmit={editingPost ? updatePost : createPost}
          onCancel={() => {
            setShowForm(false);
            setEditingPost(null);
          }}
          loading={loading}
        />
      )}
      {Boolean(confirmDeletePostId) && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-header">
              <h3>Blog yazısını sil</h3>
            </div>
            <div className="modal-body">
              <p>
                "{confirmDeletePostTitle}" başlıklı yazıyı silmek istiyor musunuz?
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={cancelDeletePost}>Vazgeç</button>
              <button className="btn-confirm" onClick={confirmDeletePost} disabled={loading}>
                Evet, sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Blog Yazısı Formu Komponenti
const BlogPostForm = ({ post, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    description: post?.description || '',
    content: post?.content || '',
    category: post?.category || 'health',
    slug: post?.slug || '',
    is_published: post?.is_published ?? true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post?.id, formData);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title)
    });
  };

  return (
    <div className="blog-form-modal">
      <div className="modal-content">
        <h3>{post ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı'}</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Başlık *</label>
            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>Açıklama</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="3"
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>İçerik *</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              rows="10"
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Kategori</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                disabled={loading}
              >
                <option value="health">Sağlık</option>
                <option value="nutrition">Beslenme</option>
                <option value="training">Eğitim</option>
                <option value="general">Genel</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData({...formData, is_published: e.target.checked})}
                disabled={loading}
              />
              Yayınla
            </label>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Kaydediliyor...' : (post ? 'Güncelle' : 'Oluştur')}
            </button>
            <button type="button" onClick={onCancel} className="btn btn-secondary" disabled={loading}>
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogManagement;


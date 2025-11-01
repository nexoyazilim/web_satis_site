export async function fetchNews() {
  // Try NewsAPI first
  const newsApiKey = import.meta?.env?.VITE_NEWSAPI_KEY || import.meta?.env?.REACT_APP_NEWSAPI_KEY
  if (newsApiKey) {
    try {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&pageSize=9`, {
        headers: { 'X-Api-Key': newsApiKey },
      })
      if (res.ok) {
        const data = await res.json()
        const items = (data.articles || []).map((a, idx) => ({
          id: a.url || String(idx),
          title: a.title,
          image: a.urlToImage,
          excerpt: a.description,
          date: a.publishedAt?.slice(0, 10) || '',
        }))
        if (items.length) return items
      }
    } catch (_) {
      // ignore and fallback
    }
  }

  // Fallback to RSS via rss2json (no key needed, may be rate limited)
  const feeds = [
    'https://www.trthaber.com/manset_articles.rss',
    'https://www.aa.com.tr/tr/rss/default?cat=guncel',
  ]

  for (const feed of feeds) {
    try {
      const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`
      const res = await fetch(url)
      if (!res.ok) continue
      const data = await res.json()
      const items = (data.items || []).slice(0, 9).map((it, idx) => ({
        id: it.guid || it.link || String(idx),
        title: it.title,
        image: it.enclosure?.link || '',
        excerpt: it.description?.replace(/<[^>]+>/g, '').slice(0, 160),
        date: it.pubDate?.slice(0, 10) || '',
      }))
      if (items.length) return items
    } catch (_) {
      // continue to next feed
    }
  }

  // Final fallback
  return []
}



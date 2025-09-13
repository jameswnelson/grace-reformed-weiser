import { Layout } from '@/components/layout';
import { getContentBySlug, getAllContentSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const slugs = getAllContentSlugs('articles');
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    return [
      { slug: 'welcome-to-our-church' },
    ];
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getContentBySlug('articles', slug);
  
  if (!article) {
    notFound();
  }

  const htmlContent = marked(article.content);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-display font-bold text-neutral-900 mb-8">
            {article.metadata.title}
          </h1>
          
          <div className="mb-8 p-6 bg-neutral-100 rounded-lg">
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              {article.metadata.author && (
                <div>
                  <span className="font-semibold text-primary-700">Author:</span>{' '}
                  <span className="text-neutral-700">{article.metadata.author}</span>
                </div>
              )}
              {article.metadata.date && (
                <div>
                  <span className="font-semibold text-primary-700">Published:</span>{' '}
                  <span className="text-neutral-700">{article.metadata.date}</span>
                </div>
              )}
              {article.metadata.category && (
                <div>
                  <span className="font-semibold text-primary-700">Category:</span>{' '}
                  <span className="text-neutral-700">{article.metadata.category}</span>
                </div>
              )}
            </div>
            {article.metadata.tags && article.metadata.tags.length > 0 && (
              <div className="mt-4">
                <span className="font-semibold text-primary-700 text-sm">Tags:</span>{' '}
                <div className="flex flex-wrap gap-2 mt-2">
                  {article.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </Layout>
  );
}

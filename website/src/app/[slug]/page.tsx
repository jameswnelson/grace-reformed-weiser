import { Layout } from '@/components/layout';
import { getContentBySlug, getAllContentSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  // For static export, we need to return all possible slugs
  // This will be populated at build time
  try {
    const slugs = getAllContentSlugs('pages');
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    // Fallback for build time if content loading fails
    return [
      { slug: 'about' },
      { slug: 'contact' },
    ];
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getContentBySlug('pages', slug);
  
  if (!page) {
    notFound();
  }

  const htmlContent = marked(page.content);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-display font-bold text-neutral-900 mb-8">
            {page.metadata.title}
          </h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </Layout>
  );
}

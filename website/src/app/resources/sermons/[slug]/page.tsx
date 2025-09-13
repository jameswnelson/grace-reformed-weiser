import { Layout } from '@/components/layout';
import { getContentBySlug, getAllContentSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface SermonPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const slugs = getAllContentSlugs('sermons');
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    return [
      { slug: 'sample-sermon' },
    ];
  }
}

export default async function SermonPage({ params }: SermonPageProps) {
  const { slug } = await params;
  const sermon = getContentBySlug('sermons', slug);
  
  if (!sermon) {
    notFound();
  }

  const htmlContent = marked(sermon.content);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-display font-bold text-neutral-900 mb-8">
            {sermon.metadata.title}
          </h1>
          
          <div className="mb-8 p-6 bg-neutral-100 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {sermon.metadata.speaker && (
                <div>
                  <span className="font-semibold text-primary-700">Speaker:</span>{' '}
                  <span className="text-neutral-700">{sermon.metadata.speaker}</span>
                </div>
              )}
              {sermon.metadata.date && (
                <div>
                  <span className="font-semibold text-primary-700">Date:</span>{' '}
                  <span className="text-neutral-700">{sermon.metadata.date}</span>
                </div>
              )}
              {sermon.metadata.scripture && (
                <div>
                  <span className="font-semibold text-primary-700">Scripture:</span>{' '}
                  <span className="text-neutral-700">{sermon.metadata.scripture}</span>
                </div>
              )}
              {sermon.metadata.series && (
                <div>
                  <span className="font-semibold text-primary-700">Series:</span>{' '}
                  <span className="text-neutral-700">{sermon.metadata.series}</span>
                </div>
              )}
            </div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          
          {(sermon.metadata.audioUrl || sermon.metadata.videoUrl) && (
            <div className="mt-8 p-6 bg-primary-100 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-700 mb-4">Media</h3>
              <div className="flex flex-wrap gap-4">
                {sermon.metadata.audioUrl && (
                  <a
                    href={sermon.metadata.audioUrl}
                    className="inline-flex items-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                    Listen to Audio
                  </a>
                )}
                {sermon.metadata.videoUrl && (
                  <a
                    href={sermon.metadata.videoUrl}
                    className="inline-flex items-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

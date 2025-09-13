import { Layout } from '@/components/layout';
import { SermonCard } from '@/components/content';
import { getContentByType } from '@/lib/content';

export default function SermonsPage() {
  const sermons = getContentByType('sermons');

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
            Sermons
          </h1>
          <p className="text-lg text-neutral-600">
            Listen to our latest messages from God&apos;s Word
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.slug} sermon={sermon} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

import { Layout } from '@/components/layout';
import { Button, Card, CardContent, CardHeader } from '@/components/ui';
import { SermonCard, ArticleCard, EventCard } from '@/components/content';
import { getContentByType } from '@/lib/content';
import { getUpcomingEvents } from '@/lib/calendar';

export default function Home() {
  // Get sample content for demonstration
  const recentSermons = getContentByType('sermons').slice(0, 3);
  const recentArticles = getContentByType('articles').slice(0, 3);
  const upcomingEvents = getUpcomingEvents(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Welcome to Grace Reformed Church
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              A community of believers committed to the historic Christian faith and the Reformed tradition in Weiser, Idaho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Join Us This Sunday
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-700">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Service Times
            </h2>
            <p className="text-lg text-neutral-600">
              Join us for worship and fellowship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary-700">Sunday Worship</h3>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neutral-900 mb-2">10:00 AM</p>
                <p className="text-neutral-600">Main worship service with preaching and communion</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary-700">Sunday School</h3>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neutral-900 mb-2">9:00 AM</p>
                <p className="text-neutral-600">Bible study and Christian education for all ages</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary-700">Bible Study</h3>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neutral-900 mb-2">Wednesday 7:00 PM</p>
                <p className="text-neutral-600">Midweek Bible study and prayer meeting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Recent Sermons
            </h2>
            <p className="text-lg text-neutral-600">
              Listen to our latest messages from God&apos;s Word
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSermons.map((sermon) => (
              <SermonCard key={sermon.slug} sermon={sermon} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Sermons
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-neutral-600">
              Join us for fellowship and community events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-neutral-600">
              Read our latest thoughts and reflections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Visit?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We&apos;d love to welcome you to our church family. Come as you are and experience the love of Christ in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Plan Your Visit
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-700">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

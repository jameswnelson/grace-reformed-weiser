import { Layout } from '@/components/layout';
import { EventCard } from '@/components/content';
import { getUpcomingEvents } from '@/lib/calendar';

export default function EventsPage() {
  const events = getUpcomingEvents(20);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
            Events
          </h1>
          <p className="text-lg text-neutral-600">
            Join us for fellowship and community events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

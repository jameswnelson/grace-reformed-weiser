export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
  category?: string;
  allDay?: boolean;
  recurring?: boolean;
  url?: string;
}

export interface CalendarConfig {
  calendarId: string;
  apiKey: string;
  maxResults?: number;
}

// For static export, we'll use mock data initially
// In production, this would integrate with Google Calendar API
export function getUpcomingEvents(limit: number = 10): CalendarEvent[] {
  // Mock data for development
  const mockEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Sunday Worship Service',
      description: 'Join us for our weekly worship service',
      start: new Date('2024-01-21T10:00:00'),
      end: new Date('2024-01-21T11:30:00'),
      location: 'Grace Reformed Church of Weiser',
      category: 'worship',
      recurring: true,
    },
    {
      id: '2',
      title: 'Bible Study',
      description: 'Weekly Bible study group',
      start: new Date('2024-01-24T19:00:00'),
      end: new Date('2024-01-24T20:30:00'),
      location: 'Grace Reformed Church of Weiser',
      category: 'study',
      recurring: true,
    },
    {
      id: '3',
      title: 'Church Potluck',
      description: 'Monthly church potluck dinner',
      start: new Date('2024-01-28T12:00:00'),
      end: new Date('2024-01-28T14:00:00'),
      location: 'Grace Reformed Church of Weiser',
      category: 'fellowship',
    },
  ];

  return mockEvents.slice(0, limit);
}

export function getEventsByDateRange(startDate: Date, endDate: Date): CalendarEvent[] {
  const allEvents = getUpcomingEvents(50);
  
  return allEvents.filter((event) => {
    const eventStart = new Date(event.start);
    return eventStart >= startDate && eventStart <= endDate;
  });
}

export function getEventsByCategory(category: string): CalendarEvent[] {
  const allEvents = getUpcomingEvents(50);
  
  return allEvents.filter((event) => event.category === category);
}

export function getEventById(id: string): CalendarEvent | null {
  const allEvents = getUpcomingEvents(50);
  
  return allEvents.find((event) => event.id === id) || null;
}

// Future implementation for Google Calendar API integration
export async function syncWithGoogleCalendar(_config: CalendarConfig): Promise<CalendarEvent[]> {
  // This would be implemented for production use
  // For now, return mock data
  return getUpcomingEvents();
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatEventTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function isEventToday(event: CalendarEvent): boolean {
  const today = new Date();
  const eventDate = new Date(event.start);
  
  return (
    eventDate.getDate() === today.getDate() &&
    eventDate.getMonth() === today.getMonth() &&
    eventDate.getFullYear() === today.getFullYear()
  );
}

export function isEventThisWeek(event: CalendarEvent): boolean {
  const today = new Date();
  const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const eventDate = new Date(event.start);
  
  return eventDate >= today && eventDate <= weekFromNow;
}

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui';
import { formatDate, formatDateTime } from '@/lib/utils';
import { CalendarEvent } from '@/lib/calendar';

interface EventCardProps {
  event: CalendarEvent;
}

export function EventCard({ event }: EventCardProps) {
  const isAllDay = event.allDay;
  const startDate = new Date(event.start);
  const endDate = new Date(event.end);

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2">
            {event.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={event.start.toISOString()}>
                {isAllDay 
                  ? formatDate(startDate)
                  : formatDateTime(startDate)
                }
              </time>
            </div>
            {event.location && (
              <>
                <span>•</span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {event.description && (
            <p className="text-neutral-600 text-sm line-clamp-3">
              {event.description}
            </p>
          )}
          {event.category && (
            <div className="text-sm">
              <span className="font-medium text-primary-700">Category:</span>{' '}
              <span className="text-neutral-700 capitalize">{event.category}</span>
            </div>
          )}
          {!isAllDay && (
            <div className="text-sm text-neutral-600">
              <span className="font-medium">Duration:</span>{' '}
              <span>
                {startDate.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })} - {endDate.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })}
              </span>
            </div>
          )}
          {event.recurring && (
            <div className="flex items-center text-sm text-primary-700">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Recurring Event</span>
            </div>
          )}
          <div className="flex items-center justify-between pt-2">
            {event.url && (
              <Link
                href={event.url}
                className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-md hover:bg-primary-200 transition-colors"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Learn More
              </Link>
            )}
            <div className="text-sm text-neutral-500">
              {event.recurring ? 'Ongoing' : 'One-time'}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

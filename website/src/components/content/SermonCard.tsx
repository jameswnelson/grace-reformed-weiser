import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui';
import { formatDate, getReadingTime } from '@/lib/utils';
import { ContentMetadata } from '@/lib/content';

interface SermonCardProps {
  sermon: {
    slug: string;
    metadata: ContentMetadata;
    content: string;
  };
}

export function SermonCard({ sermon }: SermonCardProps) {
  const { metadata, content } = sermon;
  const readingTime = getReadingTime(content);

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2">
            <Link
              href={`/resources/sermons/${sermon.slug}`}
              className="hover:text-primary-700 transition-colors"
            >
              {metadata.title}
            </Link>
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
            {metadata.speaker && (
              <span className="font-medium">{metadata.speaker}</span>
            )}
            {metadata.date && (
              <>
                <span>•</span>
                <time dateTime={metadata.date}>
                  {formatDate(metadata.date)}
                </time>
              </>
            )}
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {metadata.scripture && (
            <div className="text-sm">
              <span className="font-medium text-primary-700">Scripture:</span>{' '}
              <span className="text-neutral-700">{metadata.scripture}</span>
            </div>
          )}
          {metadata.series && (
            <div className="text-sm">
              <span className="font-medium text-primary-700">Series:</span>{' '}
              <span className="text-neutral-700">{metadata.series}</span>
            </div>
          )}
          {metadata.summary && (
            <p className="text-neutral-600 text-sm line-clamp-3">
              {metadata.summary}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {metadata.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              {metadata.audioUrl && (
                <Link
                  href={metadata.audioUrl}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-md hover:bg-primary-200 transition-colors"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                  Audio
                </Link>
              )}
              {metadata.videoUrl && (
                <Link
                  href={metadata.videoUrl}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-md hover:bg-primary-200 transition-colors"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Video
                </Link>
              )}
            </div>
            <Link
              href={`/resources/sermons/${sermon.slug}`}
              className="text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors"
            >
              Read more →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

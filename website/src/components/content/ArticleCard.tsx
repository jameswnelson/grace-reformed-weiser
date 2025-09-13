import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui';
import { formatDate, getReadingTime } from '@/lib/utils';
import { ContentMetadata } from '@/lib/content';

interface ArticleCardProps {
  article: {
    slug: string;
    metadata: ContentMetadata;
    content: string;
  };
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { metadata, content } = article;
  const readingTime = getReadingTime(content);

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      {metadata.featuredImage && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={metadata.featuredImage}
            alt={metadata.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2">
            <Link
              href={`/resources/articles/${article.slug}`}
              className="hover:text-primary-700 transition-colors"
            >
              {metadata.title}
            </Link>
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
            {metadata.author && (
              <span className="font-medium">{metadata.author}</span>
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
          {metadata.excerpt && (
            <p className="text-neutral-600 text-sm line-clamp-3">
              {metadata.excerpt}
            </p>
          )}
          {metadata.category && (
            <div className="text-sm">
              <span className="font-medium text-primary-700">Category:</span>{' '}
              <span className="text-neutral-700">{metadata.category}</span>
            </div>
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
          <div className="pt-2">
            <Link
              href={`/resources/articles/${article.slug}`}
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

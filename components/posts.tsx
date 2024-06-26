import { formatDate, getBlogPosts } from '@/lib/utils';
import Link from 'next/link';

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4'
            href={`/blog/${post.slug}`}
          >
            <div className='w-full flex flex-col'>
              <h1 className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
                {post.metadata.title}
                <p className='text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums'>
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </h1>
              <p className='text-neutral-500 dark:text-neutral-400'>{post.metadata.summary}</p>
            </div>
            <hr />
          </Link>
        ))}
    </div>
  );
}

import { showBlog } from '@/actions/blog';
import BlogPost from '@/components/blog/BlogPost';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await showBlog({ slug });

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: blog.seo?.metaTitle ?? 'Blog Post: ' + blog.title,
    description: blog.seo?.metaDescription ?? 'A blog post about ' + blog.title,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await showBlog({ slug: slug });
  
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden pt-28 sm:pt-32 pb-20">
      <div className="max-w-full mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Subtle Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#3A4A3E] hover:text-[#20ae44] transition-colors bg-white px-4 py-2 rounded-full border border-[#121A14]/5 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#20ae44]" />
            <span>← Back to all insights</span>
          </Link>
        </div>

        {/* Blog Post Container Wrapped with Consistent Styling */}
        <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] overflow-hidden">
          <BlogPost
            post={{
              ...post,
              publishedAt: post.publishedAt ?? null,
              updatedAt: post.updatedAt ?? null,
              author: { name: post.author.name ?? null, image: post.author.image ?? null },
              categories: Array.isArray(post.categories) ? post.categories.map((cat) => cat.name) : [],
              seo: {
                metaTitle: post.seo?.metaTitle ?? null,
                metaDescription: post.seo?.metaDescription ?? null,
                keywords: post.seo?.keywords ?? [],
              },
            }}
          />
        </div>

      </div>
    </main>
  );
}
import { getBlogs } from "@/actions/blog";
import Blogs from "@/components/blog/Blogs";
import { Metadata } from "next";
import { Sparkles, ArrowRight, Rss } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://arkinorganics.com"),
  title: "Insights & Field Notes | Arkin Organics",
  description:
    "Perspectives on regenerative agriculture, biological fertilizers, and sustainable cultivation.",
};

export default async function Page() {
  const blogs = await getBlogs();

  const formattedBlogs = (blogs || []).map((blog) => ({
    ...blog,
    publishedAt: blog.publishedAt || "",
    updatedAt: blog.updatedAt || "",
  }));

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-medium selection:bg-[#839756]/20">
      {/* Compact Million-Dollar Editorial Hero */}
      <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-[#121A14]/8 bg-linear-to-b from-[#839756]/4 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Metadata Row */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#121A14]/6 text-xs font-medium text-[#121A14]/50">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#839756]" />
              <span className="text-[#121A14]/80 tracking-wide uppercase">Arkin Field Notes</span>
              <span className="text-[#121A14]/30">/</span>
              <span>Volume 01</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-4">
              <span>{formattedBlogs.length} Articles Published</span>
              <span className="text-[#121A14]/20">•</span>
              <span className="flex items-center gap-1 hover:text-[#839756] transition-colors cursor-pointer">
                <Rss className="w-3 h-3 text-[#839756]" />
                <span>RSS Feed</span>
              </span>
            </div>
          </div>

          {/* Compact Headline + Subtitle Grid */}
          <div className="pt-8 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#839756]/10 text-[#839756] text-[11px] font-medium tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Editorial & Research</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#121A14] leading-[1.2]">
                Perspectives on regenerative soil science and living agriculture.
              </h1>
            </div>

            <div className="lg:col-span-5 space-y-4 lg:pl-6 lg:border-l lg:border-[#121A14]/8">
              <p className="text-sm sm:text-base font-medium text-[#121A14]/65 leading-relaxed">
                Essays, field trial notes, and practical guides curated for modern organic growers and agricultural pioneers.
              </p>
              
              <div className="flex items-center gap-2 text-xs font-medium text-[#839756] hover:text-[#6d7e44] transition-colors cursor-pointer group">
                <span>Browse peer-reviewed whitepapers</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Blogs blogs={formattedBlogs} />
      </section>
    </main>
  );
}
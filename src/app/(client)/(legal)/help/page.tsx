import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Help & Support | Arkin Organics",
  description: "Need assistance? Visit Arkin Organics Help Center for answers to frequently asked questions, support resources, and customer service contact information.",
};

// SVG for a subtle background pattern in the hero section
const SubtleWavesSVG = () => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-8" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="wave-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.005 0.001" numOctaves="1" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feBlend mode="multiply" in="SourceGraphic" />
      </filter>
    </defs>
    <rect width="100" height="100" fill="#F8FDF9" filter="url(#wave-grain)" />
  </svg>
);

// SVG for a generic article placeholder icon
const ArticleIconSVG = () => (
  <svg className="h-6 w-6 text-[#20ae44] group-hover:text-[#1b963a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// SVG for a generic category icon
const CategoryIconSVG = () => (
  <svg className="h-8 w-8 text-[#20ae44] mb-3 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const App = () => {
  // Placeholder data for popular articles
  const popularArticles = [
    { id: 1, title: 'Getting Started with Arkin Organic Fertilizers', snippet: 'A comprehensive guide to help you begin your journey with our sustainable products.' },
    { id: 2, title: 'Understanding Soil Health & Nutrients', snippet: 'Learn how Arkin products contribute to a thriving soil microbiome.' },
    { id: 3, title: 'Seasonal Application Guide for Fertilizers', snippet: 'Best practices for applying our organic fertilizers throughout the year.' },
    { id: 4, title: 'Troubleshooting Common Plant Growth Issues', snippet: 'Solutions for enhancing plant vigor and overcoming growth challenges.' },
  ];

  // Placeholder data for support categories
  const categories = [
    { id: 1, name: 'Product Usage', description: 'Guides on how to use Arkin fertilizers effectively.' },
    { id: 2, name: 'Order & Shipping', description: 'Information regarding your purchases and delivery.' },
    { id: 3, name: 'Account Management', description: 'Help with your Arkin account settings and preferences.' },
    { id: 4, name: 'Sustainability & Values', description: 'Learn about our commitment to eco-friendly practices.' },
    { id: 5, name: 'Technical Support', description: 'Assistance with website or app functionalities.' },
    { id: 6, name: 'Partnerships & Wholesale', description: 'Information for businesses and bulk orders.' },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans antialiased text-[#121A14] selection:bg-[#FDBA21] selection:text-black">
      {/* Hero Section: Search & Welcome */}
      <section className="relative overflow-hidden bg-white py-28 md:py-36 border-b border-[#121A14]/5">
        <SubtleWavesSVG />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#121A14] mb-6 leading-tight tracking-tight">
            How Can We Help You?
          </h1>
          <p className="text-base md:text-xl font-medium text-[#3A4A3E] max-w-2xl mx-auto mb-10">
            Find answers to your questions, explore guides, and get the support you need.
          </p>
          <div className="relative max-w-xl mx-auto shadow-[0_4px_24px_-6px_rgba(18,26,20,0.06)] rounded-2xl overflow-hidden border border-[#E8EDE9]">
            <input
              type="text"
              placeholder="Search for articles or topics..."
              className="w-full pl-6 pr-16 py-4 text-base md:text-lg bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] text-[#121A14] placeholder-[#3A4A3E]/60 transition-all duration-200"
            />
            <button aria-label="Search articles" className="absolute right-0 top-0 h-full w-16 bg-[#20ae44] text-white flex items-center justify-center rounded-r-2xl hover:bg-[#1b963a] transition-colors duration-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-16 md:py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#121A14] mb-12 text-center tracking-tight">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {popularArticles.map((article) => (
              <a 
                key={article.id} 
                href="#"
                className="group flex flex-col p-6 sm:p-8 bg-white rounded-3xl shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] border border-[#121A14]/5 hover:shadow-md hover:border-[#20ae44]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#20ae44]/10 rounded-2xl border border-[#20ae44]/20">
                    <ArticleIconSVG />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-[#121A14] ml-4 group-hover:text-[#20ae44] transition-colors">
                    {article.title}
                  </h3>
                </div>
                <p className="text-[#3A4A3E] font-medium leading-relaxed text-sm sm:text-base">
                  {article.snippet}
                </p>
                <span className="text-[#20ae44] mt-6 self-start text-xs sm:text-sm font-semibold flex items-center gap-1.5 group-hover:underline">
                  Read More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-white border-t border-[#121A14]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#121A14] mb-12 text-center tracking-tight">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <a 
                key={category.id} 
                href="#"
                className="group p-6 sm:p-8 bg-[#FAF9F6] rounded-3xl shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] border border-[#121A14]/5 text-center hover:shadow-md hover:border-[#20ae44]/30 hover:bg-[#20ae44] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex p-3.5 bg-white rounded-2xl shadow-xs border border-[#E8EDE9] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 mb-4">
                  <CategoryIconSVG />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-[#121A14] mb-2 group-hover:text-white transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-[#3A4A3E] font-medium text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 md:py-24 bg-white border-t border-[#121A14]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-[#20ae44] to-[#178534] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute -top-32 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight leading-tight">
                Still Need Assistance?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium mb-8 leading-relaxed">
                Our dedicated support team is here to help. Reach out directly for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact-us"
                  className="px-8 py-3.5 bg-white text-[#20ae44] rounded-full text-xs sm:text-sm font-semibold shadow-md hover:bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Contact Our Support
                </a>
                <a 
                  href="/support"
                  className="px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-full text-xs sm:text-sm font-semibold shadow-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Visit Our Knowledge Base
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
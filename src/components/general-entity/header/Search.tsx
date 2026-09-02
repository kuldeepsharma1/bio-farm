'use client';

import { SearchResult } from '@/types';
import {
  BookOpen,
  FileText,
  Folder,
  Hash,
  Package,
  Search,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState, useTransition } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const POPULAR_SEARCHES = [
  { label: 'Organic Fertilizers', category: 'Products' },
  { label: 'Soil Health Guide', category: 'Guides' },
  { label: 'Sustainable Yield Tips', category: 'Articles' },
  { label: 'Certification Standards', category: 'About' },
];

export default function SearchBar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMac, setIsMac] = useState(true);

  const router = useRouter();
  const [, startTransition] = useTransition();

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setMounted(true);
      setIsMac(
        typeof window !== 'undefined' &&
          /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
      );
    }, 0);
    return () => clearTimeout(initTimer);
  }, []);

  // Global Shortcut (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Custom handler for dialog open state to prevent synchronous useEffect updates
  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Delay clearing state so the closing animation remains smooth
      setTimeout(() => {
        setQuery('');
        setResults([]);
      }, 300);
    }
  }, []);

  // Debounced Search API Logic
  useEffect(() => {
    const controller = new AbortController();
    
    const handler = setTimeout(async () => {
      // Handled inside the timeout to avoid ESLint 'set-state-in-effect' warning
      if (!query.trim()) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query.trim())}`,
          { signal: controller.signal }
        );
        
        if (!res.ok) throw new Error('Search failed');
        const data: SearchResult[] = await res.json();

        // Fallback filter
        const filtered = data.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description?.toLowerCase().includes(query.toLowerCase()) ||
            item.url.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Search error:', err);
        }
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => {
      clearTimeout(handler);
      controller.abort();
    };
  }, [query]);

  // Group results for Shadcn's CommandGroup
  const groupedResults = useMemo(() => {
    const groups: { [key: string]: SearchResult[] } = {};
    results.forEach((item) => {
      const cat = item.category || 'General';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });
    return groups;
  }, [results]);

  const handleSelect = useCallback(
    (url: string) => {
      setIsOpen(false);
      startTransition(() => {
        router.push(url);
      });
    },
    [router]
  );

  const getCategoryIcon = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'products':
        return <Package className="mr-3 h-4 w-4 shrink-0 text-[#6B7280]" />;
      case 'guides':
        return <BookOpen className="mr-3 h-4 w-4 shrink-0 text-[#6B7280]" />;
      case 'articles':
        return <FileText className="mr-3 h-4 w-4 shrink-0 text-[#6B7280]" />;
      default:
        return <Folder className="mr-3 h-4 w-4 shrink-0 text-[#6B7280]" />;
    }
  };

  // Prevent SSR mismatch
  if (!mounted) {
    return <div className="h-10 w-10 md:w-64 rounded-full bg-gray-100 animate-pulse" />;
  }

  return (
    <>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center justify-center md:justify-between gap-2 p-2 md:px-4 md:py-2.5 rounded-xl md:rounded-full md:border md:border-[#E5E7EB] bg-transparent md:bg-white text-sm text-[#6B7280] md:shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:bg-gray-100 md:hover:border-[#D1D5DB] md:hover:bg-[#F9FAFB] active:scale-[0.97]"
        aria-label="Open Search"
      >
        <div className="flex items-center gap-2.5">
          {/* Larger, darker icon for mobile / Lighter, smaller icon for desktop */}
          <Search 
            className="h-5 w-5 md:h-4.5 md:w-4.5 shrink-0 text-[#121A14] md:text-[#9CA3AF] transition-colors group-hover:text-[#111827] md:group-hover:text-[#6B7280]" 
            strokeWidth={2.2} 
          />
          <span className="hidden md:inline-block font-medium text-[#111827]">Search Products...</span>
        </div>
        
        <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded-md border border-[#E5E7EB] bg-white px-2 font-sans text-[11px] font-semibold text-[#111827] shadow-sm sm:flex">
          {isMac ? '⌘' : 'Ctrl'} K
        </kbd>
      </button>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent 
          className="overflow-hidden ring-0  p-0 shadow-2xl sm:max-w-160 sm:rounded-[20px] bg-[#FAF9F6]   gap-0 [&>button]:hidden duration-300 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        >
          <DialogTitle className="sr-only">Search Arkin Documentation</DialogTitle>
          
          <Command className="w-full bg-transparent">
            {/* Input Header Area */}
            <div className="relative border-b border-[#E5E7EB] bg-white">
              <CommandInput
                placeholder="Search products, guides, certifications..."
                value={query}
                onValueChange={setQuery}
                className="h-14 text-[15px] font-medium placeholder:text-[#9CA3AF] placeholder:font-normal pr-12 transition-all"
              />
              {/* Custom Close Button */}
              <button 
                onClick={() => handleOpenChange(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-[#9CA3AF] hover:bg-gray-100 cursor-pointer hover:text-[#4B5563] transition-colors active:scale-95"
                aria-label="Close search"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
            
            <CommandList className="max-h-[60vh] sm:max-h-120 p-2 scroll-smooth">
              {/* Premium Skeleton Loading UI */}
              {isLoading && (
                <div className="space-y-2 p-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex w-full items-center gap-3.5 rounded px-3 py-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                        <div className="h-4 w-4 rounded-sm bg-gray-200 animate-pulse" />
                      </div>
                      <div className="flex-1 space-y-2.5">
                        <div className="h-3.5 w-1/3 rounded-md bg-gray-200 animate-pulse" />
                        <div className="h-2.5 w-2/3 rounded-md bg-gray-100 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Empty State */}
              {!isLoading && query && results.length === 0 && (
                <CommandEmpty className="py-14 text-center text-[14px]">
                  No results found for <span className="font-medium text-[#111827]">&quot;{query}&quot;</span>.
                </CommandEmpty>
              )}

              {/* Default State: Popular Searches */}
              {!isLoading && !query && (
                <CommandGroup heading="Popular Searches" className="text-[#9CA3AF]">
                  {POPULAR_SEARCHES.map((sug) => (
                    <CommandItem
                      key={sug.label}
                      value={sug.label}
                      onSelect={(currentValue) => setQuery(currentValue)}
                      className="cursor-pointer rounded-md hover:rounded-lg py-3 aria-selected:bg-white aria-selected:shadow-sm transition-all duration-200"
                    >
                      <Hash className="mr-3 h-4.5 w-4.5 text-[#6B7280]" />
                      <span className="text-[14.5px] font-medium text-[#111827]">{sug.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {/* Search Results */}
              {!isLoading && Object.entries(groupedResults).map(([category, items]) => (
                <CommandGroup key={category} heading={category} className="mb-2 text-[#9CA3AF]">
                  {items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.title} ${item.description || ''}`}
                      onSelect={() => handleSelect(item.url)}
                      className="cursor-pointer aria-selected:rounded-lg hover:rounded-lg py-3 mb-1 aria-selected:bg-white aria-selected:shadow-sm transition-all duration-200"
                    >
                      {getCategoryIcon(item.category)}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[14.5px] font-medium text-[#111827] truncate">{item.title}</span>
                        {item.description && (
                          <span className="text-[12.5px] text-[#6B7280] line-clamp-1 mt-0.5">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            
            {/* Desktop Footer Guidelines */}
            <div className="hidden sm:flex shrink-0 items-center justify-end border-t border-[#E5E7EB] bg-transparent px-4 py-3">
              <div className="flex items-center gap-4 text-[12px] text-[#6B7280]">
                <span className="flex items-center gap-1.5">
                  <kbd className="flex h-5.5 items-center justify-center rounded border border-[#E5E7EB] bg-white px-1.5 font-sans font-medium text-[#111827] shadow-sm">
                    ↑↓
                  </kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="flex h-5.5 items-center justify-center rounded border border-[#E5E7EB] bg-white px-1.5 font-sans font-medium text-[#111827] shadow-sm">
                    ↵
                  </kbd>
                  to select
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="flex h-5.5 items-center justify-center rounded border border-[#E5E7EB] bg-white px-1.5 font-sans font-medium text-[#111827] shadow-sm">
                    esc
                  </kbd>
                  to close
                </span>
              </div>
            </div>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
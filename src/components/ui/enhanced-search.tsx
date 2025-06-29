import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'popular' | 'suggestion';
}

interface GlobalSearchProps {
  className?: string;
  onSearch?: (query: string) => void;
}

const GlobalSearch = ({ className, onSearch }: GlobalSearchProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Popular search terms
  const popularSearches = [
    'whey protein',
    'creatine',
    'mass gainer',
    'omega 3',
    'pre workout',
    'protein powder'
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('trustified-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
      }
    }
  }, []);

  // Generate suggestions based on query
  useEffect(() => {
    if (!query.trim()) {
      const recentSuggestions: SearchSuggestion[] = recentSearches.slice(0, 3).map(search => ({
        id: `recent-${search}`,
        text: search,
        type: 'recent'
      }));
      
      const popularSuggestions: SearchSuggestion[] = popularSearches.slice(0, 3).map(search => ({
        id: `popular-${search}`,
        text: search,
        type: 'popular'
      }));

      setSuggestions([...recentSuggestions, ...popularSuggestions]);
      return;
    }

    // Filter suggestions based on query
    const filtered = popularSearches
      .filter(search => search.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)
      .map(search => ({
        id: `suggestion-${search}`,
        text: search,
        type: 'suggestion' as const
      }));

    setSuggestions(filtered);
  }, [query, recentSearches]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;

    // Save to recent searches
    const updatedRecent = [trimmedQuery, ...recentSearches.filter(s => s !== trimmedQuery)].slice(0, 5);
    setRecentSearches(updatedRecent);
    localStorage.setItem('trustified-recent-searches', JSON.stringify(updatedRecent));

    // Navigate to search results
    navigate(`/passandfail?search=${encodeURIComponent(trimmedQuery)}`);
    setIsOpen(false);
    setQuery('');
    
    if (onSearch) {
      onSearch(trimmedQuery);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    handleSearch(suggestion.text);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('trustified-recent-searches');
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'recent':
        return <Clock className="h-4 w-4 text-gray-400" />;
      case 'popular':
        return <TrendingUp className="h-4 w-4 text-gray-400" />;
      default:
        return <Search className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div ref={searchRef} className={cn("relative w-full max-w-md", className)}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch(query);
            }
            if (e.key === 'Escape') {
              setIsOpen(false);
              inputRef.current?.blur();
            }
          }}
          placeholder="Search products..."
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
          style={{ minHeight: '44px' }} // Ensure 44px touch target
          aria-label="Search products"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            aria-label="Clear search"
            style={{ minWidth: '44px', minHeight: '44px' }} // Ensure 44px touch target
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {suggestions.length > 0 ? (
            <div className="py-2">
              {/* Recent Searches Header */}
              {recentSearches.length > 0 && !query && (
                <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Recent Searches</span>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1"
                    style={{ minHeight: '32px' }} // Smaller but still accessible
                  >
                    Clear
                  </button>
                </div>
              )}

              {/* Suggestions List */}
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center gap-3 transition-colors"
                  style={{ minHeight: '44px' }} // Ensure 44px touch target
                >
                  {getSuggestionIcon(suggestion.type)}
                  <span className="text-gray-900">{suggestion.text}</span>
                  {suggestion.type === 'popular' && (
                    <span className="ml-auto text-xs text-gray-500">Popular</span>
                  )}
                </button>
              ))}

              {/* Popular Searches Header */}
              {!query && recentSearches.length > 0 && suggestions.some(s => s.type === 'popular') && (
                <div className="px-4 py-2 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Popular Searches</span>
                </div>
              )}
            </div>
          ) : query ? (
            <div className="px-4 py-8 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No suggestions found</p>
              <Button
                onClick={() => handleSearch(query)}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm"
                style={{ minHeight: '44px' }}
              >
                Search for "{query}"
              </Button>
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Start typing to search products</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
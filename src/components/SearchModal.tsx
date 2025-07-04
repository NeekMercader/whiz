import React, { useState, useEffect, useRef } from 'react'
import { Search, X, FileText, Folder, ExternalLink } from 'lucide-react'
import { performGlobalSearch, SearchResult } from '../lib/search'
import { BlogPost } from '../services/strapi'
import { Link } from 'react-router-dom'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{
    blog: SearchResult<BlogPost>[]
    portfolio: any[]
    pages: any[]
  }>({ blog: [], portfolio: [], pages: [] })
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleSearch = async () => {
      if (query.trim().length < 2) {
        setResults({ blog: [], portfolio: [], pages: [] })
        return
      }

      setLoading(true)
      try {
        const searchResults = await performGlobalSearch(query)
        setResults(searchResults)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setLoading(false)
      }
    }

    const debounceTimer = setTimeout(handleSearch, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  const hasResults = results.blog.length > 0 || results.portfolio.length > 0 || results.pages.length > 0

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        
        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center border-b border-gray-200 p-4">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search blog posts, pages, and more..."
              className="flex-1 text-lg outline-none"
            />
            <button
              onClick={onClose}
              className="ml-3 p-1 hover:bg-gray-100 rounded"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {loading && (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Searching...</p>
              </div>
            )}

            {!loading && query.trim().length >= 2 && !hasResults && (
              <div className="p-8 text-center">
                <p className="text-gray-600">No results found for "{query}"</p>
              </div>
            )}

            {!loading && hasResults && (
              <div className="p-4 space-y-6">
                {/* Blog Posts */}
                {results.blog.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Blog Posts
                    </h3>
                    <div className="space-y-2">
                      {results.blog.slice(0, 3).map((result) => (
                        <Link
                          key={result.item.id}
                          to={`/blog/${result.item.attributes.slug}`}
                          onClick={onClose}
                          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="font-medium text-gray-900">
                            {result.item.attributes.title}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {result.item.attributes.excerpt}
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            {result.item.attributes.category} • {result.item.attributes.readTime}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pages */}
                {results.pages.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <Folder className="h-4 w-4 mr-2" />
                      Pages
                    </h3>
                    <div className="space-y-2">
                      {results.pages.slice(0, 3).map((page, index) => (
                        <Link
                          key={index}
                          to={page.url}
                          onClick={onClose}
                          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="font-medium text-gray-900 flex items-center">
                            {page.title}
                            <ExternalLink className="h-3 w-3 ml-2 text-gray-400" />
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {page.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {query.trim().length < 2 && (
              <div className="p-8 text-center">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Start typing to search...</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3 text-xs text-gray-500 text-center">
            Press <kbd className="px-1 py-0.5 bg-gray-100 rounded">Esc</kbd> to close
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
'use client'

import { useState, useMemo } from 'react'
import ArtistCard from '@/components/ArtistCard'
import FilterSection from '@/components/FilterSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Grid, List } from 'lucide-react'
import { mockArtists, categories, locations, feeRanges } from '@/lib/data'
import { FilterOptions } from '@/types/artist'

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    location: [],
    priceRange: []
  })

  // Filter and search logic
  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist) => {
      // Search filter
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artist.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))

      // Category filter
      const matchesCategory = filters.category.length === 0 || 
                             filters.category.some(cat => artist.category.includes(cat))

      // Location filter  
      const matchesLocation = filters.location.length === 0 ||
                             filters.location.includes(artist.location)

      // Price range filter
      const matchesPrice = filters.priceRange.length === 0 ||
                          filters.priceRange.includes(artist.feeRange)

      return matchesSearch && matchesCategory && matchesLocation && matchesPrice
    })
  }, [searchTerm, filters])

  const handleQuoteRequest = (artistId: string) => {
    const artist = mockArtists.find(a => a.id === artistId)
    alert(`Quote request sent to ${artist?.name}! They will contact you soon.`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Artists</h1>
          <p className="text-gray-600 mb-6">
            Discover talented performers for your next event
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search artists, categories, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <FilterSection
                categories={categories}
                locations={locations}
                priceRanges={feeRanges}
                selectedFilters={filters}
                onFilterChange={setFilters}
              />
            </div>
          </div>

          {/* Artists Grid/List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredArtists.length} artist{filteredArtists.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No artists found matching your criteria</p>
                <Button onClick={() => {
                  setSearchTerm('')
                  setFilters({ category: [], location: [], priceRange: [] })
                }}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {filteredArtists.map((artist) => (
                  <div key={artist.id} className={viewMode === 'list' ? 'max-w-none' : ''}>
                    <ArtistCard
                      artist={artist}
                      onQuoteRequest={handleQuoteRequest}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
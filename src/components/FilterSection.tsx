'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface FilterSectionProps {
  categories: string[]
  locations: string[]
  priceRanges: string[]
  selectedFilters: {
    category: string[]
    location: string[]
    priceRange: string[]
  }
  onFilterChange: (filters: any) => void
}

const FilterSection = ({
  categories,
  locations,
  priceRanges,
  selectedFilters,
  onFilterChange
}: FilterSectionProps) => {
  const handleCategoryChange = (category: string) => {
    const updated = selectedFilters.category.includes(category)
      ? selectedFilters.category.filter(c => c !== category)
      : [...selectedFilters.category, category]
    
    onFilterChange({
      ...selectedFilters,
      category: updated
    })
  }

  const handleLocationChange = (location: string) => {
    const updated = selectedFilters.location.includes(location)
      ? selectedFilters.location.filter(l => l !== location)
      : [...selectedFilters.location, location]
    
    onFilterChange({
      ...selectedFilters,
      location: updated
    })
  }

  const handlePriceChange = (price: string) => {
    const updated = selectedFilters.priceRange.includes(price)
      ? selectedFilters.priceRange.filter(p => p !== price)
      : [...selectedFilters.priceRange, price]
    
    onFilterChange({
      ...selectedFilters,
      priceRange: updated
    })
  }

  const clearAllFilters = () => {
    onFilterChange({
      category: [],
      location: [],
      priceRange: []
    })
  }

  const hasActiveFilters = selectedFilters.category.length > 0 || 
                          selectedFilters.location.length > 0 || 
                          selectedFilters.priceRange.length > 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Filters</CardTitle>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={clearAllFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <h3 className="font-medium mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <h3 className="font-medium mb-3">Location</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.location.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((price) => (
              <label key={price} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.priceRange.includes(price)}
                  onChange={() => handlePriceChange(price)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">{price}</span>
              </label>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FilterSection

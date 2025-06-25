import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Clock } from 'lucide-react'
import { Artist } from '@/types/artist'

interface ArtistCardProps {
  artist: Artist
  onQuoteRequest?: (artistId: string) => void
}

const ArtistCard = ({ artist, onQuoteRequest }: ArtistCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={artist.image || 'https://via.placeholder.com/400x300'}
          alt={artist.name}
          fill
          className="object-cover"
        />
        {!artist.availability && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
            Unavailable
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{artist.name}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={14} />
          <span>{artist.location}</span>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {artist.category.map((cat) => (
            <span
              key={cat}
              className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {artist.bio}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{artist.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{artist.experience}</span>
          </div>
        </div>
        
        <div className="mt-2">
          <span className="font-semibold text-green-600">{artist.feeRange}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={() => onQuoteRequest?.(artist.id)}
          disabled={!artist.availability}
        >
          {artist.availability ? 'Ask for Quote' : 'Currently Unavailable'}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ArtistCard
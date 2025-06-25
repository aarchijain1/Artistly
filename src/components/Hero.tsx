import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search, Users } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Perfect Artists for Your Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connect with talented performers and book them for your special occasions. 
            From singers to speakers, we have the right artist for every event.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/artists">
                <Search className="w-5 h-5 mr-2" />
                Browse Artists
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/onboarding">
                <Users className="w-5 h-5 mr-2" />
                Join as Artist
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-80">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-sm opacity-80">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


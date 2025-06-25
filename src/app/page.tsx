// ===== app/page.tsx =====
import Hero from '@/components/Hero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Music, Mic, Users, Zap } from 'lucide-react'

const categories = [
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Singers',
    description: 'Professional vocalists for all genres and events',
    count: '150+ Artists'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Dancers',
    description: 'Choreographers and performers for every style',
    count: '120+ Artists'
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: 'Speakers',
    description: 'Motivational and keynote speakers',
    count: '80+ Artists'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'DJs',
    description: 'Professional DJs for parties and events',
    count: '100+ Artists'
  }
]

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Artist Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover talented performers across various categories. 
              Find the perfect match for your event needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit text-purple-600">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <p className="text-sm font-medium text-purple-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/artists">View All Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to book your perfect artist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Artists</h3>
              <p className="text-gray-600">
                Explore our curated list of talented performers across various categories
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request Quote</h3>
              <p className="text-gray-600">
                Contact artists directly and request quotes for your specific event needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Enjoy</h3>
              <p className="text-gray-600">
                Finalize the booking and enjoy an amazing performance at your event
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Eye } from "lucide-react";
import { Button } from "./ui/button";

const collections = [
  {
    id: 1,
    title: "Ethereal Elegance",
    brand: "Chanel",
    season: "Spring 2024",
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY29sbGVjdGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NTc4NTAzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pieces: 24,
    trending: true
  },
  {
    id: 2,
    title: "Urban Renaissance",
    brand: "Prada",
    season: "Fall 2024",
    image: "https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc4MDAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pieces: 18,
    trending: false
  },
  {
    id: 3,
    title: "Minimalist Luxe",
    brand: "The Row",
    season: "Resort 2024",
    image: "https://images.unsplash.com/photo-1603567364858-8e3362d9f040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzU3ODQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pieces: 15,
    trending: true
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Curated Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked luxury collections from the world's most prestigious fashion houses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {collection.trending && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Trending
                  </Badge>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground">{collection.brand}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{collection.season}</span>
                    <span>•</span>
                    <span>{collection.pieces} pieces</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
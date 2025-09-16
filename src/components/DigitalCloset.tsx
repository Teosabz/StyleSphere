import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Share2, Trash2, Plus, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const savedOutfits = [
  {
    id: 1,
    name: "Evening Elegance",
    items: 3,
    image: "https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc4MDAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Formal", "Date Night"],
    saved: "2 days ago"
  },
  {
    id: 2,
    name: "Business Chic",
    items: 4,
    image: "https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhmYXNoaW9uJTIwd2VlayUyMHJ1bndheSUyMHNob3d8ZW58MXx8fHwxNzU3ODUwMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Work", "Professional"],
    saved: "1 week ago"
  },
  {
    id: 3,
    name: "Weekend Luxe",
    items: 5,
    image: "https://images.unsplash.com/photo-1603567364858-8e3362d9f040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzU3ODQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Casual", "Weekend"],
    saved: "3 days ago"
  }
];

const wishlistItems = [
  {
    id: 1,
    name: "Silk Evening Gown",
    brand: "Valentino",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc4MDAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    inStock: true
  },
  {
    id: 2,
    name: "Designer Handbag",
    brand: "Chanel",
    price: "$5,400",
    image: "https://images.unsplash.com/photo-1603567364858-8e3362d9f040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzU3ODQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    inStock: false
  }
];

export function DigitalCloset() {
  return (
    <section id="closet" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Digital Closet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organize your favorite looks and create wishlist of luxury pieces you love.
          </p>
        </div>

        <Tabs defaultValue="outfits" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="outfits">Saved Outfits</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>

          <TabsContent value="outfits">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-semibold">Saved Outfits</h3>
                <p className="text-sm text-muted-foreground">{savedOutfits.length} outfits saved</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Outfit
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedOutfits.map((outfit) => (
                <Card key={outfit.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={outfit.image}
                      alt={outfit.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h4 className="text-white font-semibold mb-1">{outfit.name}</h4>
                      <p className="text-white/80 text-sm">{outfit.items} items</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {outfit.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">Saved {outfit.saved}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-semibold">Wishlist</h3>
                <p className="text-sm text-muted-foreground">{wishlistItems.length} items in wishlist</p>
              </div>
              
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Brand
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {!item.inStock && (
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                        Out of Stock
                      </Badge>
                    )}
                    
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="absolute top-3 right-3 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-1 line-clamp-2">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.brand}</p>
                    <p className="font-semibold">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
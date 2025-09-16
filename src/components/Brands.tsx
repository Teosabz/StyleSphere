import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const brands = [
  {
    id: 1,
    name: "Chanel",
    description: "Timeless elegance and French sophistication",
    image: "https://images.unsplash.com/photo-1694452243736-2b9c00d001b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzU3ODUwMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    collections: 8
  },
  {
    id: 2,
    name: "Prada",
    description: "Innovative design meets Italian craftsmanship",
    image: "https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhmYXNoaW9uJTIwd2VlayUyMHJ1bndheSUyMHNob3d8ZW58MXx8fHwxNzU3ODUwMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    collections: 6
  },
  {
    id: 3,
    name: "Valentino",
    description: "Romantic glamour and artistic vision",
    image: "https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc4MDAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    collections: 5
  },
  {
    id: 4,
    name: "The Row",
    description: "Minimalist luxury and refined aesthetics",
    image: "https://images.unsplash.com/photo-1603567364858-8e3362d9f040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzU3ODQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    collections: 4
  }
];

export function Brands() {
  return (
    <section id="brands" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Brands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore collections from the most prestigious luxury fashion houses around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.id} className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {brand.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {brand.collections} Collections Available
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
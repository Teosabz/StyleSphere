import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1742540676779-b49c3406be26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBydW53YXl8ZW58MXx8fHwxNzU3ODUwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury fashion model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Style Sphere
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Curated luxury collections, runway trends, and exclusive fashion events. 
            Your premium style destination awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore Collections
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Runway Trends
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
          <p className="text-sm font-medium">Latest Collection</p>
          <p className="text-xs opacity-75">Spring/Summer 2024</p>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
          <p className="text-sm font-medium">Featured Designer</p>
          <p className="text-xs opacity-75">Valentino</p>
        </div>
      </div>
    </section>
  );
}
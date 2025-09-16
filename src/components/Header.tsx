import { Menu, Search, Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">StyleSphere</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#collections" className="text-foreground hover:text-muted-foreground transition-colors">
              Collections
            </a>
            <a href="#brands" className="text-foreground hover:text-muted-foreground transition-colors">
              Brands
            </a>
            <a href="#runway" className="text-foreground hover:text-muted-foreground transition-colors">
              Runway
            </a>
            <a href="#closet" className="text-foreground hover:text-muted-foreground transition-colors">
              My Closet
            </a>
            <a href="#events" className="text-foreground hover:text-muted-foreground transition-colors">
              Events
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md ml-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search luxury fashion..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <Heart className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
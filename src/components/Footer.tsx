import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Stay in Style</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive fashion insights, runway trends, and luxury collection previews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-primary-foreground/20" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">StyleSphere</h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Your premier destination for luxury fashion discovery, curated collections, and runway trends from the world's most prestigious fashion houses.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h5 className="font-semibold mb-4">Explore</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#collections" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#brands" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Luxury Brands
                </a>
              </li>
              <li>
                <a href="#runway" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Runway Trends
                </a>
              </li>
              <li>
                <a href="#closet" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Digital Closet
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fashion Events
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Personal Styling
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  VIP Access
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Style Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Exclusive Previews
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fashion Week Access
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="text-primary-foreground/80 mb-4 md:mb-0">
            © 2024 StyleSphere. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-primary-foreground/80">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
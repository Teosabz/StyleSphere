import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Chanel Spring Preview",
    description: "Exclusive preview of Chanel's Spring 2025 collection with intimate runway show",
    image: "https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhmYXNoaW9uJTIwd2VlayUyMHJ1bndheSUyMHNob3d8ZW58MXx8fHwxNzU3ODUwMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "March 25, 2024",
    time: "7:00 PM",
    location: "Grand Palais, Paris",
    attendees: 150,
    category: "Runway Show",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Luxury Fashion Summit",
    description: "Industry leaders discuss sustainability and innovation in luxury fashion",
    image: "https://images.unsplash.com/photo-1694452243736-2b9c00d001b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzU3ODUwMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "April 10, 2024",
    time: "9:00 AM",
    location: "Milan Design District",
    attendees: 300,
    category: "Conference",
    status: "Registration Open"
  },
  {
    id: 3,
    title: "Prada Archive Exhibition",
    description: "Retrospective exhibition showcasing 50 years of Prada's design evolution",
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY29sbGVjdGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NTc4NTAzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "May 5 - June 30, 2024",
    time: "10:00 AM - 8:00 PM",
    location: "Fondazione Prada, Milan",
    attendees: 500,
    category: "Exhibition",
    status: "Live"
  }
];

const upcomingEvents = [
  {
    title: "Valentino Haute Couture",
    date: "April 15",
    location: "Rome"
  },
  {
    title: "Met Gala 2024",
    date: "May 6",
    location: "New York"
  },
  {
    title: "Venice Biennale Fashion",
    date: "May 20",
    location: "Venice"
  }
];

export function FashionEvents() {
  return (
    <section id="events" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fashion Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Attend exclusive fashion events, runway shows, and exhibitions from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <Badge 
                  className={`absolute top-4 left-4 ${
                    event.status === 'Live' ? 'bg-green-500 text-white' :
                    event.status === 'Upcoming' ? 'bg-primary text-primary-foreground' :
                    'bg-orange-500 text-white'
                  }`}
                >
                  {event.status}
                </Badge>
                
                <Badge variant="secondary" className="absolute top-4 right-4">
                  {event.category}
                </Badge>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <Button className="w-full">
                  {event.status === 'Live' ? 'View Details' : 'Register Interest'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Events Calendar */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{event.title}</h4>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button variant="outline">
              View Full Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
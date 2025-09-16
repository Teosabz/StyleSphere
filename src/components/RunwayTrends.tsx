import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Calendar, MapPin } from "lucide-react";

const trends = [
  {
    id: 1,
    title: "Oversized Blazers",
    description: "Power dressing returns with structured shoulders and bold silhouettes",
    image: "https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhmYXNoaW9uJTIwd2VlayUyMHJ1bndheSUyMHNob3d8ZW58MXx8fHwxNzU3ODUwMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popularity: "Hot",
    season: "Fall 2024"
  },
  {
    id: 2,
    title: "Metallic Accents",
    description: "Shimmer and shine dominate evening wear collections",
    image: "https://images.unsplash.com/photo-1742540676779-b49c3406be26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBydW53YXl8ZW58MXx8fHwxNzU3ODUwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popularity: "Rising",
    season: "Spring 2024"
  },
  {
    id: 3,
    title: "Sustainable Luxury",
    description: "Eco-conscious materials meet high-end fashion",
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY29sbGVjdGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NTc4NTAzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popularity: "New",
    season: "Resort 2024"
  }
];

const runwayShows = [
  {
    title: "Paris Fashion Week",
    date: "March 2024",
    location: "Paris, France",
    status: "Upcoming"
  },
  {
    title: "Milan Fashion Week",
    date: "February 2024",
    location: "Milan, Italy",
    status: "Live"
  },
  {
    title: "New York Fashion Week",
    date: "February 2024",
    location: "New York, USA",
    status: "Completed"
  }
];

export function RunwayTrends() {
  return (
    <section id="runway" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Runway Trends</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with the latest trends from international fashion weeks.
          </p>
        </div>

        {/* Trending Now */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Trending Now</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend) => (
              <Card key={trend.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={trend.image}
                    alt={trend.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      trend.popularity === 'Hot' ? 'bg-destructive text-destructive-foreground' :
                      trend.popularity === 'Rising' ? 'bg-orange-500 text-white' :
                      'bg-green-500 text-white'
                    }`}
                  >
                    {trend.popularity}
                  </Badge>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs mb-1 opacity-90">{trend.season}</p>
                    <h4 className="text-lg font-semibold mb-2">{trend.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{trend.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fashion Week Calendar */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Fashion Week Calendar</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {runwayShows.map((show, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{show.title}</CardTitle>
                    <Badge 
                      variant={show.status === 'Live' ? 'destructive' : 
                              show.status === 'Upcoming' ? 'default' : 'secondary'}
                    >
                      {show.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{show.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{show.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              View Full Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
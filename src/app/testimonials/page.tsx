import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Heart, Award, Users, Quote, Calendar } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    surgery: "Knee Replacement",
    quote: "Vikas and his team helped me regain my mobility after knee surgery. Their personalized approach and constant encouragement made all the difference. I'm back to hiking and enjoying life again!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    surgery: "Hip Surgery",
    quote: "After my hip replacement, I was worried I'd never play with my grandchildren again. Vikas's program was exactly what I needed. Professional, patient, and incredibly effective.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    surgery: "Shoulder Reconstruction",
    quote: "The recovery process was challenging, but Vikas made it manageable. His expertise in post-surgical rehabilitation helped me return to tennis much faster than expected.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    surgery: "Spinal Surgery",
    quote: "Vikas understood my specific needs after spinal surgery. The program was tailored perfectly, and the results exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Park",
    surgery: "ACL Reconstruction",
    quote: "As an athlete, getting back to my sport was crucial. Vikas's evidence-based approach and sports-specific training got me back on the field stronger than before.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Wilson",
    surgery: "Rotator Cuff Repair",
    quote: "The pain management techniques and progressive strengthening program were exactly what I needed. Vikas's knowledge of shoulder rehabilitation is outstanding.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-accent fill-current" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/testimonials-hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <Heart className="inline-block w-16 h-16 text-accent animate-float mb-4 gold-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-slide-up">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Hear from our clients who have successfully recovered and returned to their active lifestyles
            with the help of our specialized post-surgery fitness programs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="animate-fade-in">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-lg text-muted-foreground">Average Rating</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg text-muted-foreground">Return to Activity</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg text-muted-foreground">Years of Success</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="h-full royal-shadow hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-accent/20 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-accent/30" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-accent">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-primary text-center">{testimonial.name}</h3>
                    <p className="text-sm text-accent font-semibold text-center">{testimonial.surgery}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic leading-relaxed text-center">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto royal-shadow bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">Ready for Your Success Story?</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Join hundreds of clients who have transformed their recovery journey with our expert guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg royal-shadow gold-glow" asChild>
                    <Link href="/contact">
                      <Calendar className="w-5 h-5 mr-2" />
                      Start Your Journey
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-accent/30 text-primary hover:bg-accent/10 px-8 py-4 text-lg glass-effect royal-shadow" asChild>
                    <Link href="/trainers">
                      <Users className="w-5 h-5 mr-2" />
                      Meet Our Trainers
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
    </div>
  );
}
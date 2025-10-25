import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Star, CheckCircle, Calendar, Trophy, Heart, Activity } from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "Vikas Rathi",
    title: "Lead Recovery Specialist",
    certifications: ["CSCS", "FMS", "PRT"],
    experience: "8+ years",
    specialties: ["Post-Surgical Rehabilitation", "Sports Medicine", "Injury Prevention"],
    bio: "Vikas specializes in post-surgical rehabilitation with over 8 years of experience helping clients recover from major surgeries. His evidence-based approach combines the latest research with personalized care.",
    image: "/api/placeholder/300/300",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    title: "Sports Medicine Specialist",
    certifications: ["MD", "CSCS", "ACSM"],
    experience: "12+ years",
    specialties: ["Orthopedic Rehabilitation", "Sports Injuries", "Performance Enhancement"],
    bio: "Dr. Sharma brings medical expertise combined with fitness training. She works closely with surgeons and physical therapists to ensure optimal recovery outcomes.",
    image: "/api/placeholder/300/300",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    title: "Strength & Conditioning Coach",
    certifications: ["CSCS", "USAW", "FMS"],
    experience: "10+ years",
    specialties: ["Progressive Loading", "Functional Movement", "Athletic Performance"],
    bio: "Marcus focuses on building strength and function through progressive training methods. His programs are designed to safely rebuild capabilities lost during recovery.",
    image: "/api/placeholder/300/300",
  },
  {
    id: 4,
    name: "Sarah Chen",
    title: "Movement Specialist",
    certifications: ["FMS", "SFMA", "Yoga Alliance"],
    experience: "6+ years",
    specialties: ["Mobility Training", "Balance & Stability", "Mind-Body Connection"],
    bio: "Sarah integrates movement therapy with traditional rehabilitation techniques. Her holistic approach addresses both physical and mental aspects of recovery.",
    image: "/api/placeholder/300/300",
  },
];

export default function Trainers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/trainers-hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <Users className="inline-block w-16 h-16 text-accent animate-float mb-4 gold-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-slide-up">
            Meet Our Expert Trainers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Our certified professionals specialize in post-surgical rehabilitation and recovery.
            Each trainer brings unique expertise to help you achieve your recovery goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="animate-fade-in">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg text-muted-foreground">Certified Trainers</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg text-muted-foreground">Certifications</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Success Rate</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Activity className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trainers.map((trainer, index) => (
              <Card key={trainer.id} className="overflow-hidden royal-shadow hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-accent/20 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={`/images/trainer-${trainer.id}.jpg`}
                      alt={trainer.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {trainer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-primary mb-2">{trainer.name}</CardTitle>
                      <CardDescription className="text-accent font-semibold text-lg">
                        {trainer.title}
                      </CardDescription>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-accent fill-current" />
                          <span className="text-sm font-medium">{trainer.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium">{trainer.certifications.length} Certifications</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="font-semibold text-sm text-primary">Certifications:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {trainer.certifications.map((cert, certIndex) => (
                              <span
                                key={certIndex}
                                className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium border border-accent/20"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-primary">Specialties:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {trainer.specialties.map((specialty, specIndex) => (
                              <span
                                key={specIndex}
                                className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {trainer.bio}
                      </p>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full" asChild>
                        <Link href={`/contact?trainer=${trainer.id}`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Session
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto royal-shadow bg-card/50 backdrop-blur-sm border-accent/20">
            <CardHeader>
              <CardTitle className="text-3xl text-primary mb-4">Ready to Work with Our Team?</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Our trainers will assess your specific needs and create a personalized recovery program
                tailored to your surgery type, current condition, and recovery goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg royal-shadow gold-glow" asChild>
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-accent/30 text-primary hover:bg-accent/10 px-8 py-4 text-lg glass-effect royal-shadow" asChild>
                  <Link href="/testimonials">
                    <Star className="w-5 h-5 mr-2" />
                    Read Success Stories
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
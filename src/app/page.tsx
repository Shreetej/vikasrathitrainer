import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Shield, Star, Play, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative hero-gradient py-32 px-6 md:px-8 lg:px-12 overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F59E0B&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-6">
                <Star className="inline-block w-16 h-16 text-accent animate-float mb-4 gold-glow" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-slide-up">
                Post-Surgery Fitness Recovery
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto lg:mx-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
                Professional fitness training tailored for your recovery journey.
                Get back to your active lifestyle with personalized programs designed by experienced trainers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.4s'}}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg royal-shadow gold-glow" asChild>
                  <Link href="/contact">Start Your Recovery</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-accent/30 text-primary hover:bg-accent/10 px-8 py-4 text-lg glass-effect royal-shadow" asChild>
                  <Link href="/trainers">Meet Our Trainers</Link>
                </Button>
              </div>

              {/* Video Play Button */}
              <div className="mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <button className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 text-primary hover:bg-accent/10 transition-all duration-300 royal-shadow">
                  <Play className="w-6 h-6 text-accent" />
                  <span>Watch Success Stories</span>
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <img
                  src="/images/hero-trainer.jpg"
                  alt="Professional fitness trainer helping client with post-surgery recovery"
                  className="w-full h-auto rounded-2xl royal-shadow"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent/10 backdrop-blur-sm rounded-full p-4 royal-shadow">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 royal-shadow">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Successful Recoveries</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Vikas Rathore Trainer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our personalized approach to post-surgical recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Certified Expertise</h3>
              <p className="text-muted-foreground">
                Internationally certified with specialized training in post-surgical rehabilitation and sports medicine.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Personalized Care</h3>
              <p className="text-muted-foreground">
                Every recovery plan is tailored to your specific surgery, medical history, and personal goals.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successful recoveries with measurable improvements in mobility and strength.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Safe & Effective</h3>
              <p className="text-muted-foreground">
                Evidence-based techniques ensuring your safety while maximizing recovery outcomes.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Modern Facilities</h3>
              <p className="text-muted-foreground">
                State-of-the-art equipment and recovery tools designed for optimal rehabilitation results.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Continuous guidance and adjustments to your program as you progress through recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real people who have transformed their lives through our recovery programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 royal-shadow animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">S</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Knee Replacement Surgery</div>
                </div>
              </div>
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Vikas helped me regain my mobility faster than I ever imagined. His personalized approach made all the difference in my recovery."
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 royal-shadow animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">M</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Shoulder Surgery</div>
                </div>
              </div>
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Professional, knowledgeable, and truly cares about his clients' success. I couldn't have asked for a better trainer."
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 royal-shadow animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">R</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Rachel Martinez</div>
                  <div className="text-sm text-muted-foreground">Hip Replacement Surgery</div>
                </div>
              </div>
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "The results speak for themselves. I'm back to my active lifestyle thanks to Vikas's expert guidance and support."
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-accent/30 text-primary hover:bg-accent/10 px-8 py-4 text-lg glass-effect royal-shadow" asChild>
              <Link href="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Award className="inline-block w-12 h-12 text-accent mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Recovery Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive fitness solutions designed by certified professionals for optimal recovery
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden royal-shadow">
                <video
                  className="w-full h-auto"
                  poster="/images/video-poster.jpg"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/recovery-process.mp4" type="video/mp4" />
                  <source src="/videos/recovery-process.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Our Recovery Process</h3>
                  <p className="text-sm opacity-90">See how we transform lives through personalized training</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="royal-shadow hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <img
                    src="/images/pre-surgery.jpg"
                    alt="Pre-surgery preparation training"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Activity className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl md:text-xl md:text-2xl text-accent">Pre-Surgery Preparation</CardTitle>
                <CardDescription className="text-base">
                  Build strength and flexibility before your procedure for better recovery outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Strength assessment</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Mobility training</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Breathing exercises</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Mental preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="royal-shadow hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <img
                    src="/images/post-surgery.jpg"
                    alt="Post-surgery rehabilitation training"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl text-accent">Post-Surgery Rehabilitation</CardTitle>
                <CardDescription className="text-base">
                  Gentle, progressive exercises to restore function and build strength safely.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Phase-based recovery</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Pain management</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Range of motion</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Progressive loading</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="royal-shadow hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <img
                    src="/images/wellness.jpg"
                    alt="Long-term wellness and maintenance training"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl text-accent">Long-term Wellness</CardTitle>
                <CardDescription className="text-base">
                  Maintain your gains and prevent future injuries with ongoing fitness support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Maintenance programs</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Injury prevention</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Lifestyle coaching</li>
                  <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Progress tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <Star className="inline-block w-12 h-12 text-accent animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Our experienced trainers specialize in post-surgical rehabilitation.
            Contact us today to discuss your specific needs and create a personalized recovery plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 text-lg royal-shadow transform hover:scale-105 transition-all duration-300 gold-glow" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg backdrop-blur-sm glass-effect royal-shadow" asChild>
              <Link href="/testimonials">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

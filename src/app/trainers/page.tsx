import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const trainers = [
  {
    id: 1,
    name: "Vikas Rathore",
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
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Expert Trainers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified professionals specialize in post-surgical rehabilitation and recovery.
            Each trainer brings unique expertise to help you achieve your recovery goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {trainer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-primary">{trainer.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {trainer.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="font-medium text-sm">Experience:</span>
                        <span className="text-sm text-muted-foreground ml-2">{trainer.experience}</span>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Certifications:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {trainer.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Specialties:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {trainer.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="text-xs bg-chart-5/10 text-chart-5 px-2 py-1 rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {trainer.bio}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Ready to Work with Our Team?</CardTitle>
              <CardDescription className="text-lg">
                Our trainers will assess your specific needs and create a personalized recovery program
                tailored to your surgery type, current condition, and recovery goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/testimonials">Read Success Stories</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
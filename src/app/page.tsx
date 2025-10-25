import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Post-Surgery Fitness Recovery
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional fitness training tailored for your recovery journey.
            Get back to your active lifestyle with personalized programs designed by experienced trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Recovery</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/trainers">Meet Our Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Recovery Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Pre-Surgery Preparation</CardTitle>
                <CardDescription>
                  Build strength and flexibility before your procedure for better recovery outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Strength assessment</li>
                  <li>• Mobility training</li>
                  <li>• Breathing exercises</li>
                  <li>• Mental preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Post-Surgery Rehabilitation</CardTitle>
                <CardDescription>
                  Gentle, progressive exercises to restore function and build strength safely.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Phase-based recovery</li>
                  <li>• Pain management</li>
                  <li>• Range of motion</li>
                  <li>• Progressive loading</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Long-term Wellness</CardTitle>
                <CardDescription>
                  Maintain your gains and prevent future injuries with ongoing fitness support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Maintenance programs</li>
                  <li>• Injury prevention</li>
                  <li>• Lifestyle coaching</li>
                  <li>• Progress tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experienced trainers specialize in post-surgical rehabilitation.
            Contact us today to discuss your specific needs and create a personalized recovery plan.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

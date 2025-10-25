import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? "text-chart-5" : "text-muted"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our clients who have successfully recovered and returned to their active lifestyles
            with the help of our specialized post-surgery fitness programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <StarRating rating={testimonial.rating} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-accent font-medium">{testimonial.surgery}</p>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Ready for Your Success Story?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join hundreds of clients who have transformed their recovery journey with our expert guidance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
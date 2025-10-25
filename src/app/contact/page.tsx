"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    surgeryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          surgeryType: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <MessageSquare className="inline-block w-16 h-16 text-accent animate-float mb-4 gold-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Ready to start your recovery journey? Get in touch with our expert trainers.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 px-4 bg-gradient-to-r from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@vikasrathoretrainer.com</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Fitness Recovery Center</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">Hours</h3>
              <p className="text-muted-foreground">Mon-Sat: 6AM-8PM</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="surgeryType" className="block text-sm font-medium mb-2">
                    Type of Surgery/Condition
                  </label>
                  <Input
                    id="surgeryType"
                    name="surgeryType"
                    type="text"
                    value={formData.surgeryType}
                    onChange={handleChange}
                    placeholder="e.g., Knee replacement, Hip surgery, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your recovery goals and any specific concerns..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground royal-shadow gold-glow py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <p className="text-red-800 font-medium">Failed to send message. Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team of recovery specialists.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-2">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Email</h3>
                  <p className="text-muted-foreground">info@vikasrathoretrainer.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Fitness Recovery Center<br />
                    Health District<br />
                    City, State 12345
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Certified post-surgical rehabilitation specialists
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Personalized recovery programs
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Evidence-based training methods
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Ongoing support and progress tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Flexible scheduling and virtual options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
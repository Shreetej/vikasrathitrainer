import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Rathi Trainer - Post-Surgery Fitness Recovery",
  description: "Professional fitness training for post-surgery recovery. Get back to your best self with personalized training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-secondary/30 border-t border-border/50 py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">V</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Vikas Rathore Trainer</h3>
                    <p className="text-sm text-muted-foreground">Fitness Recovery Specialist</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Professional post-surgery fitness recovery training. Helping you regain strength,
                  mobility, and confidence through personalized rehabilitation programs.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>📧</span>
                    <span>info@vikasrathoretrainer.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>📱</span>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/trainers" className="hover:text-accent transition-colors">Our Trainers</a></li>
                  <li><a href="/testimonials" className="hover:text-accent transition-colors">Success Stories</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Pre-Surgery Preparation</li>
                  <li>Post-Surgery Rehabilitation</li>
                  <li>Long-term Wellness</li>
                  <li>Personal Training</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Vikas Rathore Trainer. All rights reserved. | Designed for optimal recovery.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

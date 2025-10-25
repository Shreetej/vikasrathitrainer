"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Award, Home, Users, Star, Mail, Phone, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 glass-effect royal-shadow">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 md:space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-bold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block leading-tight">
              Vikas Rathi
            </span>
            <span className="text-xs text-muted-foreground hidden md:block">Fitness Recovery Specialist</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background/50 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/10 data-[state=open]:bg-accent/10 royal-shadow-sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/trainers" className="group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background/50 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/10 data-[state=open]:bg-accent/10 royal-shadow-sm">
                  <Users className="w-4 h-4 mr-2" />
                  Our Trainers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/testimonials" className="group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background/50 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/10 data-[state=open]:bg-accent/10 royal-shadow-sm">
                  <Star className="w-4 h-4 mr-2" />
                  Success Stories
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="group inline-flex h-12 w-max items-center justify-center rounded-lg bg-background/50 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/10 data-[state=open]:bg-accent/10 royal-shadow-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Phone Number - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-2 text-sm">
            <Phone className="w-4 h-4 text-accent" />
            <span className="font-medium text-primary">+91 98765 43210</span>
          </div>

          {/* CTA Button - Smaller on mobile */}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground royal-shadow gold-glow px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold" asChild>
            <Link href="/contact">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book</span>
            </Link>
          </Button>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur border-t border-white/10">
          <div className="container py-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-5 h-5 mr-3 text-accent" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                href="/trainers"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-5 h-5 mr-3 text-accent" />
                <span className="font-medium">Our Trainers</span>
              </Link>
              <Link
                href="/testimonials"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Star className="w-5 h-5 mr-3 text-accent" />
                <span className="font-medium">Success Stories</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span className="font-medium">Contact Us</span>
              </Link>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 px-4 py-2 text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="font-medium text-primary">+91 98765 43210</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
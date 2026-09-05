"use client";

import Link from 'next/link';
import {
  Code, Menu, Home, Briefcase, GraduationCap,
  Folder, Users, Trophy, Star, MessageSquare, Mail
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import React, { useState } from 'react';

import Image from 'next/image';

const routes = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#my-work", label: "Projects", icon: Folder },
  { href: "#leadership", label: "Leadership", icon: Users },
  { href: "#achievements", label: "Achievements", icon: Trophy },
  { href: "#why-hire-me", label: "Why Hire Me", icon: Star },
  { href: "#testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 md:w-64 md:h-screen bg-background/95 backdrop-blur-md border-b md:border-b-0 md:border-r border-border z-50 flex flex-row md:flex-col justify-between items-center md:items-stretch py-3 md:py-6 px-4 md:px-5 transition-all duration-300">

      {/* Desktop Branded Layout */}
      <Link href="/" className="flex items-center justify-start gap-3 w-full group md:mb-6 px-1 md:px-2">
        <Image src="/about.png" alt="Sunny Kumar" width={40} height={40} className="rounded-full object-cover shadow-sm border border-border group-hover:scale-105 transition-transform hidden md:block" />
        <span className="font-headline font-bold text-lg hidden md:block group-hover:text-primary transition-colors text-left flex-1 whitespace-nowrap">Sunny Kumar</span>

        {/* Mobile branding block */}
        <Image src="/about.png" alt="Sunny Kumar" width={32} height={32} className="rounded-full object-cover shadow-sm border border-border md:hidden" />
        <span className="font-headline font-bold text-lg md:hidden text-left flex-1 whitespace-nowrap">Sunny Kumar</span>
      </Link>

      <nav className="hidden md:flex flex-col gap-2 flex-1 w-full justify-center px-1">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.label}
              href={route.href}
              className="flex items-center gap-3 text-sm font-semibold text-muted-foreground transition-all hover:text-primary hover:bg-muted/60 w-full py-2.5 px-3 rounded-lg text-left"
            >
              <Icon className="h-[18px] w-[18px]" />
              <span>{route.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle & Controls */}
      <div className="flex items-center gap-4 md:flex-col md:mt-auto md:w-full md:border-t md:border-border md:pt-4 md:items-start px-2">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] flex flex-col p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Link href="/" className="mb-8 flex items-center gap-3 font-headline text-xl font-bold" onClick={() => setIsOpen(false)}>
              <Image src="/about.png" alt="Sunny Kumar" width={40} height={40} className="rounded-full object-cover" />
              Sunny
            </Link>
            <nav className="flex flex-col gap-5 overflow-y-auto pb-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

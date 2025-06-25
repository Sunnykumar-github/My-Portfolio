"use client";

import Link from 'next/link';
import { Code, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const routes = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Work Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#my-work', label: 'My Work' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-500',
        hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <Code className="h-6 w-6 text-primary" />
          <span>Sunny Kumar</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2 font-headline text-xl font-bold" onClick={() => setIsOpen(false)}>
                  <Code className="h-6 w-6 text-primary" />
                  Sunny Kumar
                </Link>
                <nav className="flex flex-col gap-4">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

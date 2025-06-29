
"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { AnimatedOnScroll } from './animated-on-scroll';

const projects = [
  {
    id: 1,
    title: 'QuickFlix',
    description: 'A full-stack Movie Ticket Booking website built with MongoDB, Express, React.js, and Node.js featuring Clerk for authentication, Inngest for background workflows, and Stripe integration for secure online payments.',
    longDescription: 'Developed a full-stack Movie Ticket Booking website using the MERN stack (MongoDB, Express, React, Node.js). Integrated Clerk for user authentication, Inngest for background jobs, and Stripe for secure payment processing. The platform allows users to browse movies, select seats, and complete bookings with a seamless and responsive UI.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Clerk', 'UI/UX', 'Stripe', 'Inngest', 'Figma'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: 'movie tickets'
  },
  {
    id: 2,
    title: 'BIT Cycles Rental',
    description: 'A responsive web app for on-campus bicycle rentals with a streamlined booking system, mobile-first UI, and real-time form validation',
    longDescription: 'Designed and built a responsive web app for on-campus bicycle rentals at ₹50/day. Features include a streamlined booking system, mobile-first UI, and real-time form validation. Enabled over 100 rentals till now with fast load times and intuitive user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Clerk', 'UI/UX', 'Stripe', 'Inngest', 'Web App'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: 'cycle rental'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A sleek, modern portfolio built with Next.js, React, and Tailwind CSS. It features smooth animations, a dark mode theme, and an interactive project showcase, all wrapped in a fully responsive design.',
    longDescription: 'This portfolio is a dynamic, responsive website designed to showcase my skills. Built with Next.js and React, it leverages Tailwind CSS for styling and ShadCN for UI components. It includes features like a dark mode toggle, smooth on-scroll animations, and an interactive project showcase, demonstrating a modern approach to web development and design.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'UI/UX', 'Web App'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: 'portfolio website'
  },
];

const allTags = ['All', 'Web App', 'Mobile', 'UI/UX', 'Backend', 'Next.js', 'React', 'Tailwind CSS'];

export function ProjectShowcase() {
    const [selectedTag, setSelectedTag] = useState('All');

    const filteredProjects = useMemo(() => {
        if (selectedTag === 'All') {
            return projects;
        }
        return projects.filter(project => project.tags.includes(selectedTag));
    }, [selectedTag]);

    return (
        <div>
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={selectedTag === tag ? 'default' : 'secondary'}
                        onClick={() => setSelectedTag(tag)}
                        className="rounded-full"
                    >
                        {tag}
                    </Button>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-12">
                {filteredProjects.map((project, index) => (
                    <AnimatedOnScroll
                        key={project.id}
                        classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
                        classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <Dialog>
                            <Card 
                                className="group grid grid-cols-1 md:grid-cols-5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="md:col-span-3 flex flex-col p-6 justify-between">
                                    <div>
                                        <CardHeader className="p-0">
                                            <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                                            <CardDescription>{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0 mt-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </div>
                                    <CardFooter className="p-0 pt-6">
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="w-full">
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </DialogTrigger>
                                    </CardFooter>
                                </div>
                                <div className="md:col-span-2 relative h-60 md:h-full min-h-[250px]">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={project.hint}
                                    />
                                </div>
                            </Card>

                            <DialogContent className="sm:max-w-[625px]">
                                <DialogHeader>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                    <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                                    <DialogDescription>{project.longDescription}</DialogDescription>
                                </DialogHeader>
                                <div className="relative my-4 h-64 w-full rounded-md overflow-hidden">
                                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={project.hint} />
                                </div>
                                <div className="flex gap-4">
                                    <Button asChild className="flex-1">
                                        <Link href={project.liveUrl} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </Button>
                                    <Button asChild variant="secondary" className="flex-1">
                                        <Link href={project.sourceUrl} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Source Code
                                        </Link>
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </AnimatedOnScroll>
                ))}
            </div>
        </div>
    );
}

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
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with a custom CMS and payment integration.',
    longDescription: 'Developed a scalable e-commerce platform from scratch using Next.js for the frontend and Node.js for the backend API. Integrated Stripe for secure payments and created a custom CMS for easy product management. The platform is fully responsive and optimized for performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'Backend', 'UI/UX'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: "online store"
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A sleek and intuitive mobile app for organizing tasks and boosting productivity.',
    longDescription: 'Designed and built a cross-platform mobile app using React Native. Features include drag-and-drop task reordering, push notifications, and collaboration tools. Focused on creating a seamless and engaging user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Mobile', 'UI/UX'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: "task management"
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets in real-time.',
    longDescription: 'Created a powerful data visualization tool using D3.js and React. The dashboard allows users to explore large datasets through interactive charts and graphs. The backend is powered by a Python/Flask API that processes and serves the data.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'Backend'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: "data dashboard"
  },
  {
    id: 4,
    title: 'Company Landing Page',
    description: 'A modern and professional landing page for a tech startup.',
    longDescription: 'Designed and developed a pixel-perfect landing page to showcase a startup\'s product. Implemented with a focus on SEO, performance, and conversion rate optimization. Used modern CSS techniques for a clean and engaging layout.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web App', 'UI/UX'],
    liveUrl: '#',
    sourceUrl: '#',
    hint: "tech startup"
  },
];

const allTags = ['All', 'Web App', 'Mobile', 'UI/UX', 'Backend'];

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
                                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={project.hint}/>
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

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Briefcase, LineChart, Cpu } from "lucide-react";

const valueProps = [
    {
        title: "Operational Execution & Team Leadership",
        description: "I understand what it takes to manage real-world operations and distributed teams. At Urban Company, I directed daily operations across 60+ retail stores and managed a 60-member field promoter team to consistently achieve sales targets. When manual reporting slowed us down, I engineered automated workflows using Google Apps Script and built a custom Lead Management System, significantly reducing installation turnaround times. I also apply an entrepreneurial lens to operations, having founded BIT Cycles to build a student-sourced rental platform that generated Rs. 20,000 in revenue.",
        icon: <Briefcase className="h-10 w-10 text-primary mb-4" />
    },
    {
        title: "Data-Backed Decision Making & KPI Tracking",
        description: "I turn raw information into clear, actionable business strategies. During my time as a Project Intern at Fractal Analytics, I built 10+ Power BI dashboards tracking over 50 KPIs for a North American beverage client, and optimized SQL queries across datasets of 100K+ rows to reduce reporting turnaround time by 30%. Furthermore, while managing the Salon category for Urban Company in Pune, I owned the KPI reporting and increased service fulfillment rates by redesigning regional hub-to-order assignment logic.",
        icon: <LineChart className="h-10 w-10 text-primary mb-4" />
    },
    {
        title: "First-Principles Problem Solving & RCA",
        description: "My engineering background has wired me to break down massive, complex problems into logical steps. Whether I am designing and performing finite element analysis on a 1.5m-diameter head expander for an ISRO spacecraft shaker system, or conducting root cause analysis (RCA) on customer escalations to overhaul response protocols, I approach every challenge systematically. At Fractal Analytics, conducting RCA on 50+ business queries allowed me to deliver data-backed recommendations that measurably drove sales growth.",
        icon: <Cpu className="h-10 w-10 text-primary mb-4" />
    }
];

export function WhyHireMeSection() {
    return (
        <section id="why-hire-me" className="w-full bg-background py-20 md:py-32 overflow-hidden border-t">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedOnScroll
                    classNameIn="animate-in fade-in duration-1000"
                    classNameOut="animate-out fade-out duration-1000 opacity-0"
                    className="mb-12 text-center"
                >
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 font-semibold uppercase tracking-wider">
                        Value Proposition
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Why Hire Me
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        The distinct advantages I bring to dynamic engineering teams.
                    </p>
                </AnimatedOnScroll>

                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                    {valueProps.map((prop, index) => (
                        <AnimatedOnScroll
                            key={index}
                            classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-700"
                            classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-700 opacity-0"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <Card className="h-full bg-card hover:bg-card/50 transition-colors duration-300 border-none shadow-lg">
                                <CardHeader>
                                    <div className="flex justify-center">
                                        {prop.icon}
                                    </div>
                                    <CardTitle className="text-center font-headline text-xl mt-4">{prop.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground leading-relaxed">
                                        {prop.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>
        </section >
    );
}

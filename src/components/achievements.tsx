"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Trophy } from "lucide-react";

const achievements = [
    {
        title: "State Rank 5",
        organization: "National Science Olympiad (NSO)",
        description: "Secured 5th Rank in State at the National Science Olympiad 2018."
    },
    {
        title: "State Rank 11",
        organization: "Hindustan Olympiad (Class X)",
        description: "Secured 11th Rank at the State Level in Hindustan Olympiad (Class X)."
    }
];

export function AchievementsSection() {
    return (
        <section id="achievements" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedOnScroll
                    classNameIn="animate-in fade-in duration-1000"
                    classNameOut="animate-out fade-out duration-1000 opacity-0"
                    className="mb-12 text-center"
                >
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Achievements
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Milestones of excellence and external recognition.
                    </p>
                </AnimatedOnScroll>

                <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {achievements.map((achieve, index) => (
                        <AnimatedOnScroll
                            key={index}
                            classNameIn="animate-in fade-in zoom-in-95 duration-700"
                            classNameOut="animate-out fade-out zoom-out-95"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Card className="h-full border-none bg-background/50 backdrop-blur transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <CardHeader className="pb-2">
                                    <Trophy className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle className="font-headline text-lg">{achieve.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="font-semibold text-secondary mb-2 text-sm">{achieve.organization}</h4>
                                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                                        {achieve.description}
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

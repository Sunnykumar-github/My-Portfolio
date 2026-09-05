"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Samaksh Sharma",
        role: "Senior Manager, Urban Company - NATIVE Modern Trade",
        image: "/Samaksh%20Sharma.jpg",
        text: "An absolute force multiplier on any team. The precision in his technical execution is matched only by the clarity of his strategic thinking. Sunny has a rare ability to dive into complex operational chaos and engineer robust, elegantly simple solutions that drive overall business momentum."
    },
    {
        name: "Pratik Parakh",
        role: "General Manager, Urban Company - NATIVE Modern Trade",
        image: "/Pratik%20Parakh.jpg",
        text: "Sunny possesses a rare ability to bridge the gap between hardcore software engineering and high-level business strategy. His technical leadership didn't just optimize our immediate operations; it fundamentally elevated our team culture and reshaped how we continuously approach scale and execution."
    },
    {
        name: "Ritik Kumar",
        role: "Category Manager, Urban Company - Product Business",
        image: "/Ritik%20Kumar.png",
        text: "A remarkably adaptable problem solver. Whether tackling intricate backend pipelines, steering cross-functional collaboration, or shipping critical features on tight deadlines, Sunny operates with immense ownership. He consistently delivers foundational tools that empower the entire product category."
    },
    {
        name: "Komal Rathour",
        role: "Category Manager, Urban Company - Product Business",
        image: "/Komal%20Rathour.jpg",
        text: "A powerhouse of efficiency and technical rigor. Sunny instinctively anticipates edge cases, aligns perfectly with overarching product goals, and delivers scalable infrastructure that never compromises on quality. He is paramount in driving measurable growth across core business metrics."
    },
    {
        name: "Jitendra Kumar Mandal",
        role: "Decision Analytics Associate, ZS Associates",
        image: "/Jitendra%20Kumar%20Mandal.jpg",
        text: "Incredibly sharp, reliable, and deeply committed to excellence. Sunny’s command over modern engineering practices sets a high benchmark for everyone around him. He brings incredible clarity to ambiguous projects and accelerates team velocity at every level."
    },
    {
        name: "Himanshu Kumar",
        role: "R & I Engineer, Adrosonic",
        image: "/Himanshu%20Kumar.jpg",
        text: "Sunny seamlessly balances deep technical mastery with an innate drive for innovation. His architectural foresight is remarkable—always building for reliability and scale. You can count on him to remain calm under pressure and consistently deliver brilliant software under the most demanding timelines."
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full bg-secondary/50 py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedOnScroll
                    classNameIn="animate-in fade-in duration-1000"
                    classNameOut="animate-out fade-out duration-1000 opacity-0"
                    className="mb-12 text-center"
                >
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                        Voices of Collaboration
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Insights from peers, mentors, and leaders on the impact of analytical rigor paired with strategic vision.
                    </p>
                </AnimatedOnScroll>

                <AnimatedOnScroll
                    classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
                    classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
                >
                    <div className="relative flex overflow-hidden w-full max-w-[100vw]">
                        <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-secondary/70 via-secondary/20 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-secondary/70 via-secondary/20 to-transparent z-10 pointer-events-none"></div>

                        <div className="flex w-max animate-marquee gap-8 py-8 px-4 hover:animate-marquee-paused focus-within:animate-marquee-paused transition-transform">
                            {[...testimonials, ...testimonials].map((test, index) => (
                                <div key={index} className="w-[320px] md:w-[480px] shrink-0">
                                    <Card className="h-full bg-background border border-border/40 shadow-xl hover:border-primary/50 transition-colors">
                                        <CardContent className="p-8 flex flex-col justify-between h-full">
                                            <Quote className="h-10 w-10 text-primary/20 mb-6 shrink-0" />
                                            <p className="text-[17px] italic text-foreground/90 mb-8 leading-relaxed">
                                                "{test.text}"
                                            </p>
                                            <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                                                <div className="flex items-center gap-4">
                                                    <Image src={test.image} alt={test.name} width={48} height={48} className="rounded-full object-cover border border-border/50 shadow-sm w-12 h-12" />
                                                    <div>
                                                        <h4 className="font-semibold text-foreground">{test.name}</h4>
                                                        <p className="text-sm text-primary">{test.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedOnScroll>
            </div>
        </section >
    );
}

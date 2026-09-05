"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { CheckCircle } from "lucide-react";

const certifications = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services (AWS)",
        date: "2023",
        description: "Demonstrates knowledge of how to architect and deploy secure and robust applications on AWS technologies.",
        tags: ["Cloud Architecture", "Security", "Compute"]
    },
    {
        title: "Deep Learning Specialization",
        issuer: "Coursera / DeepLearning.AI",
        date: "2022",
        description: "Comprehensive five-course program covering neural networks, hyperparameter tuning, convolutional networks, and sequence models.",
        tags: ["Neural Networks", "TensorFlow", "CNNs & RNNs"]
    }
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="w-full bg-background py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedOnScroll
                    classNameIn="animate-in fade-in duration-1000"
                    classNameOut="animate-out fade-out duration-1000 opacity-0"
                    className="mb-12 text-center"
                >
                    <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground mb-4">
                        Verified Credentials
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Professional Certifications
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        A chronological overview of specialized professional certifications.
                    </p>
                </AnimatedOnScroll>

                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    {certifications.map((cert, index) => (
                        <AnimatedOnScroll
                            key={index}
                            classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
                            classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
                            style={{ animationDelay: `${index * 150}ms` }}
            >
                    <Card className="h-full flex flex-col border-primary/20 bg-secondary/30 backdrop-blur transition-all duration-300 hover:shadow-primary/10 hover:shadow-xl">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CheckCircle className="h-8 w-8 text-primary" />
                                <Badge variant="outline">{cert.date}</Badge>
                            </div>
                            <CardTitle className="font-headline text-xl mt-4">{cert.title}</CardTitle>
                            <CardDescription className="font-medium text-foreground">{cert.issuer}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <p className="text-muted-foreground mb-6">
                                {cert.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cert.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </AnimatedOnScroll>
          ))}
            </div>
        </div>
    </section >
  );
}

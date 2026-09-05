"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Users, Wrench, School } from "lucide-react";
import Image from "next/image";

const leadershipRoles = [
  {
    id: 1,
    period: '2025 – 2026',
    role: 'President',
    org: 'Team Aveon Racing | Birla Institute of Technology, Mesra ',
    icon: <Wrench className="w-10 h-10 text-primary" />,
    description: [
      'Led the team to E-BAJA 2024-25 successfully.',
      'Successfully organized ChargeX’24, a 3-day college flagship event concerning automobile industry.',
      'Arranged sponsorship amount of Rupees 4 lakh+ from multiple companies for the season.',
      'Secured 1st Rank in E-BAJA, 2025 for "Technology Innovation"'
    ],
    highlights: ['Team of 40+', 'Formula Student', 'Motorsport'],
    tags: ['Project Management', 'Engineering Leadership', 'Automotive Design', 'Cross-functional Teams'],
    img: '/Team%20Aveon%20Racing.jpg',
    number: '01',
  },
  {
    id: 2,
    period: '2020 – 2023',
    role: 'President',
    org: 'Village Micro-Finance | Gram Samiti | Tapin North, Ramgarh',
    icon: <Users className="w-10 h-10 text-primary" />,
    description: [
      'Led a village-level banking initiative, growing membership from 10 to 40 through community onboarding.',
      'Managed end-to-end operations, increasing the capital pool by 50% and maintaining financial records.'
    ],
    highlights: ['50+ Households', 'Ramgarh, JH', 'Social Impact'],
    tags: ['Micro-finance', 'Community Leadership', 'Financial Literacy', 'Social Impact'],
    img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80',
    number: '02',
  },
  {
    id: 3,
    period: '2020 – 2021',
    role: 'Head Boy',
    org: 'DAV Public School, Tapin North, Ramgarh, Jharkhand',
    icon: <School className="w-10 h-10 text-primary" />,
    description: [
      'Led the core student council, fostering discipline and orchestrating major intra-school events.',
      'Represented a student body of over 1,000 students in administrative discussions, championing student welfare.',
      'Spearheaded annual school functions and community service drives, ensuring seamless cross-department coordination.'
    ],
    highlights: ['Student Council', 'Event Management', '1000+ Students'],
    tags: ['Public Speaking', 'Team Coordination', 'Administrative Leadership'],
    img: '/DAV.png',
    number: '03',
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="w-full bg-background py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-16"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-12 h-[2px] bg-primary block" />
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Leadership & Impact</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center md:text-left mb-6">
            Driving Impact,{' '}
            <span className="text-muted-foreground">
              One Role at a Time.
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground text-center md:text-left">
            A chronicle of leadership and responsibility — bridging high-performance engineering with grassroots community empowerment.
          </p>
        </AnimatedOnScroll>

        <div className="flex flex-col gap-8">
          {leadershipRoles.map((role, index) => (
            <AnimatedOnScroll
              key={role.id}
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="group relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/30">
                {/* Number Watermark */}
                <div className="absolute top-4 right-6 text-7xl font-extrabold text-muted-foreground/10 leading-none select-none pointer-events-none z-0">
                  {role.number}
                </div>

                {/* Visual panel */}
                <div className="md:w-64 xl:w-72 shrink-0 flex items-center justify-center bg-muted relative overflow-hidden h-56 md:h-auto border-b md:border-b-0 md:border-r border-border">
                  {role.img ? (
                    <>
                      <img src={role.img} alt={role.org} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute bottom-6 z-10 w-full flex justify-center">
                        <span className="text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md shadow-lg">
                          {role.period}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 z-10 w-full h-full p-6 bg-gradient-to-br from-primary/5 to-transparent">
                      <div className="w-20 h-20 rounded-2xl bg-background flex items-center justify-center border shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        {role.icon}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full border bg-background shadow-sm">
                        {role.period}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between z-10 relative bg-background">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">{role.role}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-5">{role.org}</h4>

                    <ul className="list-disc list-outside ml-4 mb-6 text-sm md:text-base text-muted-foreground space-y-2">
                      {role.description.map((item, index) => (
                        <li key={index} className="leading-relaxed pl-1">{item}</li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {role.highlights.map(h => (
                        <span key={h} className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-muted/50 text-foreground">{h}</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-border mt-auto">
                    {role.tags.map(t => (
                      <span key={t} className="text-[11px] font-medium bg-muted px-3 py-1.5 rounded-md text-muted-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

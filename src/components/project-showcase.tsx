"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { AnimatedOnScroll } from './animated-on-scroll';

const projects = [
    {
        id: 1,
        category: 'Entrepreneurship',
        categoryColor: 'text-primary bg-primary/10 border-primary/20',
        title: 'BIT Cycles',
        subtitle: 'Student-Sourced Rental Platform',
        description: [
            'Identified a campus mobility gap and built a student-sourced bicycle-rental platform 0-to-1.',
            'Managed end-to-end execution including sourcing, pricing, and operations – generating Rs. 20,000 in revenue.',
            'Designed targeted marketing campaigns and dynamically optimized pricing models to match student demand.',
            'Orchestrated peer-to-peer fleet logistics, maintenance tracking, and user acquisition pipelines to scale active rentals.'
        ],
        highlights: ['Rs. 20,000 Revenue', 'Operations', 'Leadership'],
        tags: ['Startup', 'Operations', 'Marketing'],
        img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
        number: '01',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 2,
        category: 'Full-Stack Development',
        categoryColor: 'text-secondary bg-secondary/10 border-secondary/20',
        title: 'Personal Portfolio',
        subtitle: 'Next.js & React Architecture',
        description: [
            'Architected a production-grade portfolio using Next.js 15, Tailwind CSS, and Shadcn/UI.',
            'Engineered completely responsive glassmorphism UI layouts with native scroll animations.',
            'Mapped complex data schemas to build scalable showcase components.'
        ],
        highlights: ['Next.js 15', 'Glassmorphism', 'Responsive UI'],
        tags: ['Next.js', 'React', 'Tailwind', 'Frontend'],
        img: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80',
        number: '02',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 3,
        category: 'Analytical Modeling',
        categoryColor: 'text-tertiary bg-tertiary/10 border-tertiary/20',
        title: '2D Point Source Diffusion',
        subtitle: 'FDM Simulation in Python',
        description: [
            'Derived exact analytical solutions for 2D transient diffusion using Fourier Transforms.',
            'Developed a Python simulation using Finite Difference Method (FDM) to solve partial differential equations for mass transfer.',
            'Validated numerical accuracy against analytical models and analyzed system dynamics.'
        ],
        highlights: ['Fourier Transforms', 'FDM Simulation', 'Python PDEs'],
        tags: ['Python', 'Mathematical Modeling', 'Numerical Methods'],
        img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
        number: '03',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 4,
        category: 'Data Architecture',
        categoryColor: 'text-primary bg-primary/10 border-primary/20',
        title: 'Medallion Data Warehouse',
        subtitle: 'SQL Server ETL Pipeline Design',
        description: [
            'Developed an end-to-end data warehouse using Medallion architecture (Bronze, Silver, Gold) and modeled data with a Star Schema for efficient querying.',
            'Wrote and optimized SQL Server queries for data cleaning, transformation, and aggregation.',
            'Created data flow diagrams, maintained Notion documentation, and version-controlled via GitHub.'
        ],
        highlights: ['Star Schema', 'SQL Server ETL', 'Medallion Architecture'],
        tags: ['Data Warehouse', 'SQL Server', 'Data Modeling', 'ETL'],
        img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
        number: '04',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 5,
        category: 'Data Engineering',
        categoryColor: 'text-secondary bg-secondary/10 border-secondary/20',
        iconColor: 'bg-primary/10 text-tertiary',
        title: 'Automated Supply Chain Analytics',
        subtitle: 'ETL Pipeline & Supabase DB',
        description: [
            'Engineered an automated workflow using n8n to extract CSV data from email attachments, transform formats, and ingest sales records into a PostgreSQL database hosted on Supabase.',
            'Utilized Quadratic to query the database via SQL, leveraging Python for data cleaning, date standardization, and star schema modeling.',
            'Calculated and visualized critical domain metrics including OTIF, Line Fill Rate, and Volume Fill Rate.'
        ],
        highlights: ['Supabase DB', 'Python / SQL', 'OTIF & KPI Tracking'],
        tags: ['ETL Pipeline', 'Data Modeling', 'Supply Chain Analytics', 'Python'],
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        number: '05',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 6,
        category: 'Data Analytics',
        categoryColor: 'text-tertiary bg-tertiary/10 border-tertiary/20',
        title: 'Financial Bank Loan Analysis',
        subtitle: 'BI Dashboards & Risk Assessment',
        description: [
            'Developed Bank Loan Analysis pipeline using SQL to clean and process 38,000+ records.',
            'Engineered advanced DAX measures to calculate financial KPIs, MoM growth, and loan risk classifications.',
            'Built interactive Power BI dashboards to visualize regional trends and optimize lending strategies.'
        ],
        highlights: ['38,000+ Records', 'Power BI / DAX', 'MoM Growth'],
        tags: ['SQL', 'Data Analytics', 'Finance', 'Dashboarding'],
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        number: '06',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 7,
        category: 'Operations Analytics',
        categoryColor: 'text-primary bg-primary/10 border-primary/20',
        title: 'ElectricPe Sales Dashboard',
        subtitle: 'Funnel Performance & Bottleneck Analysis',
        description: [
            'Developed an interactive Excel dashboard using Pivot Tables to analyze a 1,000-lead sales funnel.',
            'Identified a 0% \'Cold\' lead conversion rate and a 4.53-day \'Booking-to-Delivery\' TAT bottleneck.',
            'Calculated a -53.50% NPS, performed root-cause analysis on 271 cancellations, and presented actionable findings.'
        ],
        highlights: ['1,000-lead Funnel', 'TAT Bottleneck Fix', 'Excel Pivot Tables'],
        tags: ['Sales Ops', 'Root Cause Analysis', 'Excel', 'Reporting'],
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        number: '07',
        link: 'https://github.com/sunnyt4'
    },
    {
        id: 8,
        category: 'Marketing Intelligence',
        categoryColor: 'text-secondary bg-secondary/10 border-secondary/20',
        title: 'Marketing Analytics Dashboard',
        subtitle: 'Customer Behavior BI Dashboards',
        description: [
            'Designed 4 interactive dashboards (Overview, Conversion Details, Social Media, Customer Reviews) in Power BI to analyze marketing performance and customer behavior.',
            'Wrote custom DAX measures for complex KPIs.',
            'Delivered insights identifying peak conversion months and product-specific improvement opportunities.'
        ],
        highlights: ['4 Power BI Views', 'Complex DAX KPIs', 'Conversion Trends'],
        tags: ['Power BI', 'Marketing Analytics', 'DAX', 'Customer Behavior'],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        number: '08',
        link: 'https://github.com/sunnyt4'
    }
];

export function ProjectShowcase() {
    return (
        <div className="flex flex-col gap-8 w-full mt-12 pb-16">
            {projects.map((p, index) => (
                <AnimatedOnScroll
                    key={p.id}
                    classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
                    classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <Card className="group relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 bg-background hover:border-primary/30">
                        {/* Number Watermark */}
                        <div className="absolute top-4 right-6 text-7xl font-extrabold text-muted-foreground/10 leading-none select-none pointer-events-none z-0">
                            {p.number}
                        </div>

                        {/* Visual panel */}
                        <div className="md:w-64 xl:w-96 shrink-0 flex items-center justify-center bg-muted relative h-60 md:h-auto border-b md:border-b-0 md:border-r border-border">
                            <Image src={p.img} alt={p.title} fill className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
                            <div className="absolute bottom-6 z-10 w-full flex justify-center">
                                <span className={`text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-white/20 text-white backdrop-blur-md shadow-lg ${p.categoryColor}`}>
                                    {p.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between z-10 relative bg-background">
                            <div>
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start md:pr-0">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2 pr-12 xl:pr-0">{p.title}</h3>
                                        <h4 className="text-md font-semibold text-primary/80 mb-5">{p.subtitle}</h4>
                                    </div>
                                    <div className="shrink-0 mb-4 xl:mb-0">
                                        <a href={(p as any).link || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full font-label-caps text-xs uppercase tracking-widest transition-colors font-semibold group/btn relative z-20">
                                            <span>View Project</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                </div>

                                <ul className="list-disc list-outside ml-4 mb-6 text-sm md:text-base text-muted-foreground space-y-2">
                                    {p.description.map((item, index) => (
                                        <li key={index} className="leading-relaxed pl-1">{item}</li>
                                    ))}
                                </ul>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.highlights.map(h => (
                                        <span key={h} className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-muted/50 text-foreground">{h}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-5 border-t border-border mt-auto">
                                {p.tags.map(t => (
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
    );
}

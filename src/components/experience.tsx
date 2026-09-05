"use client";

import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import Image from "next/image";
import { cn } from "@/lib/utils";

const experiences = [
    {
        role: "Category Associate",
        company: "Urban Company",
        department: "Data & Operations",
        period: "Feb 2026 - Aug 2026",
        imageUrl: "/Urban%20Company.png",
        imageHint: "Urban Company",
        color: "primary",
        subgroups: [
            {
                title: "Native – Modern Trade (Bangalore)",
                points: [
                    "Built a Lead Management System for Native RO and engineered automated workflows for Promoter Attendance, daily reporting, and MT request creation reminders.",
                    "Accelerated Modern Trade (MT) fulfillment workflows using Apps Script, SQL, and advanced analytics, significantly reducing installation TAT.",
                    "Directed daily operations across 60+ stores in major hubs (Bangalore, Chennai, Nashik, Pune) while providing essential operational support for other cities.",
                    "Helped streamline Sales Operations, managed a team of 60+ field promoters, and actively supported cross-functional teams to achieve sales target fulfillment."
                ]
            },
            {
                title: "Salon Category (Pune)",
                points: [
                    "Improved reporting efficiency using Advanced Excel (Pivot Tables, XLOOKUP) to analyze daily KPIs and cancellations.",
                    "Drove an increase in service fulfillment rates by optimizing regional hub assignments.",
                    "Slashed escalation rates by RCA on recurring issues and overhauling response protocols to accelerate customer TAT."
                ]
            }
        ],
        skills: ["Apps Script", "SQL", "Advanced Excel", "Operations", "RCA"]
    },
    {
        role: "Founder's Office",
        company: "JurixAI",
        department: "",
        period: "Aug 2025 - Jan 2026",
        imageUrl: "/JurixAI.png",
        imageHint: "JurixAI",
        color: "secondary",
        subgroups: [
            {
                title: "",
                points: [
                    "Maintained engagement dashboards for beta users, compiling regular performance reports that assisted the founders in executing a targeted UI/UX redesign.",
                    "Executed data processing operations using Python and SQL, formatting and cleaning 50+ years of raw legal data to maintain the quality of the core RAG pipeline.",
                    "Supported platform quality assurance by conducting routine “Ground Truth” audits on AI summaries and verifying logs for document security."
                ]
            }
        ],
        skills: ["Python", "SQL", "RAG Pipelines", "QA", "UI/UX Analytics"]
    },
    {
        role: "Project Intern",
        company: "Fractal Analytics",
        department: "",
        period: "May 2025 - Jul 2025",
        imageUrl: "/Fractal%20Analytics.png",
        imageHint: "Fractal Analytics",
        color: "tertiary",
        subgroups: [
            {
                title: "",
                points: [
                    "Optimized data retrieval by executing SQL queries on 100K+ rows, reducing reporting turnaround time (TAT) by 30%.",
                    "Developed 10+ Power BI dashboards for a North American beverage client, tracking 50+ KPIs to identify growth drivers across regional outlets.",
                    "Automated Excel dashboards using Pivot Tables and LOOKUPs to visualize multidimensional business metrics and streamline reporting.",
                    "Conducted RCA on 50+ business queries, providing recommendations that drove sales increase in target markets."
                ]
            }
        ],
        skills: ["SQL", "Power BI", "Advanced Excel", "Data Analytics", "RCA"]
    },
    {
        role: "Research Intern",
        company: "Indian Space Research Organisation (ISRO)",
        department: "",
        period: "Jul 2024 - Aug 2024",
        imageUrl: "/ISRO.jpg",
        imageHint: "ISRO",
        color: "primary",
        subgroups: [
            {
                title: "",
                points: [
                    "Design and analysis of 1.5m diameter head expander for 29 ton Shaker System.",
                    "Objective is to reduce moving mass while ensuring high stiffness and load capacity for spacecraft testing.",
                    "Performed 3D modelling and FEM analysis in Siemens NX 12.0.",
                    "Achieved first natural frequency of 460 Hz and maximum stress of 13.55 MPa, confirming design safety."
                ]
            }
        ],
        skills: ["Siemens NX", "FEM Analysis", "3D Modelling"]
    },
    {
        role: "Investment Banking Intern",
        company: "ProCapitas",
        department: "Delhi",
        period: "May 2024 - Jul 2024",
        imageUrl: "/ProCapitas.png",
        imageHint: "ProCapitas",
        color: "primary",
        subgroups: [
            {
                title: "",
                points: [
                    "Performed financial analysis and built DCF & M&A models in Excel, including FCF forecasting, WACC calculation and terminal value estimation for valuation of listed companies."
                ]
            }
        ],
        skills: ["Financial Modeling", "Excel", "DCF Valuation", "M&A"]
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="w-full bg-secondary py-20 md:py-32 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="60" id="dots" patternUnits="userSpaceOnUse" width="60">
                            <circle cx="2" cy="2" r="1.5" className="text-muted-foreground" fill="currentColor" opacity="0.4" />
                        </pattern>
                    </defs>
                    <rect fill="url(#dots)" height="100%" width="100%" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-5xl">
                <AnimatedOnScroll
                    classNameIn="animate-in fade-in duration-1000"
                    classNameOut="animate-out fade-out duration-1000 opacity-0"
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl drop-shadow-sm">
                        Professional Trajectory
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground mx-auto md:mx-0">
                        A timeline of data-driven impact, operational scaling, and analytical problem-solving across diverse industries.
                    </p>
                </AnimatedOnScroll>

                <div className="relative border-l-2 border-border ml-4 md:ml-8 lg:ml-[160px] space-y-16 pb-12">
                    {experiences.map((item, index) => (
                        <AnimatedOnScroll
                            key={item.company + item.role}
                            classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
                            classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative pl-8 md:pl-10 group">
                                {/* Desktop Date Badge (Hanging Left) */}
                                <div className="hidden lg:flex absolute -left-[200px] top-1 w-[160px] justify-end">
                                    <span className={cn(
                                        "px-3 py-1 rounded-full border font-label-caps text-[12px] uppercase tracking-widest shadow-sm whitespace-nowrap",
                                        item.color === "primary" ? "border-primary/20 bg-primary/10 text-primary shadow-primary/5" :
                                            item.color === "secondary" ? "border-secondary-foreground/20 bg-secondary-foreground/10 text-secondary-foreground shadow-secondary-foreground/5" :
                                                "border-foreground/20 bg-foreground/10 text-foreground shadow-foreground/5"
                                    )}>
                                        {item.period}
                                    </span>
                                </div>

                                {/* Timeline Node Logo */}
                                <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-border p-[2px]">
                                    <Image src={item.imageUrl} alt={item.imageHint} width={40} height={40} className="w-full h-full object-contain rounded-full bg-white" />
                                </div>

                                {/* Card Body */}
                                <div className="bg-background/80 backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/card text-left">
                                    <div className="absolute top-1/2 left-3/4 md:left-[80%] lg:left-[85%] -translate-x-[50%] -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 opacity-[0.04] pointer-events-none select-none z-0">
                                        <Image src={item.imageUrl} alt={item.imageHint} fill className="object-contain" />
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                                        <div>
                                            <h2 className="font-headline text-2xl font-bold text-foreground mb-1">{item.role}</h2>
                                            <div className="flex items-center gap-2 text-muted-foreground font-body text-md">
                                                <span className={cn("font-semibold", item.color === "primary" ? "text-primary" : item.color === "secondary" ? "text-secondary-foreground" : "text-foreground")}>{item.company}</span>
                                                {item.department && (
                                                    <>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></span>
                                                        <span>{item.department}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Mobile Date Badge */}
                                        <span className={cn(
                                            "lg:hidden mt-2 md:mt-0 px-3 py-1 rounded-full border font-label-caps text-[11px] uppercase tracking-widest shadow-sm whitespace-nowrap inline-block self-start",
                                            item.color === "primary" ? "border-primary/20 bg-primary/10 text-primary" :
                                                item.color === "secondary" ? "border-secondary-foreground/20 bg-secondary-foreground/10 text-secondary-foreground" :
                                                    "border-foreground/20 bg-foreground/10 text-foreground"
                                        )}>
                                            {item.period}
                                        </span>
                                    </div>

                                    {/* Subgroups & Points */}
                                    {item.subgroups.map((sub, sIdx) => (
                                        <div key={sIdx} className="mb-6 last:mb-0">
                                            {sub.title && (
                                                <h4 className={cn("font-label-caps uppercase tracking-widest mb-3 text-sm font-semibold", item.color === "primary" ? "text-primary" : item.color === "secondary" ? "text-secondary-foreground" : "text-foreground")}>
                                                    {sub.title}
                                                </h4>
                                            )}
                                            <ul className={cn("space-y-3 relative z-10", sub.title ? "border-l-2 pl-4" : "", item.color === "primary" ? "border-primary/20" : item.color === "secondary" ? "border-secondary-foreground/20" : "border-foreground/20")}>
                                                {sub.points.map((point, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-3">
                                                        <span className={cn("mt-1.5 h-1.5 w-1.5 rounded-full shrink-0", item.color === "primary" ? "bg-primary/50" : item.color === "secondary" ? "bg-secondary-foreground/50" : "bg-foreground/50")}></span>
                                                        <p className="font-body text-md text-muted-foreground leading-relaxed">{point}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {/* Skills Block */}
                                    {item.skills && item.skills.length > 0 && (
                                        <div className="mt-6 pt-6 border-t flex flex-wrap gap-2 relative z-10">
                                            {item.skills.map((skill) => (
                                                <span key={skill} className={cn(
                                                    "px-3 py-1 rounded border text-[11px] font-label-caps tracking-wide uppercase font-semibold",
                                                    item.color === "primary" ? "bg-primary/10 border-primary/20 text-primary" :
                                                        item.color === "secondary" ? "bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground" :
                                                            "bg-foreground/5 border-foreground/10 text-foreground"
                                                )}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

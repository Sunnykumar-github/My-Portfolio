
import { Briefcase, Code, Github, GraduationCap, Linkedin, Mail, Twitter, Lightbulb, MessageSquareText, Puzzle, Users, ArrowRight, Phone, FileDown } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header';
import { ProjectShowcase } from '@/components/project-showcase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { AnimatedOnScroll } from '@/components/animated-on-scroll';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full">
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
)

const NextjsIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>Next.js</title>
        <path d="M9.041 12.836L14.959 7.164v10l-5.918-5.672zM15.5 4l-11.25 8 11.25 8V4z" />
    </svg>
)

const JavaScriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
        <path d="M7.76 17.2V8.71H10.88C11.66 8.71 12.23 8.79 12.59 8.95C12.96 9.11 13.23 9.38 13.41 9.76C13.59 10.13 13.68 10.58 13.68 11.1C13.68 11.63 13.58 12.08 13.38 12.45C13.18 12.82 12.9 13.1 12.54 13.28C12.18 13.46 11.72 13.55 11.16 13.55H9.42V17.2H7.76ZM9.42 12.22H11C11.4 12.22 11.7 12.16 11.9 12.04C12.1 11.92 12.2 11.73 12.2 11.47C12.2 11.21 12.11 11.02 11.93 10.9C11.75 10.78 11.47 10.72 11.09 10.72H9.42V12.22ZM15.42 17.38C14.7 17.38 14.12 17.23 13.68 16.93C13.24 16.63 12.95 16.2 12.81 15.64H14.41C14.44 15.86 14.54 16.03 14.71 16.15C14.88 16.27 15.11 16.33 15.39 16.33C15.81 16.33 16.02 16.22 16.02 15.99C16.02 15.84 15.95 15.72 15.81 15.63C15.67 15.54 15.4 15.44 14.98 15.33L14.43 15.2C13.89 15.06 13.46 14.84 13.14 14.54C12.82 14.24 12.66 13.83 12.66 13.31C12.66 12.86 12.79 12.48 13.05 12.17C13.31 11.86 13.69 11.65 14.19 11.55C14.69 11.45 15.23 11.4 15.81 11.4C16.45 11.4 16.98 11.53 17.4 11.79C17.82 12.05 18.06 12.43 18.12 12.93H16.52C16.48 12.64 16.34 12.45 16.1 12.36C15.86 12.27 15.58 12.22 15.26 12.22C14.9 12.22 14.72 12.3 14.72 12.46C14.72 12.58 14.77 12.68 14.87 12.76C14.97 12.84 15.15 12.92 15.41 12.99L16.13 13.18C16.85 13.38 17.36 13.66 17.66 14.02C17.96 14.38 18.11 14.84 18.11 15.4C18.11 15.96 17.96 16.43 17.66 16.81C17.36 17.19 16.9 17.38 16.28 17.38H15.42Z" />
    </svg>
)

const TypeScriptIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>TypeScript</title>
        <path d="M12.288 15.328h2.64v-1.056h-1.056v-3.3h1.056v-1.056h-2.64v1.056h1.056v3.3h-1.056zm-3.972-.348c.42 0 .756-.156.996-.456l.816.66c-.396.504-.96.792-1.812.792-.612 0-1.116-.168-1.524-.504s-.612-.78-.612-1.32c0-.528.204-1.008.612-1.44s.936-.648 1.596-.648c.876 0 1.488.42 1.836 1.044l-.9.504c-.216-.432-.552-.648-.996-.648-.324 0-.588.108-.792.324s-.300.5-.300.864c0 .36.108.636.324.828s.456.288.756.288m10.824-2.544c.576 0 1.044.18 1.404.528s.54.792.54 1.332c0 .552-.18 1.01-.54 1.368s-.828.54-1.404.54c-.564 0-1.032-.18-1.404-.54s-.564-.816-.564-1.368c0-.54.18-1 .552-1.344s.828-.516 1.416-.516m0 5.4c1.332 0 2.292-.372 2.892-1.116s.9-1.74.9-2.988c0-1.26-.3-2.256-.9-2.988s-1.56-1.104-2.892-1.104c-1.344 0-2.316.36-2.916 1.08s-.9 1.716-.9 2.964c0 1.296.3 2.292.9 3.012s1.572 1.08 2.916 1.08" />
    </svg>
)

const TailwindCssIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full">
        <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,0.6,7.2,3.6,7.2c2.4,0,3.6-1.2,4.8-3.6l-1.8-1.8 c-0.6,1.2-1.2,1.8-2.4,1.8c-1.2,0-1.8-0.6-2.4-1.8c-0.6-1.8-0.6-3.6,0-5.4c0.6-1.2,1.2-1.8,2.4-1.8s1.8,0.6,2.4,1.8l1.8-1.8 C15.601,6,14.401,4.8,12.001,4.8z M18.601,12c-1.2,4.8,0.6,7.2,3.6,7.2c2.4,0,3.6-1.2,4.8-3.6l-1.8-1.8 c-0.6,1.2-1.2,1.8-2.4,1.8c-1.2,0-1.8-0.6-2.4-1.8c-0.6-1.8-0.6-3.6,0-5.4c0.6-1.2,1.2-1.8,2.4-1.8c1.2,0,1.8,0.6,2.4,1.8l1.8-1.8 C22.201,6,21.001,4.8,18.601,4.8c-3.2,0-5.2,1.6-6,4.8C11.401,16.8,15.401,18,18.601,12z"></path>
    </svg>
)

const NodejsIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>Node.js</title>
        <path d="M11.996 0L2.333 5.583v11.162l9.663 5.583 9.667-5.583V5.583L11.996 0zM12 1.12l8.529 4.922v9.914l-8.529 4.924-8.53-4.924V6.042L12 1.12z"/>
    </svg>
)

const PostgreSqlIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>PostgreSQL</title>
        <path d="M11.91 21.391c-2.31 0-3.33-1.12-3.33-3.131V8.5h2.3v9.551c0 .41.13.75.46.75s.46-.34.46-.75V8.5h2.31v9.76c0 2.01-1.02 3.13-3.2 3.13zm-5.7-12.89v9.75c0 .7.31 1.25.91 1.25s.91-.55.91-1.25V8.5h2.3v9.55c0 2.01-1.02 3.13-3.2 3.13s-3.22-1.12-3.22-3.13V8.5h2.3zm12.51 3.9c0-1.87-.93-2.92-2.79-2.92-1.03 0-1.7.35-2.22.95v-.82H14.4v9.64h2.3v-4.3c.52-.6 1.19-.95 2.22-.95.84 0 1.39.42 1.39 1.48v3.72h2.3v-5.8h-.02z"/>
    </svg>
)

const MongoDbIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor"><title>MongoDB</title><path d="M15.93 24a8.17 8.17 0 01-6.42-3.09c-3.1-3.6-3.72-8.37-1.86-12.28a10.42 10.42 0 019-6.39c2.34 0 4.56.78 6.39 2.25 1.2 1.05 2.1 2.49 2.64 4.14.75 2.52.39 5.25-1.08 7.53-1.2 1.95-3.12 3.51-5.46 4.35-1.8.69-3.75 1.05-5.73 1.05a8.23 8.23 0 01-1.5-.12zm-3.6-11.64c1.26-1.08 1.89-2.58 1.53-4.08-.39-1.5-1.5-2.67-2.94-3-1.44-.39-3.03.12-4.02 1.2-.99 1.11-1.11 2.7-0.33 4.02.72 1.32 2.13 2.19 3.63 2.19.45 0 .9-.06 1.35-.27a.6.6 0 00-.21 1.08c1.32.9 3.06.63 4.02-.69.96-1.29.69-3.03-.69-4.02-1.35-.96-3.09-.69-4.02.66a.6.6 0 00.9.96c.6-.63 1.5-.75 2.19-.21.69.51.93 1.41.45 2.1-.48.69-1.38.93-2.1.45a.6.6 0 00-.72.3c-.06.33.15.63.48.69.93.15 1.83-.18 2.49-.81.63-.66.81-1.59.42-2.37a.6.6 0 00-.99-.39c-.6.42-.81 1.2-.51 1.83a.6.6 0 00.96.42z"/></svg>
)

const GitIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>Git</title>
        <path d="M23.996 11.233c-.05-.499-.228-.964-.5-1.378l-4.62-7.14c-.542-.838-1.554-1.3-2.61-1.3H7.728c-1.056 0-2.068.462-2.61 1.3l-4.62 7.14c-.272.414-.45.879-.5 1.378a3.172 3.172 0 0 0 .15 1.536l7.73 10.966c.517.733 1.488 1.156 2.5 1.156h.002c1.012 0 1.983-.423 2.5-1.156l7.73-10.966a3.172 3.172 0 0 0 .15-1.536zM12 18.067l-5.15-7.303h3.54a.615.615 0 0 0 .61-.61V6.93a.616.616 0 0 0-.61-.61h-2.9L12 2.133l4.57 4.187h-2.9a.616.616 0 0 0-.61.61v3.223a.615.615 0 0 0 .61.61h3.54l-5.15 7.303z"/>
    </svg>
)

const DockerIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>Docker</title>
        <path d="M22.152 7.27c-1.35-1.332-3.21-2.22-5.19-2.22H7.038c-1.98 0-3.84 1.092-5.19 2.22-1.14 1.116-1.848 2.7-1.848 4.392v4.56c0 1.692.708 3.276 1.848 4.392 1.35 1.128 3.21 2.22 5.19 2.22h9.924c1.98 0 3.84-1.092 5.19-2.22 1.14-1.116 1.848 2.7 1.848-4.392v-4.56c0-1.692-.708-3.48-1.848-4.392zm-1.056 8.82c-.9.9-2.316 1.548-3.876 1.548H7.314c-1.56 0-2.976-.648-3.876-1.548a4.108 4.108 0 0 1-1.38-3.264v-1.14c.237-.06.48-.108.708-.18.72-.252 1.417-.588 2.064-.996.36-.228.696-.48.996-.756.24-.216.516-.42.756-.636.228-.204.456-.408.672-.6.204-.192.408-.384.588-.576.228-.24.432-.492.636-.756.192-.252.36-.528.504-.816.144-.288.264-.588.36-.9.084-.3.156-.612.192-.936H11.4v4.5h2.25v-4.5h1.116c.036.324.108.636.192.936.096.312.216.612.36.9.144.288.312.564.504.816.204.264.408.516.636.756.18.192.384.384.588.576.216.192.444.396.672.6.24.216.516.42.756.636.3.276.636.528.996.756.648.408 1.344.744 2.064.996.228.072.471.12.708.18v1.14c0 1.224-.48 2.388-1.38 3.264zM4.5 10.5H3V9h1.5zm3 0H6V9h1.5zm3 0H9V9h1.5zm3 0H12V9h1.5z"/>
    </svg>
)

const FigmaIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>Figma</title>
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.25 12a3.75 3.75 0 0 1 3.75-3.75V12h-3.75zm0 3.75h3.75v3.75a3.75 3.75 0 0 1-3.75-3.75zM12 8.25A3.75 3.75 0 0 1 15.75 12h-3.75V8.25zm0 3.75h3.75a3.75 3.75 0 0 1-3.75 3.75v-3.75zM8.25 8.25a3.75 3.75 0 0 1 3.75-3.75v3.75h-3.75z"/>
    </svg>
)

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <MyWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-background">
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-20" 
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 80% at 50% -20%, hsl(var(--primary) / 0.3), transparent)",
          }}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <Badge variant="secondary">
              Available for freelance work
            </Badge>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Sunny Kumar
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-400">
            Software Engineer and Full-Stack Developer crafting next-gen web experiences blending code, creativity and AI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#my-work">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="/sunnyresume.pdf" download="Sunny_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-5 w-5" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


function AboutSection() {
  return (
    <section id="about" className="w-full bg-background py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in slide-in-from-left-16 duration-1000"
          classNameOut="animate-out fade-out slide-out-to-left-16 duration-1000 opacity-0"
        >
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground">
              Passionate software developer with expertise in Full-Stack Development, Artificial Intelligence, Machine Learning. Currently pursuing B.Tech in Chemical Engineering from Birla Institute of Technology, Mesra with a strong foundation in algorithms, machine learning, and modern web technologies.
            </p>
            <p className="text-muted-foreground">
              Experienced in building scalable applications, AI-powered solutions, and innovative projects that solve real-world problems. When I'm not coding, you can find me exploring the outdoors, contributing to open-source projects, or brewing the perfect cup of coffee.
            </p>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          className="group"
          classNameIn="animate-in fade-in zoom-in-95 duration-1000"
          classNameOut="animate-out fade-out zoom-out-95"
        >
          <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl opacity-50 transition-all duration-1000 group-data-[intersecting=true]:opacity-75 group-data-[intersecting=true]:bg-primary/30 group-data-[intersecting=true]:blur-4xl"></div>
              
              <Image
                  src="/about.png"
                  alt="Sunny Kumar"
                  width={400}
                  height={400}
                  className="relative rounded-full object-cover shadow-2xl"
                  data-ai-hint="portrait"
              />
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: `Remote Developer ( Freelancer )`,
      company: 'BIT Cycles Rental | 2024 - Present',
      description: [
        'Designed and developed a responsive, mobile-first website for an on-campus cycle rental service, enabling ₹50/day bookings with an average load time under 1.2s.',
        'Built a seamless booking system supporting 100+ concurrent users, reducing average reservation time to under 30 seconds.',
        'Facilitated over 100 rentals till now, with built-in validation reducing user errors by 40%.',
      ],
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'cycle rental app'
    },
  ];

  return (
    <section id="experience" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            My professional journey so far.
          </p>
        </AnimatedOnScroll>

        <div className="mx-auto grid max-w-5xl gap-12">
          {experiences.map((item, index) => (
            <AnimatedOnScroll
              key={item.role}
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="group grid grid-cols-1 md:grid-cols-5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="md:col-span-3 flex flex-col p-8 justify-center">
                    <CardHeader className="p-0">
                        <CardTitle className="font-headline text-2xl">{item.role}</CardTitle>
                        <CardDescription className="pt-2">{item.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </CardContent>
                </div>
                <div className="md:col-span-2 relative h-60 md:h-full min-h-[250px]">
                    <Image
                        src={item.imageUrl}
                        alt={item.role}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={item.imageHint}
                    />
                </div>
              </Card>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const educationItems = [
    {
      degree: 'B.Tech in Chemical Engineering',
      institution: 'Birla Institute of Technology, Mesra',
      description: 'Focused on software development and artificial intelligence. Completed a final year project on machine learning algorithms.',
      score: '7.3 CGPA',
      coursework : ['Mass Transfer', 'Thermodynamics', 'Heat Transfer', 'Process Control and Instrumentations', 'Fluid Mechanics', 'Transport Phenomena', 'Chemical Reaction Engineering'],
    },
    {
      degree: 'B.S in Data Science and Applications (Foundational Level)',
      institution: 'Indian Institute of Technology, Madras',
      description: 'Completed foundational level with a focus on core computer science and mathematical concepts.',
      score: '7.88 CGPA',
      coursework : ['Python','Java','Mathematics','Statisics','English','Data Structures and Algorithms','DBMS','English','ML Foundations'],
    },
    {
      degree: '12th Grade - Senior School Certificate Examination, 2021',
      institution: 'DAV Public School, Tapin North,Jharkhand ',
      description: 'Completed studies with a focus on Physics, Chemistry, and Mathematics.',
      score: '95.4%',
    },
    {
      degree: '10th Grade - Secondary School Examination, 2019',
      institution: 'DAV Public School, Tapin North, Jharkhand',
      description: 'Established a strong academic foundation across all core subjects.',
      score: '96%',
    },
  ];

  return (
    <section id="education" className="w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            My academic journey and qualifications.
          </p>
        </AnimatedOnScroll>

        <div className="mx-auto grid max-w-3xl gap-8">
          {educationItems.map((item, index) => (
            <AnimatedOnScroll
              key={item.degree}
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="flex flex-col md:flex-row items-start gap-6 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-headline text-xl font-semibold">{item.degree}</h3>
                    {item.score && <Badge variant="secondary" className="mt-1 sm:mt-0 self-start">{item.score}</Badge>}
                  </div>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                  {item.coursework && (
                    <div className="mt-4">
                        <h4 className="font-semibold text-sm">Relevant Coursework:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2 text-sm">
                            {item.coursework.map(course => <li key={course}>{course}</li>)}
                        </ul>
                    </div>
                  )}
                </div>
              </Card>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: 'JavaScript', icon: <JavaScriptIcon />, className: "bg-[#F7DF1E] text-black" },
      { name: 'TypeScript', icon: <TypeScriptIcon />, className: "bg-[#3178C6] text-white" },
    ],
  },
  {
    category: "Frontend Frameworks & Libraries",
    skills: [
      { name: 'React', icon: <ReactIcon />, className: "text-[#61DAFB]" },
      { name: 'Next.js', icon: <NextjsIcon />, className: "text-foreground" },
      { name: 'Tailwind CSS', icon: <TailwindCssIcon />, className: "text-[#38B2AC]" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: 'Node.js', icon: <NodejsIcon />, className: "text-[#339933]" },
      { name: 'PostgreSQL', icon: <PostgreSqlIcon />, className: "text-[#4169E1]" },
      { name: 'MongoDB', icon: <MongoDbIcon />, className: "text-[#47A248]" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: 'Git', icon: <GitIcon />, className: "text-[#F05032]" },
      { name: 'GitHub', icon: <Github className="h-full w-full" />, className: "text-foreground" },
      { name: 'Docker', icon: <DockerIcon />, className: "text-[#2496ED]" },
      { name: 'Figma', icon: <FigmaIcon />, className: "" },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: 'Communication', icon: <MessageSquareText className="h-full w-full" />, className: "text-primary" },
      { name: 'Teamwork', icon: <Users className="h-full w-full" />, className: "text-primary" },
      { name: 'Problem Solving', icon: <Puzzle className="h-full w-full" />, className: "text-primary" },
      { name: 'Creativity', icon: <Lightbulb className="h-full w-full" />, className: "text-primary" },
    ]
  }
];

function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-16 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A look at the technologies, tools, and abilities I bring to the table.
          </p>
        </AnimatedOnScroll>
        
        <div className="space-y-16">
          {skillsData.map((category) => (
            <div key={category.category}>
              <AnimatedOnScroll
                classNameIn="animate-in fade-in slide-in-from-bottom-8 duration-1000"
                classNameOut="animate-out fade-out slide-out-to-bottom-8 duration-1000 opacity-0"
              >
                <h3 className="font-headline text-2xl font-semibold mb-8 text-center">{category.category}</h3>
              </AnimatedOnScroll>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category.skills.map((skill, skillIndex) => (
                    <AnimatedOnScroll
                      key={skill.name}
                      classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
                      classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                      className="h-full"
                    >
                      <Card 
                        className="flex h-full flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:-translate-y-2"
                      >
                        <div className={cn("flex h-16 w-16 items-center justify-center rounded-full p-3", skill.className)}>
                            {skill.icon}
                        </div>
                        <p className="mt-2 text-sm font-semibold">{skill.name}</p>
                      </Card>
                    </AnimatedOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function MyWorkSection() {
  return (
    <section id="my-work" className="w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </AnimatedOnScroll>
        <ProjectShowcase />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's connect, collaborate and build together .
          </p>
        </AnimatedOnScroll>
        
        <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-2">
            <AnimatedOnScroll
                classNameIn="animate-in fade-in slide-in-from-left-16 duration-1000 delay-200"
                classNameOut="animate-out fade-out slide-out-to-left-16 duration-1000 opacity-0"
                className="flex flex-col justify-center space-y-8"
            >
                <div>
                    <h3 className="font-headline text-2xl font-semibold">Contact Details</h3>
                    <div className="mt-4 space-y-4">
                         <a href="mailto:oneplussunny01@gmail.com" className="flex items-center gap-4 group">
                            <Mail className="h-6 w-6 text-primary transition-colors group-hover:text-primary/80"/>
                            <span className="text-lg text-muted-foreground transition-colors group-hover:text-foreground">oneplussunny01@gmail.com</span>
                         </a>
                         <a href="tel:+918210436325" className="flex items-center gap-4 group">
                            <Phone className="h-6 w-6 text-primary transition-colors group-hover:text-primary/80"/>
                            <span className="text-lg text-muted-foreground transition-colors group-hover:text-foreground">+91 8210436325</span>
                         </a>
                    </div>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl font-semibold">Follow Me Online</h3>
                    <div className="flex gap-4 mt-4">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="https://x.com/Sunny_Kumar_52" aria-label="Twitter" target="_blank" className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="https://github.com/Sunnykumar-github" aria-label="GitHub" target="_blank" className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="https://linkedin.com/in/sunny-kumar3005" aria-label="LinkedIn" target="_blank" className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll
                classNameIn="animate-in fade-in slide-in-from-right-16 duration-1000 delay-400"
                classNameOut="animate-out fade-out slide-out-to-right-16 duration-1000 opacity-0"
            >
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>Fill out the form and I'll get back to you soon.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Sunny Kumar</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

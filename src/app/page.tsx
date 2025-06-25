
import { Briefcase, Code, Github, GraduationCap, Linkedin, Mail, Twitter, Lightbulb, MessageSquareText, Puzzle, Users } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header';
import { ProjectShowcase } from '@/components/project-showcase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { AnimatedOnScroll } from '@/components/animated-on-scroll';

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full">
        <rect width="24" height="24" rx="3" ry="3" fill="#F7DF1E"/>
        <path d="M7.76 17.2V8.71H10.88C11.66 8.71 12.23 8.79 12.59 8.95C12.96 9.11 13.23 9.38 13.41 9.76C13.59 10.13 13.68 10.58 13.68 11.1C13.68 11.63 13.58 12.08 13.38 12.45C13.18 12.82 12.9 13.1 12.54 13.28C12.18 13.46 11.72 13.55 11.16 13.55H9.42V17.2H7.76ZM9.42 12.22H11C11.4 12.22 11.7 12.16 11.9 12.04C12.1 11.92 12.2 11.73 12.2 11.47C12.2 11.21 12.11 11.02 11.93 10.9C11.75 10.78 11.47 10.72 11.09 10.72H9.42V12.22ZM15.42 17.38C14.7 17.38 14.12 17.23 13.68 16.93C13.24 16.63 12.95 16.2 12.81 15.64H14.41C14.44 15.86 14.54 16.03 14.71 16.15C14.88 16.27 15.11 16.33 15.39 16.33C15.81 16.33 16.02 16.22 16.02 15.99C16.02 15.84 15.95 15.72 15.81 15.63C15.67 15.54 15.4 15.44 14.98 15.33L14.43 15.2C13.89 15.06 13.46 14.84 13.14 14.54C12.82 14.24 12.66 13.83 12.66 13.31C12.66 12.86 12.79 12.48 13.05 12.17C13.31 11.86 13.69 11.65 14.19 11.55C14.69 11.45 15.23 11.4 15.81 11.4C16.45 11.4 16.98 11.53 17.4 11.79C17.82 12.05 18.06 12.43 18.12 12.93H16.52C16.48 12.64 16.34 12.45 16.1 12.36C15.86 12.27 15.58 12.22 15.26 12.22C14.9 12.22 14.72 12.3 14.72 12.46C14.72 12.58 14.77 12.68 14.87 12.76C14.97 12.84 15.15 12.92 15.41 12.99L16.13 13.18C16.85 13.38 17.36 13.66 17.66 14.02C17.96 14.38 18.11 14.84 18.11 15.4C18.11 15.96 17.96 16.43 17.66 16.81C17.36 17.19 16.9 17.38 16.28 17.38H15.42Z" fill="#000"/>
    </svg>
)

const TypeScriptIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <title>TypeScript</title>
        <path d="M1.5 0h21v21h-21z" fill="currentColor"/>
        <path d="M12.288 15.328h2.64v-1.056h-1.056v-3.3h1.056v-1.056h-2.64v1.056h1.056v3.3h-1.056zm-3.972-.348c.42 0 .756-.156.996-.456l.816.66c-.396.504-.96.792-1.812.792-.612 0-1.116-.168-1.524-.504s-.612-.78-.612-1.32c0-.528.204-1.008.612-1.44s.936-.648 1.596-.648c.876 0 1.488.42 1.836 1.044l-.9.504c-.216-.432-.552-.648-.996-.648-.324 0-.588.108-.792.324s-.300.5-.300.864c0 .36.108.636.324.828s.456.288.756.288m10.824-2.544c.576 0 1.044.18 1.404.528s.54.792.54 1.332c0 .552-.18 1.01-.54 1.368s-.828.54-1.404.54c-.564 0-1.032-.18-1.404-.54s-.564-.816-.564-1.368c0-.54.18-1 .552-1.344s.828-.516 1.416-.516m0 5.4c1.332 0 2.292-.372 2.892-1.116s.9-1.74.9-2.988c0-1.26-.3-2.256-.9-2.988s-1.56-1.104-2.892-1.104c-1.344 0-2.316.36-2.916 1.08s-.9 1.716-.9 2.964c0 1.296.3 2.292.9 3.012s1.572 1.08 2.916 1.08" fill="hsl(var(--background))"/>
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

const FirebaseIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>Firebase</title>
        <path d="M3.66 12.015L11.97.28l.386.21 7.917 4.571-3.253 1.871-4.706-2.73-7.53 4.342v8.69l3.124-1.8v-5.12l4.407-2.54 4.407 2.54v4.957l-4.29 2.478-3.123-1.794.006-8.49zM11.995 13.29l-4.405-2.547-3.122 1.8v3.6l7.527 4.345.11-.064 7.53-4.346v-3.598l-3.123-1.802-4.407 2.553z"/>
    </svg>
)

const PostgreSqlIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>PostgreSQL</title>
        <path d="M11.91 21.391c-2.31 0-3.33-1.12-3.33-3.131V8.5h2.3v9.551c0 .41.13.75.46.75s.46-.34.46-.75V8.5h2.31v9.76c0 2.01-1.02 3.13-3.2 3.13zm-5.7-12.89v9.75c0 .7.31 1.25.91 1.25s.91-.55.91-1.25V8.5h2.3v9.55c0 2.01-1.02 3.13-3.2 3.13s-3.22-1.12-3.22-3.13V8.5h2.3zm12.51 3.9c0-1.87-.93-2.92-2.79-2.92-1.03 0-1.7.35-2.22.95v-.82H14.4v9.64h2.3v-4.3c.52-.6 1.19-.95 2.22-.95.84 0 1.39.42 1.39 1.48v3.72h2.3v-5.8h-.02z"/>
    </svg>
)

const MongoDbIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
        <title>MongoDB</title>
        <path d="M12.33,23.37a5.2,5.2,0,0,1-1.89-.36,10.6,10.6,0,0,1-5.32-4.15,13.23,13.23,0,0,1-2.94-7.44,13.43,13.43,0,0,1,2.83-8.86,10.3,10.3,0,0,1,8.35-4.14A10.23,10.23,0,0,1,21.8,2.58a13.33,13.33,0,0,1,2.81,9,13.2,13.2,0,0,1-2.82,8.91,10.33,10.33,0,0,1-8.4,4.14,6.33,6.33,0,0,1-1.06-.11Zm-1-10.45a.72.72,0,0,0,0,1.43c2.3,0,2.3-2.42,0-2.42a.72.72,0,0,0-.71.71.72.72,0,0,0,.71.72,1,1,0,0,1,1,1,.71.71,0,0,0,.71.72.72.72,0,0,0,.72-.72c0-2.3-2.3-2.3-2.42,0Z"/>
    </svg>
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
        <path d="M22.152 7.27c-1.35-1.332-3.21-2.22-5.19-2.22H7.038c-1.98 0-3.84 1.092-5.19 2.22-1.14 1.116-1.848 2.7-1.848 4.392v4.56c0 1.692.708 3.276 1.848 4.392 1.35 1.128 3.21 2.22 5.19 2.22h9.924c1.98 0 3.84-1.092 5.19-2.22 1.14-1.116 1.848-2.7 1.848-4.392v-4.56c0-1.692-.708-3.48-1.848-4.392zm-1.056 8.82c-.9.9-2.316 1.548-3.876 1.548H7.314c-1.56 0-2.976-.648-3.876-1.548a4.108 4.108 0 0 1-1.38-3.264v-1.14c.237-.06.48-.108.708-.18.72-.252 1.417-.588 2.064-.996.36-.228.696-.48.996-.756.24-.216.516-.42.756-.636.228-.204.456-.408.672-.6.204-.192.408-.384.588-.576.228-.24.432-.492.636-.756.192-.252.36-.528.504-.816.144-.288.264-.588.36-.9.084-.3.156-.612.192-.936H11.4v4.5h2.25v-4.5h1.116c.036.324.108.636.192.936.096.312.216.612.36.9.144.288.312.564.504.816.204.264.408.516.636.756.18.192.384.384.588.576.216.192.444.396.672.6.24.216.516.42.756.636.3.276.636.528.996.756.648.408 1.344.744 2.064.996.228.072.471.12.708.18v1.14c0 1.224-.48 2.388-1.38 3.264zM4.5 10.5H3V9h1.5zm3 0H6V9h1.5zm3 0H9V9h1.5zm3 0H12V9h1.5z"/>
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
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-750">
            <Badge variant="secondary">
              Available for freelance work
            </Badge>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-750 delay-200">
            John Doe
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-750 delay-400">
            A creative Full-Stack Developer crafting modern, responsive, and
            performant web applications.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-750 delay-600">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#my-work">View My Work</Link>
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
          classNameIn="animate-in fade-in slide-in-from-left-16 duration-750"
          classNameOut="animate-out fade-out slide-out-to-left-16 duration-750 opacity-0"
        >
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground">
              I'm a passionate developer with a knack for building beautiful and functional user interfaces. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the browser. I'm a lifelong learner, always excited to explore new technologies and improve my craft.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring the outdoors, contributing to open-source projects, or brewing the perfect cup of coffee.
            </p>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          classNameIn="animate-in fade-in slide-in-from-right-16 duration-750 delay-200"
          classNameOut="animate-out fade-out slide-out-to-right-16 duration-750 opacity-0"
          className="relative hidden items-center justify-center md:flex"
        >
          <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]">
            <div className="group relative h-full w-full">
              <div className="absolute -inset-2.5 rounded-full bg-primary/20 opacity-75 blur-3xl transition-all duration-1000 group-hover:opacity-100"></div>
              <Image
                src="https://placehold.co/600x600.png"
                alt="John Doe coding"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-primary/20 object-cover shadow-xl"
                data-ai-hint="man coding"
              />
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 transition-transform duration-500 group-hover:scale-105"></div>
              <div className="absolute inset-0 animate-pulse rounded-full border-2 border-primary/30"></div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: 'Senior Developer',
      company: 'Tech Corp | 2020 - Present',
      description: 'Leading development of new features for a large-scale web application, mentoring junior developers, and improving code quality and performance.',
    },
    {
      role: 'Web Developer',
      company: 'Web Solutions | 2018 - 2020',
      description: 'Developed and maintained client websites using modern web technologies, focusing on responsive design and user experience.',
    },
  ];

  return (
    <section id="experience" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-750"
          classNameOut="animate-out fade-out duration-750 opacity-0"
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            My professional journey so far.
          </p>
        </AnimatedOnScroll>

        <div className="mx-auto grid max-w-3xl gap-8">
          {experiences.map((item, index) => (
            <AnimatedOnScroll
              key={item.role}
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-750"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-750 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="flex flex-col md:flex-row items-start gap-6 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{item.role}</h3>
                  <p className="text-muted-foreground mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
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
      degree: 'B.S. in Computer Science',
      institution: 'University of Technology',
      description: 'Focused on software development and artificial intelligence. Completed a final year project on machine learning algorithms.',
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Code Academy',
      description: 'An intensive program covering full-stack development with a focus on MERN stack (MongoDB, Express, React, Node.js).',
    },
    {
      degree: '12th Grade - Senior Secondary',
      institution: 'Central High School',
      description: 'Completed studies with a focus on Physics, Chemistry, and Mathematics.',
    },
    {
      degree: '10th Grade - Secondary',
      institution: 'Public School',
      description: 'Established a strong academic foundation across all core subjects.',
    },
  ];

  return (
    <section id="education" className="w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-750"
          classNameOut="animate-out fade-out duration-750 opacity-0"
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
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-750"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-750 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="flex flex-col md:flex-row items-start gap-6 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{item.degree}</h3>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
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
      { name: 'JavaScript', icon: <JavaScriptIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
    ],
  },
  {
    category: "Frontend Frameworks & Libraries",
    skills: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextjsIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: 'Node.js', icon: <NodejsIcon /> },
      { name: 'Firebase', icon: <FirebaseIcon /> },
      { name: 'PostgreSQL', icon: <PostgreSqlIcon /> },
      { name: 'MongoDB', icon: <MongoDbIcon /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: 'Git', icon: <GitIcon /> },
      { name: 'GitHub', icon: <Github className="h-full w-full" /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Figma', icon: <FigmaIcon /> },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: 'Communication', icon: <MessageSquareText className="h-full w-full" /> },
      { name: 'Teamwork', icon: <Users className="h-full w-full" /> },
      { name: 'Problem Solving', icon: <Puzzle className="h-full w-full" /> },
      { name: 'Creativity', icon: <Lightbulb className="h-full w-full" /> },
    ]
  }
];

function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-750"
          classNameOut="animate-out fade-out duration-750 opacity-0"
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
                classNameIn="animate-in fade-in slide-in-from-bottom-8 duration-750"
                classNameOut="animate-out fade-out slide-out-to-bottom-8 duration-750 opacity-0"
              >
                <h3 className="font-headline text-2xl font-semibold mb-8 text-center">{category.category}</h3>
              </AnimatedOnScroll>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category.skills.map((skill, skillIndex) => (
                    <AnimatedOnScroll
                      key={skill.name}
                      classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-750"
                      classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-750 opacity-0"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                      className="h-full"
                    >
                      <Card 
                        className="flex h-full flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:-translate-y-2"
                      >
                        <div className="flex h-16 w-16 items-center justify-center text-primary">
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
          classNameIn="animate-in fade-in duration-750"
          classNameOut="animate-out fade-out duration-750 opacity-0"
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
          classNameIn="animate-in fade-in duration-750"
          classNameOut="animate-out fade-out duration-750 opacity-0"
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </AnimatedOnScroll>
        
        <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-2">
            <AnimatedOnScroll
                classNameIn="animate-in fade-in slide-in-from-left-16 duration-750 delay-200"
                classNameOut="animate-out fade-out slide-out-to-left-16 duration-750 opacity-0"
                className="flex flex-col justify-center space-y-8"
            >
                <div>
                    <h3 className="font-headline text-2xl font-semibold">Contact Details</h3>
                    <div className="mt-4 space-y-4">
                         <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                            <Mail className="h-6 w-6 text-primary transition-colors group-hover:text-primary/80"/>
                            <span className="text-lg text-muted-foreground transition-colors group-hover:text-foreground">hello@example.com</span>
                         </a>
                    </div>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl font-semibold">Follow Me Online</h3>
                    <div className="flex gap-4 mt-4">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Twitter" target="_blank" className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="GitHub" target="_blank" className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="LinkedIn" target="_blank" className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll
                classNameIn="animate-in fade-in slide-in-from-right-16 duration-750 delay-400"
                classNameOut="animate-out fade-out slide-out-to-right-16 duration-750 opacity-0"
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
          <span className="font-headline text-lg font-bold">CodeCraft Folio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

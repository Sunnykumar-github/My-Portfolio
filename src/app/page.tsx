import { Briefcase, Code, Github, GraduationCap, Linkedin, Mail, Palette, Server, Twitter } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header';
import { ProjectShowcase } from '@/components/project-showcase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ServicesSection />
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
            John Doe
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-400">
            A creative Full-Stack Developer crafting modern, responsive, and
            performant web applications.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary py-20 md:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-4 animate-in fade-in slide-in-from-left-16 duration-1000">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I'm a passionate developer with a knack for building beautiful and functional user interfaces. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the browser. I'm a lifelong learner, always excited to explore new technologies and improve my craft.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring the outdoors, contributing to open-source projects, or brewing the perfect cup of coffee.
          </p>
          <div className="space-y-8 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">Experience</h3>
                  <p className="text-muted-foreground">3+ years as a professional developer, working with startups and established companies to create impactful digital experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">B.S. in Computer Science from the University of Technology, where I honed my problem-solving and analytical skills.</p>
                </div>
              </div>
          </div>
        </div>
        <div className="relative hidden items-center justify-center animate-in fade-in slide-in-from-right-16 duration-1000 md:flex">
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
        </div>
      </div>
    </section>
  );
}

function ProjectSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <ProjectShowcase />
      </div>
    </section>
  );
}

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Crafting beautiful, responsive, and performant user interfaces with modern frameworks like React and Next.js.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs using Node.js, Python, and other technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences from wireframes to high-fidelity mockups using Figma.',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="w-full bg-secondary py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I offer a range of services to help you build your next digital product.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="text-center transition-transform duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">CodeCraft Folio</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:hello@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

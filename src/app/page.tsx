
import { Briefcase, Code, Database, GitMerge, Github, GraduationCap, Linkedin, Mail, Palette, Server, Smartphone, Twitter } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header';
import { ProjectShowcase } from '@/components/project-showcase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { AnimatedOnScroll } from '@/components/animated-on-scroll';

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
          classNameIn="animate-in fade-in slide-in-from-left-16 duration-1000"
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
          classNameIn="animate-in fade-in slide-in-from-right-16 duration-1000 delay-200"
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
          classNameIn="animate-in fade-in duration-1000"
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
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
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
          classNameIn="animate-in fade-in duration-1000"
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
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
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

const skills = [
  {
    icon: Code,
    title: 'Frontend',
    description: 'React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3',
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Node.js, Express, Python, Flask, Firebase, SQL, NoSQL',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, User Research, Wireframing, Prototyping',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    description: 'React Native, Responsive Design',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, MongoDB, Firebase Firestore',
  },
  {
    icon: GitMerge,
    title: 'DevOps & Tools',
    description: 'Git, GitHub, Docker, Vercel, CI/CD',
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-750 opacity-0"
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A look at the technologies and tools I work with.
          </p>
        </AnimatedOnScroll>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <AnimatedOnScroll
              key={skill.title}
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-750 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
              className="h-full"
            >
              <Card 
                className="text-center transition-transform duration-300 hover:-translate-y-2 h-full"
              >
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 font-headline">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </AnimatedOnScroll>
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
          classNameIn="animate-in fade-in duration-1000"
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
                classNameIn="animate-in fade-in slide-in-from-left-16 duration-1000 delay-200"
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
                classNameIn="animate-in fade-in slide-in-from-right-16 duration-1000 delay-400"
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

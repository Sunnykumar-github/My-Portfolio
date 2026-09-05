"use client";

import { useState, useEffect } from 'react';
import { Briefcase, Code, Github, GraduationCap, Linkedin, Mail, Twitter, Lightbulb, MessageSquareText, Puzzle, Users, ArrowRight, Phone, FileDown, Database, DatabaseZap, CalendarDays, FileText, Mic, Clock } from 'lucide-react';
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
import { ExperienceSection } from '@/components/experience';
import { LeadershipSection } from "@/components/leadership";
import { AchievementsSection } from "@/components/achievements";
import { TestimonialsSection } from "@/components/testimonials";
import { WhyHireMeSection } from "@/components/why-hire-me";

const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full">
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
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
    <path d="M11.996 0L2.333 5.583v11.162l9.663 5.583 9.667-5.583V5.583L11.996 0zM12 1.12l8.529 4.922v9.914l-8.529 4.924-8.53-4.924V6.042L12 1.12z" />
  </svg>
)

const PostgreSqlIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>PostgreSQL</title>
    <path d="M11.91 21.391c-2.31 0-3.33-1.12-3.33-3.131V8.5h2.3v9.551c0 .41.13.75.46.75s.46-.34.46-.75V8.5h2.31v9.76c0 2.01-1.02 3.13-3.2 3.13zm-5.7-12.89v9.75c0 .7.31 1.25.91 1.25s.91-.55.91-1.25V8.5h2.3v9.55c0 2.01-1.02 3.13-3.2 3.13s-3.22-1.12-3.22-3.13V8.5h2.3zm12.51 3.9c0-1.87-.93-2.92-2.79-2.92-1.03 0-1.7.35-2.22.95v-.82H14.4v9.64h2.3v-4.3c.52-.6 1.19-.95 2.22-.95.84 0 1.39.42 1.39 1.48v3.72h2.3v-5.8h-.02z" />
  </svg>
)

const MongoDbIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor"><title>MongoDB</title><path d="M15.93 24a8.17 8.17 0 01-6.42-3.09c-3.1-3.6-3.72-8.37-1.86-12.28a10.42 10.42 0 019-6.39c2.34 0 4.56.78 6.39 2.25 1.2 1.05 2.1 2.49 2.64 4.14.75 2.52.39 5.25-1.08 7.53-1.2 1.95-3.12 3.51-5.46 4.35-1.8.69-3.75 1.05-5.73 1.05a8.23 8.23 0 01-1.5-.12zm-3.6-11.64c1.26-1.08 1.89-2.58 1.53-4.08-.39-1.5-1.5-2.67-2.94-3-1.44-.39-3.03.12-4.02 1.2-.99 1.11-1.11 2.7-0.33 4.02.72 1.32 2.13 2.19 3.63 2.19.45 0 .9-.06 1.35-.27a.6.6 0 00-.21 1.08c1.32.9 3.06.63 4.02-.69.96-1.29.69-3.03-.69-4.02-1.35-.96-3.09-.69-4.02.66a.6.6 0 00.9.96c.6-.63 1.5-.75 2.19-.21.69.51.93 1.41.45 2.1-.48.69-1.38.93-2.1.45a.6.6 0 00-.72.3c-.06.33.15.63.48.69.93.15 1.83-.18 2.49-.81.63-.66.81-1.59.42-2.37a.6.6 0 00-.99-.39c-.6.42-.81 1.2-.51 1.83a.6.6 0 00.96.42z" /></svg>
)

const GitIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Git</title>
    <path d="M23.996 11.233c-.05-.499-.228-.964-.5-1.378l-4.62-7.14c-.542-.838-1.554-1.3-2.61-1.3H7.728c-1.056 0-2.068.462-2.61 1.3l-4.62 7.14c-.272.414-.45.879-.5 1.378a3.172 3.172 0 0 0 .15 1.536l7.73 10.966c.517.733 1.488 1.156 2.5 1.156h.002c1.012 0 1.983-.423 2.5-1.156l7.73-10.966a3.172 3.172 0 0 0 .15-1.536zM12 18.067l-5.15-7.303h3.54a.615.615 0 0 0 .61-.61V6.93a.616.616 0 0 0-.61-.61h-2.9L12 2.133l4.57 4.187h-2.9a.616.616 0 0 0-.61.61v3.223a.615.615 0 0 0 .61.61h3.54l-5.15 7.303z" />
  </svg>
)

const DockerIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Docker</title>
    <path d="M22.152 7.27c-1.35-1.332-3.21-2.22-5.19-2.22H7.038c-1.98 0-3.84 1.092-5.19 2.22-1.14 1.116-1.848 2.7-1.848 4.392v4.56c0 1.692.708 3.276 1.848 4.392 1.35 1.128 3.21 2.22 5.19 2.22h9.924c1.98 0 3.84-1.092 5.19-2.22 1.14-1.116 1.848 2.7 1.848-4.392v-4.56c0-1.692-.708-3.48-1.848-4.392zm-1.056 8.82c-.9.9-2.316 1.548-3.876 1.548H7.314c-1.56 0-2.976-.648-3.876-1.548a4.108 4.108 0 0 1-1.38-3.264v-1.14c.237-.06.48-.108.708-.18.72-.252 1.417-.588 2.064-.996.36-.228.696-.48.996-.756.24-.216.516-.42.756-.636.228-.204.456-.408.672-.6.204-.192.408-.384.588-.576.228-.24.432-.492.636-.756.192-.252.36-.528.504-.816.144-.288.264-.588.36-.9.084-.3.156-.612.192-.936H11.4v4.5h2.25v-4.5h1.116c.036.324.108.636.192.936.096.312.216.612.36.9.144.288.312.564.504.816.204.264.408.516.636.756.18.192.384.384.588.576.216.192.444.396.672.6.24.216.516.42.756.636.3.276.636.528.996.756.648.408 1.344.744 2.064.996.228.072.471.12.708.18v1.14c0 1.224-.48 2.388-1.38 3.264zM4.5 10.5H3V9h1.5zm3 0H6V9h1.5zm3 0H9V9h1.5zm3 0H12V9h1.5z" />
  </svg>
)

const FigmaIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Figma</title>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.25 12a3.75 3.75 0 0 1 3.75-3.75V12h-3.75zm0 3.75h3.75v3.75a3.75 3.75 0 0 1-3.75-3.75zM12 8.25A3.75 3.75 0 0 1 15.75 12h-3.75V8.25zm0 3.75h3.75a3.75 3.75 0 0 1-3.75 3.75v-3.75zM8.25 8.25a3.75 3.75 0 0 1 3.75-3.75v3.75h-3.75z" />
  </svg>
)

const CIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>C</title>
    <path d="M12.28.026C5.55-.22 0 5.074 0 11.83c0 6.63 5.373 12 12 12s12-5.373 12-12c0-6.756-5.55-12.05-12.28-11.804zm.006 21.575c-5.403 0-9.784-4.38-9.784-9.782S6.822 2.235 12.227 2.235c5.38 0 9.79 4.29 9.85 9.64H17.84c-.06-3.05-2.52-5.51-5.57-5.51-3.12 0-5.65 2.53-5.65 5.65s2.53 5.65 5.65 5.65c3.05 0 5.51-2.46 5.57-5.51h4.237c-.06 5.35-4.47 9.64-9.85 9.64z" />
  </svg>
)

const CppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>C++</title>
    <path d="M14.619 1.287L4.053 8.412v7.176l10.566 7.125 10.565-7.125V8.412L14.619 1.287zM14.21 3.86l8.23 5.545v3.488l-4.223 2.848v-3.48l-4.007-2.7-4.008 2.7v3.48l-4.222-2.848V9.405l8.23-5.545z M19.743 14.505h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5zm3 0h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5z" />
  </svg>
)

const JavaIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Java</title>
    <path d="M17.16 19.34c-.26 1.48-1.03 2.2-2.14 2.39a2.76 2.76 0 01-2.4-1.2l.2-.1c.56.55 1.3.8 1.95.53.86-.33.9-1.2.93-1.83a22.5 22.5 0 00-.7-4.88c-.62-2.14-1.2-3.8-1.2-3.8s-.03.04-.1.17c-.52 1.05-1.14 2.27-1.14 2.27s-1.8-2.9-1.8-2.9C10.7 8.04 10.6 6.4 10.6 6.4c1.6 0 2.25.7 2.25.7s.17-.37.35-.74S14.15 5 14.15 5s.4.5.65 1.1c.32.74.3 1.32.3 1.32s.67-1.14 1.32-2.25c.65-1.1 1.05-1.29 1.05-1.29s-.4 1.29-.4 2.28c0 .99.17 1.83.17 1.83s.77-1.37 1.17-1.87c.4-.5.56-.63.56-.63s-.68.87-.93 1.63c-.25.76.2 1.4.3 1.5.34.4.65 1.14.65 1.14s-.73-1.63-1.72-2.67M8.3 19.4c0-2.3 1.2-3.13 1.9-3.95.7-.8 1.05-1.32 1.05-2.06 0-.8-.43-1.31-.96-1.58-.53-.26-1.12-.23-1.5.06-.38.3-.58.73-.6 1.14a16.8 16.8 0 01-.1 1.76c0 .7-.2 1.35-1.4 1.35-1.1 0-1.42-.6-1.42-1.3s0-1.1.03-1.6c.1-1.7.9-2.73 2.5-2.73a2.43 2.43 0 012.3 1.67c.1.34.13.7.13 1.02 0 1.1-.5 2.05-1.2 2.9-.68.83-1.9 1.8-1.9 4.14" />
  </svg>
)

const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Python</title>
    <path d="M11.979 16.989c-2.339 0-4.25-1.911-4.25-4.25s1.911-4.25 4.25-4.25h4.25v2.125h-4.25c-1.17 0-2.125.955-2.125 2.125s.955 2.125 2.125 2.125v4.25H11.979zm.021-12.739c2.339 0 4.25 1.911 4.25 4.25s-1.911 4.25-4.25 4.25h-4.25V8.25h4.25c1.17 0 2.125-.955 2.125-2.125S13.17 4 11.999 4V0h.001zM11.999 20h.021v4h-4.271v-4.25h4.25zm-.021 0v-4.25h-4.25V20h4.25z" />
  </svg>
)

const HtmlIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>HTML5</title>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.42-.003.522 6.173h8.926l-.336 3.774-2.637.734-2.64-1.18.13-1.444h-2.133l-.264 2.955L11.995 18l5.24-.002.502-5.625h-10.21z" />
  </svg>
)

const VscodeIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Visual Studio Code</title>
    <path d="M23.15 2.587L18.428.262a.803.803 0 0 0-.802.132l-5.463 4.54-4.21-3.498a.803.803 0 0 0-.946-.04L.842 6.752a.803.803 0 0 0-.132.802l3.498 7.428-3.498 7.428a.803.803 0 0 0 .132.802l6.165 5.347a.803.803 0 0 0 .946-.04l4.21-3.498 5.463 4.54a.803.803 0 0 0 .802.132l4.723-2.325a.803.803 0 0 0 .453-.722V3.309a.803.803 0 0 0-.453-.722zM15.42 16.59l-4.59-3.815 4.59-3.815V16.59zm-9.33-4.59l3.498-7.428 3.498 7.428-3.498 7.428-3.498-7.428z" />
  </svg>
)

const PostmanIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Postman</title>
    <path d="M20.25 12a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0Z M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Z M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z m-2.062 2.625c.414-.415.96-.656 1.547-.656h1.03c.825 0 1.5.675 1.5 1.5v1.031c0 .587-.24 1.133-.656 1.547l-1.032 1.03c-.414.415-.96.657-1.546.657H9.75c-.825 0-1.5-.675-1.5-1.5V9.75c0-.825.675-1.5 1.5-1.5h.75v1.125h-1.03c-.206 0-.375.169-.375.375v1.031c0 .206.169.375.375.375h1.031c.206 0 .375-.169.375-.375V9.375Z" />
  </svg>
)

const PowerBiIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Microsoft Power BI</title>
    <path d="M12.31 0H2.47v24h9.84v-7.92h7.22V8.45h-7.22V0zM3.86 22.6V1.4h7.06v7.05h7.22v6.62H10.9v7.53H3.85z" />
  </svg>
)

const MsOfficeIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Microsoft Office</title>
    <path d="M2.872 3.51l-.707.396v16.188l.707.396 9.47-5.467V3.51l-9.47-5.467zm.83 1.053l7.922 4.573v5.308l-7.922 4.573V4.563zM14.653 2.11l-3.048 1.76v16.26l3.048 1.76 9.47-5.467V7.577l-9.47-5.467zm.83 15.59l-1.328-.767V5.067l1.328-.767 7.922 4.573v6.303l-7.922 4.573z" />
  </svg>
)

const ExpressIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>Express.js</title>
    <path d="M24 18.52h-3.45l-2.28-3.03-2.28 3.03H12V5.48h3.45v6.45l2.28-3.03L20.01 12v-6.5h3.99v13.02zM10.17 5.48H0V8.5h8.55v3.03H1.62v3.04h6.93v3.02H0v3.04h10.17z" />
  </svg>
)

const MySqlIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
    <title>MySQL</title>
    <path d="M11.536 14.391c-1.087 0-2.219.02-3.326.02-1.01 0-1.608.532-1.608 1.63v1.448c0 1.078.617 1.629 1.608 1.629h2.321c.951 0 1.528-.488 1.528-1.428v-2.05c0-.498-.24-.849-.523-.849zm-2.219 4.298H7.01c-.56 0-.749-.24-.749-.789v-.93c0-.55.188-.789.749-.789h2.316c.54 0 .75.24.75.789v.93c0 .55-.21.789-.75.789zm8.56-4.298c-1.087 0-2.219.02-3.326.02-1.01 0-1.608.532-1.608 1.63v1.448c0 1.078.617 1.629 1.608 1.629h2.32c.952 0 1.529-.488 1.529-1.428v-2.05c0-.498-.24-.849-.523-.849zm-2.218 4.298h-1.307c-.56 0-.749-.24-.749-.789v-.93c0-.55.188-.789.749-.789h2.316c.54 0 .75.24.75.789v.93c0 .55-.21.789-.75.789h-.56v.001zM12 4.414l-.354.354.354.353.354-.353L12 4.414zm2.474 2.475l-2.12 2.121-2.122-2.121L8.06 8.536l2.121-2.121 1.819 1.818L13.646 6.59l-2.353-2.354a.5.5 0 00-.708 0L3.13 11.691a.5.5 0 000 .707l2.354 2.354 1.646-1.647-1.818-1.818 2.121-2.121 2.121 2.121-2.12 2.121-1.648-1.647-2.354 2.354a.5.5 0 000 .707l2.354 2.354a.5.5 0 00.707 0l7.445-7.445a.5.5 0 000-.707l-2.354-2.354-1.646 1.647zm-5.463 3.535l-.707-.707L12 6.536l.707.707-3.696 3.696z" />
  </svg>
)

function TypingEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const textToType = `Sunny Kumar !`;
  const typingPeriod = 150;
  const deletingPeriod = 75;
  const pausePeriod = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        // Deleting
        timer = setTimeout(() => {
          setText(prev => prev.substring(0, prev.length - 1));
        }, deletingPeriod);
      } else {
        // Finished deleting, start typing again after a pause
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500); // Pause before re-typing
      }
    } else { // Typing
      if (text.length < textToType.length) {
        // Typing
        timer = setTimeout(() => {
          setText(prev => textToType.substring(0, prev.length + 1));
        }, typingPeriod);
      } else {
        // Finished typing, pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pausePeriod);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);


  return (
    <h1 className="font-headline text-[1.4rem] min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 flex flex-row flex-nowrap justify-center lg:justify-start items-center gap-1.5 md:gap-3 w-full min-h-[60px] md:min-h-0 overflow-hidden">
      <span className="whitespace-nowrap flex-shrink-0">Hi, I am</span>
      <span className="relative whitespace-nowrap flex-shrink-0">
        &nbsp;{text}
        <span className="text-primary animate-pulse ml-0.5">|</span>
      </span>
    </h1>
  );
}


export default function Home() {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="flex-1 w-full md:w-[calc(100%-16rem)] md:ml-64 pt-16 md:pt-0 flex flex-col min-h-screen">
        <main className="flex-1 w-full flex flex-col">
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <MyWorkSection />
          <LeadershipSection />
          <AchievementsSection />
          <WhyHireMeSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative md:h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden py-12 md:py-0">
      <div className="absolute inset-0 z-[-1] bg-background">
        <div
          className="absolute inset-0 opacity-50 dark:opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(var(--primary) / 0.4), transparent 80%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <Badge variant="secondary" className="flex items-center gap-2 pl-2 pr-3 py-1 hover:bg-secondary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available to Work
            </Badge>
          </div>
          <TypingEffect />
          <div className="mt-6 flex flex-col items-center lg:items-start max-w-xl space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-400">
            <p className="text-xl text-primary font-medium tracking-wide">Bridging the gap between raw data and strategic vision.</p>
            <p className="text-lg text-muted-foreground sm:text-lg">
              A Data Scientist & Strategist operating at the intersection of scalable machine learning, cloud engineering, and operations. I view data not just as numbers, but as the fundamental architecture for building responsive AI pipelines, optimizing complex supply-chain logistics, and driving zero-to-one product growth.
            </p>
            <p className="text-muted-foreground"><span className="font-semibold text-foreground">Current Focus:</span> Building predictive models for scalable growth.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="#my-work">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href="https://drive.google.com/file/d/172sXs06dElmjV3aRtsRddgPgK4MkhXTK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-5 w-5" />
                Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-500 mt-10 md:mt-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden border-[6px] border-secondary shadow-xl shadow-primary/20 group">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 w-full h-full"></div>
            <Image src="/about.png" alt="Sunny Kumar" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority sizes="(max-width: 1280px) 288px, 384px" />
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
            <p className="text-xl text-primary font-medium">
              Bridging the gap between raw data and strategic vision.
            </p>
            <p className="text-muted-foreground">
              A Data Scientist & Strategist who views data not just as numbers, but as the raw material for building better products, optimizing growth, and streamlining operations.
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Current Focus:</span> Building predictive models for scalable growth.
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



function EducationSection() {
  const educationItems = [
    {
      degree: 'B.Tech, Chemical Engineering',
      institution: 'Birla Institute of Technology, Mesra',
      period: '2022 – 2026',
      score: '7.37',
      scoreLabel: 'CGPA',
      scoreMax: 10,
      image: '/BIT%20Mesra.png',
      semesters: [
        { term: "Semester I", courses: ["Programming for Problem Solving", "Programming for Problem Solving Lab", "Basic Electrical Engineering", "Mathematics - I", "NSS", "Workshop Practice", "Physics", "Physics Lab", "Biological Science for Engineers", "Communication Skills I"] },
        { term: "Semester II", courses: ["Environmental Science", "Chemistry", "Chemistry Lab", "Basics of Electronics & Communication", "Electronics & Communication Lab", "Mathematics - II", "NSS", "Basics of Mechanical Engineering", "Engineering Graphics"] },
        { term: "Semester III", courses: ["Thermodynamics", "NSS", "Fluid Mechanics", "Chemical Process Calculations", "Heat Transfer Operations", "Numerical Methods", "UHV2: Understanding Harmony", "Numerical Methods Laboratory"] },
        { term: "Semester IV", courses: ["NSS", "MOOC: Education for Sustainable Development", "Mechanical Operations", "Mass Transfer Operation - I", "Chemical Reaction Engineering - I", "Material Science & Engineering", "Electrical Engineering Lab", "Chemical Engineering Lab -I", "Waste Management"] },
        { term: "Semester V", courses: ["MOOC: Psychology of Learning", "Mass Transfer Operation-II", "Chemical Reaction Engineering-II", "Project Engineering & Economics", "Chemical Process Technology", "Fluid Solid Operation", "Computer Aided Process Engineering Lab", "Chemical Engineering Lab -II", "Communications Skills - II"] },
        { term: "Semester VI", courses: ["MOOC: Conservation Economics", "Transport Phenomena", "Process Control & Instrumentation", "Petrochemicals Technology", "Computational Fluid Dynamics", "Summer Training", "Design Lab", "Chemical Engineering Lab - III"] },
        { term: "Semester VII", courses: ["MOOC: Wild Life Ecology", "Process Modeling, Simulation & Optimization", "Chemical Process Intensification", "Polymer Composite", "Constitution of India", "Minor Project", "Process Control & Instrumentation Lab", "Plant Design"] },
        { term: "Semester VIII", courses: ["Internship: Category Associate at Urban Company"] }
      ],
      description: 'Specializing at the intersection of chemical engineering and data-driven solutions — from simulation to deployment.',
      badge: 'Completed',
    },
    {
      degree: 'BS in Data Science and Applications (Foundational Level)',
      institution: 'Indian Institute of Technology Madras',
      period: '2023',
      score: '7.88',
      scoreLabel: 'CGPA',
      scoreMax: 10,
      image: '/IIT%20Madras.png',
      coursework: ['Computational Thinking', 'Programming in Python', 'English I & II', 'Mathematics for Data Science I & II', 'Statistics for Data Science I & II', 'DSA'],
      description: 'Successfully completed the Foundational Level in Programming and Data Science.',
      badge: 'Completed',
    },
    {
      degree: 'Senior School Certificate Examination - Class XII, CBSE',
      institution: 'DAV Public School, Tapin North, Ramgarh',
      period: '2021',
      score: '95.4',
      scoreLabel: 'Percentage',
      scoreMax: 100,
      image: '/DAV.png',
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'Informatics Practices'],
      description: 'Graduated with distinction. Strong foundation in sciences with early exposure to programming.',
    },
    {
      degree: 'Secondary School Examination - Class X, CBSE',
      institution: 'DAV Public School, Tapin North, Ramgarh',
      period: '2019',
      score: '96.0',
      scoreLabel: 'Percentage',
      scoreMax: 100,
      image: '/DAV.png',
      coursework: ['Mathematics', 'Science', 'Social Studies', 'Computer Science'],
      description: 'Developed analytical thinking and a curiosity for problem-solving from an early age.',
    },
  ];

  return (
    <section id="education" className="w-full py-20 md:py-32 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-12 text-center"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Academic Journey</p>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A progressive educational path shaping engineering expertise and analytical precision.
          </p>
        </AnimatedOnScroll>

        <div className="mx-auto grid max-w-4xl gap-8">
          {educationItems.map((item, index) => (
            <AnimatedOnScroll
              key={item.degree}
              classNameIn="animate-in fade-in slide-in-from-bottom-16 duration-1000"
              classNameOut="animate-out fade-out slide-out-to-bottom-16 duration-1000 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="flex flex-col md:flex-row items-stretch gap-0 overflow-hidden group border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                <div className="md:w-1/3 bg-muted/50 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                  <div className="relative z-10 w-24 h-24 mb-4 rounded-full bg-white flex items-center justify-center p-2 shadow-sm border border-border group-hover:scale-105 transition-transform duration-500">
                    <img src={item.image} alt={item.institution} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-semibold text-foreground relative z-10">{item.institution}</h3>
                  <Badge variant="outline" className="mt-3 relative z-10">{item.period}</Badge>
                </div>

                <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      {item.badge && <Badge className="mb-3">{item.badge}</Badge>}
                      <h3 className="font-headline text-xl md:text-2xl font-bold leading-tight">{item.degree}</h3>
                    </div>
                    {item.score && (
                      <div className="flex flex-col sm:items-end shrink-0">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.scoreLabel}</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-extrabold text-primary">{item.score}</span>
                          <span className="text-sm font-medium text-muted-foreground">{item.scoreMax === 10 ? '/ 10.0' : '%'}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground italic mb-6 border-l-2 border-primary/30 pl-3">
                    {item.description}
                  </p>

                  {item.semesters && (
                    <div className="mt-auto">
                      <details className="group/details border border-border rounded-lg bg-muted/30 overflow-hidden [&>summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-sm hover:bg-muted transition-colors outline-none list-none text-muted-foreground hover:text-foreground">
                          View Full B.Tech Curriculum
                          <svg className="w-5 h-5 text-muted-foreground group-open/details:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div className="flex flex-col gap-5 p-5 border-t border-border bg-muted/10 max-h-[350px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                          {item.semesters.map(sem => (
                            <div key={sem.term}>
                              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-2">{sem.term}</span>
                              <div className="flex flex-wrap gap-2">
                                {sem.courses.map(c => (
                                  <span key={c} className="text-xs px-2.5 py-1 rounded-md border border-border bg-background text-muted-foreground shadow-sm leading-tight">
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}

                  {item.coursework && (
                    <div className="mt-auto">
                      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map(c => (
                          <span key={c} className="text-xs px-2.5 py-1 rounded-md border border-primary/20 text-primary bg-primary/5">
                            {c}
                          </span>
                        ))}
                      </div>
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
    category: "Languages & Data",
    skills: [
      { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full object-contain" />, className: "" },
      { name: 'SQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-full h-full object-contain" />, className: "" },
      { name: 'PostgreSQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-full h-full object-contain" />, className: "" },
      { name: 'MongoDB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-full h-full object-contain" />, className: "" },
      { name: 'Snowflake', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" alt="Snowflake" className="w-full h-full object-contain" />, className: "" },
      { name: 'BigQuery', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="BigQuery" className="w-full h-full object-contain" />, className: "" },
    ],
  },
  {
    category: "Full-Stack Development",
    skills: [
      { name: 'Next.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-full h-full object-contain bg-white rounded-full p-0.5" />, className: "" },
      { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full object-contain" />, className: "" },
      { name: 'Tailwind CSS', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-full h-full object-contain" />, className: "" },
      { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full object-contain" />, className: "" },
      { name: 'HTML', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-full h-full object-contain" />, className: "" },
      { name: 'CSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-full h-full object-contain" />, className: "" },
      { name: 'API Integration', icon: <span className="text-3xl">🔌</span>, className: "text-foreground" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: 'Scikit-Learn', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" className="w-full h-full object-contain" />, className: "" },
      { name: 'TensorFlow', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-full h-full object-contain" />, className: "" },
      { name: 'PyTorch', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-full h-full object-contain" />, className: "" },
      { name: 'Pandas', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-full h-full object-contain" />, className: "" },
      { name: 'NumPy', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-full h-full object-contain" />, className: "" },
    ],
  },
  {
    category: "AI",
    skills: [
      { name: 'LLMs', icon: <span className="text-3xl">🤖</span>, className: "text-foreground" },
      { name: 'LangChain', icon: <span className="text-4xl leading-none">🦜</span>, className: "" },
      { name: 'HuggingFace', icon: <span className="text-3xl">🤗</span>, className: "text-foreground" },
      { name: 'Vector DBs', icon: <span className="text-3xl">🗄️</span>, className: "text-foreground" },
      { name: 'Prompt Engineering', icon: <span className="text-3xl">✍️</span>, className: "text-foreground" },
      { name: 'RAG Pipelines', icon: <span className="text-3xl">⚙️</span>, className: "text-foreground" },
    ],
  },
  {
    category: "Analytics & BI",
    skills: [
      { name: 'Power BI', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-full h-full object-contain" />, className: "" },
      { name: 'Tableau', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" className="w-full h-full object-contain" />, className: "" },
      { name: 'Excel', icon: <span className="text-4xl leading-none" style={{ display: 'inline-block' }}>📊</span>, className: "" },
      { name: 'Looker', icon: <img src="https://cdn.worldvectorlogo.com/logos/looker-1.svg" alt="Looker" className="w-full h-full object-contain" />, className: "" },
    ],
  },
  {
    category: "Cloud & Data Engineering",
    skills: [
      { name: 'Databricks', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png" alt="Databricks" className="w-full h-full object-contain" />, className: "" },
      { name: 'PySpark', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" alt="PySpark" className="w-full h-full object-contain" />, className: "" },
      { name: 'AWS', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-full h-full object-contain" />, className: "" },
      { name: 'Airflow', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" alt="Airflow" className="w-full h-full object-contain" />, className: "" },
      { name: 'Docker', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full object-contain" />, className: "" },
      { name: 'Supabase', icon: <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3621 11.1444H12.983L18.4231 1.70617C18.6669 1.28291 18.2711 0.771966 17.8093 0.902781L2.63787 5.20162C2.10093 5.3537 1.78918 5.92349 1.95687 6.4442L4.01695 12.8556H12.396L6.95593 22.2938C6.7121 22.7171 7.108 23.228 7.56976 23.0972L22.7412 18.7984C23.2781 18.6463 23.5899 18.0765 23.4222 17.5558L21.3621 11.1444Z" fill="#3ECF8E" /></svg>, className: "" },
      { name: 'n8n', icon: <img src="https://avatars.githubusercontent.com/u/45487711?s=200&v=4" alt="n8n" className="w-full h-full object-contain rounded-full" />, className: "" },
      { name: 'GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-full h-full object-contain bg-white rounded-full" />, className: "" },
    ],
  },
  {
    category: "Strategy & Execution",
    skills: [
      { name: 'A/B Testing', icon: <span className="text-3xl">🧪</span>, className: "text-foreground" },
      { name: 'Predictive Modeling', icon: <span className="text-3xl">📈</span>, className: "text-foreground" },
      { name: 'Growth Analytics', icon: <span className="text-3xl">🚀</span>, className: "text-foreground" },
      { name: 'Product Strategy', icon: <span className="text-3xl">🧭</span>, className: "text-foreground" },
      { name: 'Market Research', icon: <span className="text-3xl">🔍</span>, className: "text-foreground" },
      { name: 'Stakeholder Mgt', icon: <span className="text-3xl">🤝</span>, className: "text-foreground" },
    ],
  },
  {
    category: "Product & Operations",
    skills: [
      { name: 'Jira', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="w-full h-full object-contain" />, className: "" },
      { name: 'Figma', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-full h-full object-contain" />, className: "" },
      { name: 'Apps Script', icon: <span className="text-3xl">📜</span>, className: "text-foreground" },
      { name: 'Notion', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="w-full h-full object-contain" />, className: "" },
      { name: 'Amplitude', icon: <span className="text-3xl">📈</span>, className: "text-foreground" },
      { name: 'Mixpanel', icon: <span className="text-3xl">📊</span>, className: "text-foreground" },
      { name: 'Zapier', icon: <span className="text-3xl">⚡</span>, className: "text-foreground" },
      { name: 'Google Analytics', icon: <span className="text-3xl">🌐</span>, className: "text-foreground" },
    ],
  },
  {
    category: "Supply Chain Analytics",
    skills: [
      { name: 'OTIF & Fill Rates', icon: <span className="text-3xl">🚚</span>, className: "text-foreground" },
      { name: 'Quadratic', icon: <span className="text-3xl">🧮</span>, className: "text-foreground" },
      { name: 'Operations Research', icon: <span className="text-3xl">📈</span>, className: "text-foreground" },
      { name: 'Logistics Optimization', icon: <span className="text-3xl">🗺️</span>, className: "text-foreground" },
      { name: 'Inventory Analytics', icon: <span className="text-3xl">📊</span>, className: "text-foreground" },
      { name: 'Fleet Management', icon: <span className="text-3xl">🚐</span>, className: "text-foreground" },
    ],
  },
  {
    category: "Spoken Languages",
    skills: [
      { name: 'English', level: 'Fluent', icon: <img src="https://flagcdn.com/gb.svg" alt="GB Flag" className="w-full h-full object-contain rounded-sm" />, className: "" },
      { name: 'Hindi', level: 'Native', icon: <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-full h-full object-contain rounded-sm" />, className: "" },
      { name: 'Sanskrit', level: 'Beginner', icon: <span className="text-3xl">🕉️</span>, className: "text-foreground" },
    ],
  }
];

function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-secondary py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll
          classNameIn="animate-in fade-in duration-1000"
          classNameOut="animate-out fade-out duration-1000 opacity-0"
          className="mb-8 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A look at the technologies, tools, and abilities I bring to the table.
          </p>
        </AnimatedOnScroll>

        <div className="space-y-8">
          {skillsData.map((category) => (
            <div key={category.category}>
              <AnimatedOnScroll
                classNameIn="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100"
                classNameOut="animate-out fade-out slide-out-to-bottom-8"
              >
                <h3 className="font-headline text-xl font-semibold mb-4 text-center">{category.category}</h3>
              </AnimatedOnScroll>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                {category.skills.map((skill, skillIndex) => (
                  <AnimatedOnScroll
                    key={skill.name}
                    classNameIn="animate-in fade-in zoom-in-95 duration-500"
                    classNameOut="animate-out fade-out zoom-out-95"
                    style={{ animationDelay: `${200 + skillIndex * 75}ms` }}
                    className="h-full"
                  >
                    <Card
                      className="flex h-full flex-col items-center justify-center p-2 min-h-24 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20 hover:shadow-md"
                    >
                      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full p-1", skill.className)}>
                        {skill.icon}
                      </div>
                      <p className="mt-1.5 text-[10px] sm:text-xs leading-tight font-semibold">{skill.name}</p>
                      {(skill as any).level && (
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                          </span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{(skill as any).level}</span>
                        </div>
                      )}
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
                  <Mail className="h-6 w-6 text-primary transition-colors group-hover:text-primary/80" />
                  <span className="text-lg text-muted-foreground transition-colors group-hover:text-foreground">oneplussunny01@gmail.com</span>
                </a>
                <a href="tel:+919960416324" className="flex items-center gap-4 group">
                  <Phone className="h-6 w-6 text-primary transition-colors group-hover:text-primary/80" />
                  <span className="text-lg text-muted-foreground transition-colors group-hover:text-foreground">+91 9960416324</span>
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
      <div className="container mx-auto flex flex-row items-center justify-center gap-3 px-4 py-8">
        <Image src="/about.png" alt="Sunny Kumar" width={28} height={28} className="rounded-full object-cover" />
        <p className="text-secondary-foreground">
          &copy; {new Date().getFullYear()} Sunny Kumar. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}

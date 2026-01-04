import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <iframe
        className="w-full h-20 mt-10 rounded-xl"
        src="https://open.spotify.com/embed/track/0kwuKfWntoGh0EWyYb7Mpf?si=5bf424fa63bd413e"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
  
      <Experience />
      <Work />
      <About />
      {/* <Github /> */}
      <Blog />
      <CTA />
      <Setup />
    </Container>
  );
}

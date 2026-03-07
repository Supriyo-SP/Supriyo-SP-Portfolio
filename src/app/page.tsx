"use client"
import Navbar from './components/layouts/navbar';
import Hero  from './components/layouts/hero';
import Skills from './components/layouts/skills';
 
export default function Home() {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}
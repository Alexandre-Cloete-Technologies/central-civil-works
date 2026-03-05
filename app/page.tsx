
import Image from "next/image";
import { HardHat, Construction, Clock, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen  bg-ccw-black items-center justify-center p-6 relative overflow-hidden font-sans flex">
      {/* Background Decorative Elements */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#fed107 1px, transparent 1px), linear-gradient(90deg, #fed107 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Glowing Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-ccw-yellow/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-ccw-red/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col space-y-8">
        
        {/* Logo and Header Section */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="relative group">
            <div className="absolute -inset-4 bg-radial from-ccw-yellow from-30% via-transparent to-transparent rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-transparent px-8  rounded-2xl shadow-2xl flex items-center justify-center">
              <Image
                src="/images/CCW_Logo.png"
                alt="Central Civil Works Logo"
                width={280}
                height={140}
                className="object-contain"
                style={{ height: 'auto' }}
                priority
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white flex flex-col md:flex-row gap-x-8 justify-center items-center">
              CENTRAL CIVIL
              <span className="text-ccw-yellow">WORKS</span>
            </h1>
            
          </div>
        </div>

        {/* Status Card */}
        <div className="grid md:grid-cols-5 gap-8 bg-ccw-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-ccw-white/10 p-4 px-2 md:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-300">
          
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ccw-yellow/10 border border-ccw-yellow/20 text-ccw-yellow text-xs font-bold uppercase tracking-wider">
                <Construction size={14} className="animate-spin-slow" />
                In Progress
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Our new digital <br />
                <span className="text-ccw-yellow underline decoration-ccw-yellow/30 underline-offset-8">hub is coming.</span>
              </h2>
              <p className="text-ccw-white/50 text-lg max-w-lg leading-relaxed">
                Central Civil Works Pty Ltd is currently refining our online presence to better serve our clients and showcase our transformative infrastructure projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-ccw-white/5 border border-ccw-white/10 flex items-center justify-center text-ccw-yellow group-hover:bg-ccw-yellow group-hover:text-ccw-black transition-all duration-300">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-ccw-white/70 text-sm font-medium">Quality Assured</span>
               </div>
               <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-ccw-white/5 border border-ccw-white/10 flex items-center justify-center text-ccw-red group-hover:bg-ccw-red group-hover:text-ccw-white transition-all duration-300">
                    <HardHat size={20} />
                  </div>
                  <span className="text-ccw-white/70 text-sm font-medium">Safety First</span>
               </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white/5 rounded-3xl border border-white/5 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl flex items-center gap-2">
                <Clock className="text-ccw-yellow" size={20} />
                Stay Tuned
              </h3>
              <div className="space-y-4">
                <div className="w-full bg-ccw-black/40 h-2 rounded-full overflow-hidden">
                  <div className="bg-ccw-yellow w-3/4 h-full animate-progress-glow" />
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-ccw-yellow/50">Laying Foundation</span>
                  <span className="text-ccw-yellow">75%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Link href="mailto:info@ccw.com.na" className="w-full flex flex-col bg-ccw-yellow hover:bg-ccw-yellow/90 text-ccw-black font-black py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
                <Mail size={18} />
                Get in Touch
                <span className="text-xs text-muted-foreground">info@ccw.com.na</span>
              </Link>
               
              
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-center border-ccw-white/5 gap-6 animate-in fade-in duration-1000 delay-700">
         
          <p className="text-ccw-white/20 text-xs font-medium uppercase tracking-[0.2em]">
            © 2026 Central Civil Works Pty Ltd.
          </p>
        </div>
      </div>

      {/* Construction Stripes Detail */}
      <div className="fixed z-20 bottom-0 left-0 w-full h-1.5 flex overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 h-full -skew-x-[45deg] scale-150 transition-all duration-1000 ${i % 2 === 0 ? 'bg-ccw-yellow' : 'bg-transparent'}`} 
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      
    </main>
  );
}
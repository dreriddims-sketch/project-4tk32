import React, { useState, useEffect } from 'react'
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  ChevronRight, 
  Globe, 
  Layers, 
  Activity, 
  Users,
  Terminal,
  Cpu,
  Share2,
  Heart,
  Gift
} from 'lucide-react'

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[100] h-20 bg-black/40 backdrop-blur-2xl border-b border-white/5 px-8 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary shadow-lg shadow-primary/20">
        <Zap size={20} />
      </div>
      <div className="flex flex-col">
        <span className="font-black text-white text-xl italic tracking-tighter">PROJECT_4TK32</span>
        <span className="text-[8px] font-black uppercase text-primary tracking-[0.3em] -mt-1 leading-none">Global Deployment Mode</span>
      </div>
    </div>
    
    <div className="hidden md:flex items-center gap-12">
      {['Network', 'Signals', 'Archive', 'Terminal'].map(item => (
        <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all">
          {item}
        </a>
      ))}
    </div>

    <button className="btn-secondary">
      Connect Node
    </button>
  </nav>
)

const Hero = () => (
  <section className="relative pt-40 pb-20 px-8 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.05)_0%,_transparent_100%)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="relative z-10 space-y-8 max-w-5xl">
      <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Globe size={14} className="animate-spin-slow duration-[10000ms]" />
        <span className="text-[10px] font-black tracking-[0.3em] uppercase italic">Node_Deployment_Active: US-EAST-1</span>
      </div>

      <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] text-white drop-shadow-2xl">
        The NEXT PHASE OF <br />
        <span className="text-primary italic">THE NETWORK</span>
      </h1>

      <p className="max-w-xl mx-auto text-white/80 text-base md:text-xl font-medium leading-relaxed italic drop-shadow-lg">
        "Transitioning from legacy infrastructure to the 4TK32 Protocol. Distributed sovereignty at 12ms global latency."
      </p>

      <div className="pt-8 flex flex-wrap items-center justify-center gap-6">
        <button className="btn-primary flex items-center gap-3 group">
          Initialize Sync <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
        <button className="px-10 py-5 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all border border-white/20 flex items-center gap-3 group">
          View Raw Signals <Layers size={16} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute left-10 top-1/4 animate-float opacity-40">
       <div className="premium-card p-6 w-48 space-y-2">
          <Terminal size={24} className="text-primary" />
          <p className="text-[10px] font-black uppercase tracking-widest leading-none">Console Output</p>
          <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
             <div className="h-full w-2/3 bg-primary animate-pulse" />
          </div>
       </div>
    </div>

    <div className="absolute right-10 bottom-1/4 animate-float opacity-40" style={{ animationDelay: '2s' }}>
       <div className="premium-card p-6 w-48 space-y-2">
          <Cpu size={24} className="text-secondary" />
          <p className="text-[10px] font-black uppercase tracking-widest leading-none">Core Telemetry</p>
          <p className="text-xs font-bold text-white uppercase italic">98.4% Load</p>
       </div>
    </div>
  </section>
)

const Stats = () => (
  <section className="px-8 pb-32">
     <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
           { label: 'Active Nodes', val: '4,892', icon: <Globe size={20} /> },
           { label: 'Transmissions', val: '1.2M', icon: <Zap size={20} /> },
           { label: 'Security Score', val: '99.9%', icon: <Shield size={20} /> },
           { label: 'Network Growth', val: '+430%', icon: <TrendingUp size={20} /> }
        ].map(stat => (
           <div key={stat.label} className="premium-card p-10 backdrop-blur-md bg-black/20 space-y-4 hover:-translate-y-2 transition-transform">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit inline-block mb-4">
                 {stat.icon}
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-text-secondary">{stat.label}</h3>
              <p className="text-4xl font-black text-white italic tracking-tighter">{stat.val}</p>
           </div>
        ))}
     </div>
  </section>
)

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      {/* ATMOSPHERIC ANIMATION OVERLAYS */}
      <div className="clouds-container">
        <div className="cloud cloud-1 opacity-20"></div>
        <div className="cloud cloud-2 opacity-10"></div>
        <div className="cloud cloud-3 opacity-15"></div>
      </div>
      
      <div className="sunshine-overlay">
        <div className="ray ray-1 opacity-10"></div>
        <div className="ray ray-2 opacity-5"></div>
        <div className="ray ray-3 opacity-10"></div>
      </div>

      <div className="fixed inset-0 scanline z-[999] opacity-20" />
      
      <div className="relative z-50">
        <Navbar />
        <Hero />
        <Stats />
      </div>
      
      {/* Background Decor */}
      <div className="fixed top-20 right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />
    </div>
  )
}

export default App

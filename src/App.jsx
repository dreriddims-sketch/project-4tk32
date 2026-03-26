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
        <span className="font-black text-white text-xl italic tracking-tighter">KANNON_BOSS_MUSIC</span>
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
        KANNON <br />
        <span className="text-primary italic">BOSS MUSIC</span>
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
              <h3 className="text-xs font-black uppercase tracking-widest text-white/40">{stat.label}</h3>
              <p className="text-4xl font-black text-white italic tracking-tighter">{stat.val}</p>
           </div>
        ))}
     </div>
  </section>
)

const Protocols = () => (
  <section className="px-8 py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary">
             <Activity size={12} />
             <span className="text-[10px] font-black uppercase tracking-widest">Active Protocols</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            OPERATIONAL <br /> <span className="text-secondary">FRAMEWORK</span>
          </h2>
        </div>
        <p className="max-w-md text-white/40 text-sm font-medium italic text-right">
          "The 4TK32 Protocol Suite ensures data integrity and sovereign autonomy across the global mesh network."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Sub-Zero Latency',
            desc: 'Direct peer-to-peer routing bypassing legacy centralized hubs.',
            icon: <Zap size={32} />,
            code: 'ERR_0ms_STABLE'
          },
          {
            title: 'Quantum Shield',
            desc: 'Multi-layer cryptographic protection with post-quantum standards.',
            icon: <Shield size={32} />,
            code: 'SEC_LV_9_ACTIVE'
          },
          {
            title: 'Mesh Consensus',
            desc: 'Decentralized state verification across 4,000+ consensus nodes.',
            icon: <Share2 size={32} />,
            code: 'CONSENSUS_SYNCED'
          }
        ].map((item, idx) => (
          <div key={idx} className="premium-card p-12 group hover:bg-secondary/5 border-secondary/0 hover:border-secondary/20 transition-all cursor-pointer">
            <div className="text-secondary mb-8 transition-transform group-hover:scale-110 duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter">{item.title}</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed italic">{item.desc}</p>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{item.code}</span>
              <ChevronRight size={16} className="text-white/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const GlobalNetwork = () => (
  <section className="px-8 py-32 relative">
    <div className="max-w-7xl mx-auto premium-card p-1 bg-white/5">
       <div className="relative aspect-[21/9] bg-[#050507] rounded-[calc(1.5rem-4px)] overflow-hidden flex items-center justify-center">
          {/* FAKE MAP GRID */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="relative text-center z-10 space-y-6 px-4">
             <div className="inline-flex items-center gap-4 text-primary animate-pulse">
                <Globe size={40} className="animate-spin-slow" />
                <div className="h-px w-32 bg-primary/30 hidden md:block" />
                <Activity size={40} />
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                Global Node <span className="text-primary italic">Distribution</span>
             </h2>
             <p className="text-white/40 text-xs font-black uppercase tracking-[0.4em]">Live-Sync: Connected to 48 Regions</p>
             
             <div className="pt-8 flex justify-center gap-4 flex-wrap">
                {['NYC-01', 'LON-04', 'TOK-02', 'SIN-09', 'BER-03'].map(node => (
                   <span key={node} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white/60">
                      {node} : <span className="text-primary">ONLINE</span>
                   </span>
                ))}
             </div>
          </div>

          <div className="absolute bottom-8 left-8 text-left space-y-2 opacity-40">
             <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary animate-pulse" />
             </div>
             <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Buffer_Stream_001</p>
          </div>
       </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="px-8 py-20 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
            <Zap size={16} />
          </div>
          <span className="font-black text-white text-lg italic tracking-tighter">KANNON_BOSS_MUSIC</span>
        </div>
        <p className="max-w-xs text-white/40 text-xs leading-relaxed italic">
          Architecting the future of distributed networks. No central failures. No legacy constraints.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {['Ecosystem', 'Resources', 'Legal'].map(group => (
          <div key={group} className="space-y-4">
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{group}</h4>
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map(item => (
                <a key={item} href="#" className="text-xs text-white/40 hover:text-primary transition-colors italic">
                  Link_{group}_{item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Newsletter</h4>
        <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
          <input type="text" placeholder="NODE@NETWORK.SYS" className="bg-transparent border-none outline-none px-4 py-2 text-[10px] font-bold text-white w-48" />
          <button className="bg-primary text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase italic">
            Join
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
        © 2026 KANNON_BOSS_MUSIC // ALL SYSTEMS OPERATIONAL
      </p>
      <div className="flex gap-6">
        <Share2 size={16} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
        <Heart size={16} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
        <Gift size={16} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
      </div>
    </div>
  </footer>
)

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary/30 bg-[#08080a]">
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

      <div className="fixed inset-0 scanline z-[999] opacity-20 pointer-events-none" />
      
      <div className="relative z-50">
        <Navbar />
        <Hero />
        <Stats />
        <Protocols />
        <GlobalNetwork />
        <Footer />
      </div>
      
      {/* Background Decor */}
      <div className="fixed top-20 right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />
    </div>
  )
}

export default App

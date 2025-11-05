export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8 mb-20">
          {/* Logo/Brand */}
          <div className="relative">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              SONORA LAB
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-sm"></div>
          </div>

          {/* Tagline */}
          <p className="text-2xl text-gray-300 max-w-3xl">
            Audio & Signal Processing Innovation Hub
          </p>

          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Pioneering the future of audio technology. From immersive soundscapes
            to cutting-edge signal processing research, we explore the frontiers
            of sonic innovation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            title="Audio Processing"
            description="Advanced algorithms for real-time audio manipulation, filtering, and effects processing."
            icon="🎚️"
          />
          <FeatureCard
            title="Signal Analysis"
            description="Deep insights into frequency domains, spectral analysis, and acoustic measurements."
            icon="📊"
          />
          <FeatureCard
            title="Soundscape Design"
            description="Create immersive audio experiences with spatial audio and environmental sound design."
            icon="🌊"
          />
        </div>

        {/* Projects Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Projects
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-purple-400">
                  Sonora Soundscape App
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our flagship application for creating and experiencing immersive
                  soundscapes. Transform any environment with carefully crafted audio
                  environments designed for focus, relaxation, and creativity.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://sonora.com"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Visit Sonora.com
                  </a>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center text-6xl">
                🎵
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-300 mb-6">
            Powered by cutting-edge technology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge>Web Audio API</TechBadge>
            <TechBadge>Tone.js</TechBadge>
            <TechBadge>WaveSurfer.js</TechBadge>
            <TechBadge>Next.js</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>React</TechBadge>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Hero Section */}
      <main className="relative">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8 mb-24">
            {/* Logo/Brand */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-2xl opacity-20"></div>
              <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                SONORA LAB
              </h1>
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-sm"></div>
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light">
              Audio & Signal Processing Innovation Hub
            </p>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Pioneering the future of audio technology. From immersive soundscapes
              to cutting-edge signal processing research, we explore the frontiers
              of sonic innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              >
                Explore Projects
              </a>
              <a
                href="https://sonoraa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all"
              >
                Visit Sonoraa.com →
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            <FeatureCard
              title="Audio Processing"
              description="Advanced algorithms for real-time audio manipulation, filtering, and effects processing with Web Audio API."
              icon="🎚️"
              gradient="from-purple-500/10 to-purple-600/5"
            />
            <FeatureCard
              title="Signal Analysis"
              description="Deep insights into frequency domains, spectral analysis, and acoustic measurements for research and production."
              icon="📊"
              gradient="from-pink-500/10 to-pink-600/5"
            />
            <FeatureCard
              title="Soundscape Design"
              description="Create immersive audio experiences with spatial audio and environmental sound design tools."
              icon="🌊"
              gradient="from-blue-500/10 to-blue-600/5"
            />
          </div>

          {/* Projects Section */}
          <div id="projects" className="space-y-12 scroll-mt-20">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Projects
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Innovative audio applications and research pushing the boundaries of what's possible with sound
              </p>
            </div>

            {/* Main Project Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold">
                      FLAGSHIP PROJECT
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Sonora Soundscape App
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Our flagship application for creating and experiencing immersive
                      soundscapes. Transform any environment with carefully crafted audio
                      environments designed for focus, relaxation, and creativity.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span className="text-gray-300">Immersive 3D soundscapes with spatial audio</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span className="text-gray-300">Real-time audio synthesis and processing</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span className="text-gray-300">Custom audio environments for productivity</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href="https://sonoraa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-purple-500/50"
                      >
                        Launch App
                      </a>
                      <a
                        href="https://sonoraa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="w-full lg:w-80 xl:w-96 h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-8xl animate-pulse">🎵</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mt-32 mb-24">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                What We Do
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Pushing the boundaries of audio technology and signal processing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <CapabilityCard
                title="Research & Development"
                description="Exploring new frontiers in audio processing, machine learning for audio, and spatial sound technologies."
                items={["Audio ML Models", "DSP Algorithms", "Spatial Audio Research"]}
              />
              <CapabilityCard
                title="Production Tools"
                description="Building professional-grade tools for audio engineers, producers, and sound designers."
                items={["Audio Effects", "Analysis Tools", "Workflow Solutions"]}
              />
              <CapabilityCard
                title="Web Audio Innovation"
                description="Leveraging cutting-edge web technologies to bring studio-quality audio to the browser."
                items={["Real-time Processing", "Interactive Experiences", "Cross-platform Apps"]}
              />
              <CapabilityCard
                title="Education & Community"
                description="Sharing knowledge and fostering innovation in the audio technology community."
                items={["Tutorials & Guides", "Open Source Tools", "Research Papers"]}
              />
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-32 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Powered by Cutting-Edge Technology
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Built with the best tools in modern web development and audio processing
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadge icon="🎧">Web Audio API</TechBadge>
              <TechBadge icon="🎹">Tone.js</TechBadge>
              <TechBadge icon="📈">WaveSurfer.js</TechBadge>
              <TechBadge icon="⚡">Next.js</TechBadge>
              <TechBadge icon="📘">TypeScript</TechBadge>
              <TechBadge icon="⚛️">React</TechBadge>
              <TechBadge icon="🎨">Tailwind CSS</TechBadge>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-32">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SONORA LAB
                </p>
                <p className="text-gray-400 mt-2">
                  Audio & Signal Processing Innovation Hub
                </p>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://sonoraa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sonoraa.com
                </a>
                <a
                  href="https://github.com/stefan5671/sonora-lab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="text-center mt-8 text-gray-500 text-sm">
              © 2025 Sonora Lab. Built with passion for audio innovation.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  gradient
}: {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}) {
  return (
    <div className={`relative group bg-gradient-to-br ${gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:scale-105`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function CapabilityCard({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechBadge({ children, icon }: { children: React.ReactNode; icon?: string }) {
  return (
    <span className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-all inline-flex items-center gap-2">
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
}

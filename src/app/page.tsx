export default function Home() {
  return (
    <div className="min-h-screen circuit-pattern">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-black/10 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-light tracking-wider gradient-text">
              VOLTSPACE
            </span>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#learn" className="text-sm hover-glow">Learn</a>
              <a href="#community" className="text-sm hover-glow">Community</a>
              <a href="#projects" className="text-sm hover-glow">Projects</a>
              <button className="tech-button px-4 py-2 border border-white/10 rounded hover:border-primary/50">
                Connect
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative pt-24">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center py-20 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight gradient-text">
              Build the Future with Arduino
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Experience the most sophisticated Arduino learning platform. Design, build, and innovate with professional tools and community support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button className="tech-button bg-primary/10 text-primary px-8 py-3 rounded-sm hover:bg-primary/20 transition-all">
                Start Learning
              </button>
              <button className="tech-button border border-white/10 px-8 py-3 rounded-sm hover:border-primary/50 transition-all">
                View Projects
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 py-20">
            {/* Card 1 */}
            <div className="glass-card p-6 rounded-sm hover-glow group">
              <div className="h-32 flex items-center justify-center text-primary/20 group-hover:text-primary/30 transition-colors">
                {"</>"}
              </div>
              <h3 className="text-lg font-light mb-2 text-white/90">Learn &amp; Code</h3>
              <p className="text-sm text-white/60">
                Master Arduino programming with structured courses and hands-on projects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 rounded-sm hover-glow group">
              <div className="h-32 flex items-center justify-center text-primary/20 group-hover:text-primary/30 transition-colors">
                {"{ }"}
              </div>
              <h3 className="text-lg font-light mb-2 text-white/90">Build &amp; Create</h3>
              <p className="text-sm text-white/60">
                Transform ideas into reality with our comprehensive building guides.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 rounded-sm hover-glow group">
              <div className="h-32 flex items-center justify-center text-primary/20 group-hover:text-primary/30 transition-colors">
                {"[]"}
              </div>
              <h3 className="text-lg font-light mb-2 text-white/90">Share &amp; Grow</h3>
              <p className="text-sm text-white/60">
                Join a community of makers and showcase your innovations.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Grid Background */}
        <div className="tech-grid absolute inset-0 pointer-events-none"></div>
        
        {/* Data Stream Effect */}
        <div className="data-stream absolute inset-0 pointer-events-none"></div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white/40 text-sm">
            <p>© 2025 VOLTSPACE. Innovate with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

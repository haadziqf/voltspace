export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              VOLTSPACE
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="hover:text-blue-400 transition">Power Circuits</a>
            <a href="#community" className="hover:text-blue-400 transition">Grid Network</a>
            <a href="#marketplace" className="hover:text-blue-400 transition">Circuit Exchange</a>
          </nav>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
              Connect
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Power Your Arduino Journey
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn, collaborate, and innovate with the most electrifying Arduino learning platform
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition">
                Start Learning
              </button>
              <button className="border border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-lg text-lg font-semibold transition">
                Explore Marketplace
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Power Circuits</h3>
              <p className="text-gray-300">
                Structured learning paths from basics to advanced Arduino projects
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Grid Network</h3>
              <p className="text-gray-300">
                Connect with fellow makers and share your knowledge
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Circuit Exchange</h3>
              <p className="text-gray-300">
                Find or offer Arduino expertise in our marketplace
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>© 2025 VOLTSPACE. Amplifying Arduino Innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

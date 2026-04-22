export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <main className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl mb-8 text-gray-300">This is my personal website built with Next.js</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
            About Me
          </a>
          <a href="#" className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between relative">
      {/* Backdrop gradient placed beneath the Vortex */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-700/20 via-blue-950/20 to-black z-10"></div>

      {/* Vortex positioned above the backdrop */}
      <Vortex
        backgroundColor="rgba(0, 0, 0, 0.7)"
        rangeY={200}
        particleCount={800}
        baseHue={200}
        className="flex items-center flex-col justify-center min-h-screen z-10 relative"
      >
        {/* Semi-transparent blur overlay between vortex and content */}
        <div className="absolute inset-0 backdrop-blur-xl bg-black/10 z-10"></div>

        {/* Content positioned above the Vortex and blur */}
        <div className="relative z-20 flex flex-col items-center justify-between min-h-screen w-full">
          {/* Header */}
          <header className="w-full h-20 flex items-center justify-between px-6 bg-transparent max-w-7xl mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                src={"/images/breze-logo-white.png"}
                alt="logo"
                width={90}
                height={30}
              />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://tally.so/r/3EBRd4">
                <Button
                  variant="default"
                  className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md"
                >
                  Get Early Access →
                </Button>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg">
                <span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-1 font-bold rounded-full">
                  New
                </span>
                <span className="text-sm font-bold text-gray-300">
                  Coming Soon!
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 font-bold tracking-tighter mb-6">
                AI-powered review management for the modern business
              </h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mb-6">
                Connect all your review platforms. Get AI-powered insights and
                responses. Never miss a review again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://tally.so/r/3EBRd4">
                  <Button
                    variant="default"
                    className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md"
                  >
                    Get Early Access →
                  </Button>
                </Link>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full py-4 bg-transparent text-neutral-400 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-sm">© 2024 breze. All rights reserved.</p>
              <nav className="hidden md:flex gap-4">
                <Link
                  href="#"
                  className="hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </Vortex>
    </div>
  );
}

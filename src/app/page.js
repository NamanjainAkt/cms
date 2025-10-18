import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Layers, NotebookPen, Zap } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="w-full">
      { /* Section 1 */}
      <section className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-sm mb-6 p-4 animate-fade-in">
            Manage your Content with Ease.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
            Streamline your content workflow, publish with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <Link href="/blogs">
              <Button variant="default" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:from-blue-700 hover:to-violet-700 hover:shadow-xl hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-full">
                Try it out
              </Button></Link>
            <Button variant="default" className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300 text-lg px-8 py-6 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full min-h-screen py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="px-4 sm:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-16 text-slate-900">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white border-0 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,0,0,0.1)]">
              <NotebookPen size={56} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Intuitive Editor</h3>
              <p className="text-slate-600 text-center text-base">
                Create and edit your content seamlessly with a modern, distraction-free editor.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white border-0 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,0,0,0.1)]">
              <Layers size={56} className="text-violet-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flexible Tools</h3>
              <p className="text-slate-600 text-center text-base">
                Organize, manage, and customize your workflow with powerful tools.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white border-0 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,0,0,0.1)]">
              <Zap size={56} className="text-fuchsia-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Blazing Fast</h3>
              <p className="text-slate-600 text-center text-base">
                Experience lightning-fast performance and instant publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full min-h-screen py-20 flex flex-col items-center justify-center bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Ready to transform your content workflow?
          </h4>
          <p className="text-base sm:text-lg text-slate-600 mb-8">
            Join thousands of content creators who choose Learnol.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-lg border-2 border-slate-200 bg-white shadow-md placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-violet-700 transition-all duration-300 text-lg px-8 py-4 rounded-full">
              Get Started
            </Button>
          </form>
        </div>
      </section>
    </main>
  );

}

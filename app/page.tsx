import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-4xl">R</span>
            </div>
          </div>
          
          {/* Brand Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Raclass
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Expert Math Coaching for IIT-JEE and Board Exams – Personalized Learning for Top Scores
          </p>
          
          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 italic">
            "Achieve 100/100 in Mathematics – Your Success Starts Here!"
          </blockquote>
          
          {/* CTA Button */}
          <Link
            href="/classroom-courses"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Explore Courses
          </Link>
          
          {/* Featured Highlights */}
          <div className="mt-12">
            <p className="text-lg text-gray-500">
              Join <span className="font-bold text-blue-600">2000+</span> Successful Students
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

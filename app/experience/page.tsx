import Image from "next/image";

export default function Experience() {
  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight">
            Our Mentors
          </h1>
          <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the visionary educators behind R@W@T CLASSES
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* VIVEK SIR */}
          <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition duration-500 hover:-translate-y-3 overflow-hidden">

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Image */}
            <div className="flex justify-center relative z-10">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 transition duration-500 group-hover:scale-105">
                <Image
                  src="/pfpteacher.jpeg"
                  alt="Vivek Rawat Sir"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-center mt-8 relative z-10">
              <h2 className="text-2xl font-bold">
                VIVEK R@W@T SIR
              </h2>
              <p className="text-blue-400 font-medium mt-2">
                Co-Founder • Mathematics Expert • Academic Mentor
              </p>
            </div>

            {/* Content */}
            <div className="mt-6 text-gray-300 space-y-4 leading-relaxed text-[15px] relative z-10">

              <p className="font-semibold text-white underline">
                Experienced Educator | Concept Architect | Mentor
              </p>

              <p>
                Popularly known as <span className="text-blue-400 font-semibold">VR Sir</span>, 
                Vivek Sir specializes in building strong mathematical foundations 
                through clarity and structured thinking.
              </p>

              <p>
                A <span className="font-semibold text-white">BSc–MSc Integrated Graduate</span>, 
                he believes that mathematics should be understood, visualized, 
                and applied — not memorized.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Concept-based structured teaching</li>
                <li>Real-life application of mathematics</li>
                <li>Visualization-driven learning</li>
                <li>Development of analytical thinking</li>
              </ul>

              <p>
                As the <span className="font-semibold text-white">Co-Founder</span> of R@W@T CLASSES, 
                he continues to mentor students toward academic excellence.
              </p>

            </div>
          </div>

          {/* SHANU SIR */}
          <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition duration-500 hover:-translate-y-3 overflow-hidden">

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Image */}
            <div className="flex justify-center relative z-10">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 transition duration-500 group-hover:scale-105">
                <Image
                  src="/pteacher2.jpeg"
                  alt="Shanu Rawat Sir"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-center mt-8 relative z-10">
              <h2 className="text-2xl font-bold">
                SHANU R@W@T SIR
              </h2>
              <p className="text-blue-400 font-medium mt-2">
                Founder & CEO • Accounts Specialist • Mentor
              </p>
            </div>

            {/* Content */}
            <div className="mt-6 text-gray-300 space-y-4 leading-relaxed text-[15px] relative z-10">

              <p className="font-semibold text-white underline">
                Visionary Leader | Education Entrepreneur
              </p>

              <p>
                An <span className="font-semibold text-white">MBA Graduate</span>, 
                Shanu Sir began his journey by traveling daily to teach students, 
                driven purely by passion for education.
              </p>

              <p>
                In <span className="text-blue-400 font-semibold">2019</span>, 
                he founded R@W@T CLASSES, transforming it into a trusted 
                academic institute in Bhopal.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Founder & CEO of R@W@T CLASSES</li>
                <li>Accounts Champion with deep subject clarity</li>
                <li>Focused on discipline & long-term growth</li>
                <li>Strong mentor for career development</li>
              </ul>

              <p>
                His leadership continues to guide the institute toward 
                consistent excellence and structured growth.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

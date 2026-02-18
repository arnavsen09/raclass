import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight">
            About R@W@T CLASSES
          </h1>
          <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Building strong foundations. Creating future achievers.
          </p>
        </div>

        {/* Glass Container */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Mission */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition duration-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At <span className="font-semibold text-white">R@W@T CLASSES</span>, 
              our mission is to build <span className="font-semibold">unbreakable concepts</span> 
              and strong analytical thinking in every student. We believe education 
              is not just about scoring marks but about developing confidence, 
              discipline, and problem-solving ability for life.
            </p>
          </div>

          {/* Vision */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition duration-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To become one of the most trusted coaching institutes in Bhopal, 
              producing academic excellence in Mathematics and Accounts while 
              shaping responsible and capable individuals for the future.
            </p>
          </div>

        </div>

        {/* History Section */}
        <div className="mt-20 backdrop-blur-lg bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-semibold text-blue-400 mb-8 text-center">
            How R@W@T CLASSES Started
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The journey began with <span className="font-semibold text-white">Shanu R@W@T Sir</span>, 
            an MBA graduate and passionate Accounts educator. Known for his clarity 
            and student-friendly teaching style, he quickly became one of the most 
            loved teachers among students.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Encouraged by overwhelming student support and positive feedback, 
            Shanu Sir made the bold decision to establish his own institute. 
            Despite challenges related to location, infrastructure, and results, 
            he remained determined to create something meaningful.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            On <span className="font-semibold text-white">April 1, 2019</span>, 
            R@W@T CLASSES was officially founded in Bhopal. What started as a 
            small initiative soon grew into a trusted educational institution. 
            With student support, the institute shifted to a spacious classroom 
            near the 23rd Battalion area, marking the beginning of consistent growth.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Today, under the leadership of 
            <span className="font-semibold text-white"> Shanu R@W@T Sir (Founder & CEO)</span> 
            and the academic excellence of 
            <span className="font-semibold text-white"> Vivek R@W@T Sir (Co-Founder & Mathematics Expert)</span>, 
            the institute continues to guide students toward academic success 
            and character development.
          </p>

        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Excellence",
              desc: "We maintain the highest academic standards and continuously improve our teaching methodology."
            },
            {
              title: "Concept Clarity",
              desc: "Strong fundamentals and real-life application form the backbone of our teaching."
            },
            {
              title: "Student-Centric Approach",
              desc: "Every student receives personal attention, mentorship, and structured guidance."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:shadow-blue-500/20 hover:-translate-y-2 transition duration-500"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/experience"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/40"
          >
            Meet Our Mentors →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Us
        </h1>

        {/* Mission Statement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            We are dedicated to empowering students in Mathematics through expert 
            coaching and resources. Our goal is to help every student achieve their 
            full potential and excel in mathematics.
          </p>
        </section>

        {/* Team Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Our team consists of highly qualified mathematics experts and mentors 
            who are passionate about teaching. Learn more about our mentor's 
            credentials on our{' '}
            <a href="/experience" className="text-blue-600 hover:underline">
              Experience
            </a>{' '}
            page.
          </p>
        </section>

        {/* History */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our History
          </h2>
          <p className="text-lg text-gray-600">
            Founded to bridge the gap in quality math education, Raclass has been 
            helping students achieve excellence in mathematics for years. We started 
            with a vision to make quality math education accessible to all.
          </p>
        </section>

        {/* Values */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600"><strong>Excellence:</strong> We strive for the highest standards in everything we do</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600"><strong>Personalization:</strong> We tailor our teaching to each student's unique needs</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600"><strong>Proven Results:</strong> We measure success by our students' achievements</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

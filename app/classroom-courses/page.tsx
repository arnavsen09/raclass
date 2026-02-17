import Link from "next/link";

export default function ClassroomCourses() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Classroom Courses
        </h1>

        {/* Udaan Course Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
              Featured Course
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">
              Udaan Course
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-6 text-center">
            Comprehensive online math classes for IIT-JEE prep, including live sessions, 
            recorded lectures, and practice tests. Designed for 10th-12th graders aiming 
            for top percentiles.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-700">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Interactive Q&A with expert mentors
            </li>
            <li className="flex items-center text-gray-700">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Flexible scheduling for busy students
            </li>
            <li className="flex items-center text-gray-700">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Track progress with personalized dashboards
            </li>
          </ul>

          <div className="text-center">
            <Link
              href="/request-callback"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

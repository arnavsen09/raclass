export default function Results() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Results
        </h1>

        {/* Results Image Placeholder */}
        <div className="bg-gray-200 rounded-lg p-8 mb-6">
          <div className="flex items-center justify-center">
            <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-gray-500 mt-4">
            [Results Image Placeholder]
          </p>
        </div>

        {/* Caption */}
        <p className="text-xl text-blue-600 font-semibold">
          Celebrating Our Students' Achievements – 100/100 Scores in Mathematics!
        </p>

        <p className="text-lg text-gray-500 mt-4">
          See how our coaching leads to success.
        </p>
      </div>
    </div>
  );
}

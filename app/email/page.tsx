export default function EmailPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 -mt-48 pt-48">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br  px-6 py-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight font-mono text-gray-900 mb-2">
              crafted.
            </h1>
            <p className="text-sm text-gray-600 font-mono">
              a popup cafe at ucla
            </p>
          </div>

          {/* Main Content */}
          <div className="px-6 py-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-sm tracking-wide px-4 py-2 rounded-xl border border-green-200 bg-green-50 text-green-700 mb-4">
                Wednesday · 11am – 2pm · Bruinwalk
              </div>
              
              <h2 className="text-xl font-medium text-gray-900 mb-3 mt-8">
                See you tomorrow! 🌿
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Thanks for reserving a drink for our first popup of Fall 2025! We did not expect to get this much demand– to guarantee a drink we highly recommend stopping by before 12 pm. We are so excited for this drop, so see you there!
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">For those that reposted our story, please tell us the instagram username you used when ordering and we will give you a $1 discount!</p>
              
              <div className="mb-6 mt-8">
                <img 
                  src="https://i.imgur.com/QfSbvXj.jpeg" 
                  alt="Crafted matcha drink" 
                  className="w-full max-w-xs mx-auto rounded-xl shadow-md"
                />
              </div>
            </div>

           
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <a 
              href="https://instagram.com/crafted.ucla" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-mono text-sm"
            >
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @crafted.ucla
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const authorName = 'James Cameron';

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left">
          About the Author
        </h1>
        
        <div className="bg-white/5 p-8 rounded-2xl shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            {authorName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Seasoned full-stack developer with 10+ years of experience in building
            performant web applications. Passionate about open-source technologies
            and developer education.
          </p>
        </div>

        <a
          href="/"
          className="mt-8 px-6 py-3 bg-black/10 dark:bg-white/10 rounded-lg hover:bg-black/20 dark:hover:bg-white/20 transition-colors font-[family-name:var(--font-geist-mono)]"
          aria-label="Return to homepage"
        >
          ← Back to Home
        </a>
      </main>
    </div>
  );
}

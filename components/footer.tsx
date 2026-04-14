export default function Footer() {
  return (
    <footer className="border-t border-ship-gray-800 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-6">
          <span className="font-heading text-lg font-bold uppercase tracking-wider">
            SHIP
          </span>
          {/* <span className="text-sm text-ship-gray-500">shipplatform.ai</span> */}
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-ship-gray-500">
          <a href="/privacy" className="transition-colors hover:text-ship-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="transition-colors hover:text-ship-gray-300">
            Terms
          </a>
          <a
            href="https://www.linkedin.com/company/shipplatform/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ship-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@shipplatform"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ship-gray-300"
          >
            YouTube
          </a>
        </div>

        <p className="text-xs text-ship-gray-600">
          &copy; {new Date().getFullYear()} SHIP Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

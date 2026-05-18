import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-af-primary text-af-on-primary py-12 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="12" stroke="white" strokeWidth="2" fill="none" />
              <line x1="14" y1="14" x2="24" y2="6" stroke="#ffb3b1" strokeWidth="2" strokeLinecap="round" />
              <circle cx="14" cy="14" r="2" fill="white" />
            </svg>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold">AngleFinder</span>
          </div>
          <p className="text-sm text-af-primary-fixed opacity-80">
            Precision tools for architects, engineers, and students.
          </p>
          <p className="text-xs text-af-primary-fixed opacity-60 mt-2">
            All results are for educational use. For critical measurements, use a certified physical tool.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-bold mb-4 text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-af-primary-fixed opacity-80">
            <li><Link href="/protractor" className="hover:text-af-on-primary transition-colors">Protractor</Link></li>
            <li><Link href="/calculator" className="hover:text-af-on-primary transition-colors">Calculator</Link></li>
            <li><Link href="/image" className="hover:text-af-on-primary transition-colors">Image Measure</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold mb-4 text-sm">Resources</h4>
          <ul className="space-y-2 text-sm text-af-primary-fixed opacity-80">
            <li><Link href="/privacy-policy" className="hover:text-af-on-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-af-on-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-af-on-primary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold mb-4 text-sm">Support</h4>
          <ul className="space-y-2 text-sm text-af-primary-fixed opacity-80">
            <li><Link href="/contact" className="hover:text-af-on-primary transition-colors">Contact</Link></li>
            <li><Link href="/#faq" className="hover:text-af-on-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-af-primary-fixed opacity-50">
        © {new Date().getFullYear()} AngleFinder. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">E-Shop</h2>
          <p className="text-sm">
            Your one-stop shop for electronics, fashion, books, and more.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li><Link href="/category/electronics">Electronics</Link></li>
            <li><Link href="/category/fashion">Fashion</Link></li>
            <li><Link href="/category/books">Books</Link></li>
            <li><Link href="/sales">On Sale</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/shipping">Shipping Info</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-1">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}

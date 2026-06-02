import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2f241b] text-[#f5f3ef] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            WoodCraft
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#d8cec3]">
            Premium furniture and custom carpentry crafted
            for homes, offices, and commercial spaces.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/materials">Materials</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/custom-orders">Custom Orders</Link></li>
            <li><Link href="/bulk-orders">Bulk Orders</Link></li>
            <li><Link href="/site-visit">Book Site Visit</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/categories/living-room">Living Room</Link></li>
            <li><Link href="/categories/kitchen">Kitchen</Link></li>
            <li><Link href="/categories/bedroom">Bedroom</Link></li>
            <li><Link href="/categories/office">Office</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone size={16} />
              <span>+254 7XX XXX XXX</span>
            </li>

            <li className="flex gap-3">
              <Mail size={16} />
              <span>sales@woodcraft.co.ke</span>
            </li>

            <li className="flex gap-3">
              <MapPin size={16} />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#4a3a2d]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-sm text-[#d8cec3]">
          <p>© {year} WoodCraft. All rights reserved.</p>

          <p>
            Built with craftsmanship & precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

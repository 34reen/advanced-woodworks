import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#3e2f23] text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">WoodCraft</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
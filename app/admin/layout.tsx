import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-stone-100">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-950 text-white p-6">
        <h1 className="text-xl font-bold mb-8">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-3 text-sm">
          <Link
            href="/admin/dashboard"
            className="hover:text-amber-400 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/products"
            className="hover:text-amber-400 transition"
          >
            Products
          </Link>

          <Link
            href="/admin/categories"
            className="hover:text-amber-400 transition"
          >
            Categories
          </Link>

          <Link
            href="/"
            className="mt-6 text-stone-400 hover:text-white transition"
          >
            ← Back to Store
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
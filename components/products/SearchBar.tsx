export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full p-2 border rounded"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
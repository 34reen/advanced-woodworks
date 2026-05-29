export default function CategoryCard({ title }: { title: string }) {
  return (
    <div className="bg-[#e7e1d9] p-6 rounded-lg text-center hover:bg-[#d6ccc2] cursor-pointer">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}
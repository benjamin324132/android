import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

const SearchForm = () => {
  const handleSubmit = async (e: FormData) => {
    "use server";
    const searchTerm = e.get("search");
    if (searchTerm) redirect(`/films?search=${searchTerm}`);
  };
  return (
    <form action={handleSubmit}>
      <Input name="search" placeholder="Search" className="w-fit" />
    </form>
  );
};

export default SearchForm;

import { fetchAllForms } from "@/lib/data";
import SearchInput from "./SearchInput";
import SearchMobile from "./SearchMobile";

async function Search() {
  const forms = await fetchAllForms();

  return (
    <>
      <SearchInput forms={forms} />
      <SearchMobile />
    </>
  );
}

export default Search;

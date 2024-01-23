import { fetchAllForms } from "@/lib/data";
import FormCard from "./FormCard";

async function FormList() {
  const forms = await fetchAllForms();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </div>
  );
}

export default FormList;

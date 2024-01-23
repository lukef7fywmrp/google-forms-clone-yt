import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchFormById } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

async function FormSuccessPage({ params: { id } }: { params: { id: string } }) {
  const form = await fetchFormById(id);

  if (!form?.id) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto pb-16 pt-8 space-y-3.5">
      <Card>
        <hr className="w-full border-t-8 rounded-t-xl border-violet-800" />
        <CardHeader className="space-y-4">
          <CardTitle className="text-3xl font-medium">
            {/* @ts-ignore */}
            {form.localizeInfos.title}
          </CardTitle>

          <CardDescription>Your response has been recorded.</CardDescription>

          <Link
            className="text-blue-600 underline text-sm"
            replace
            href={`/forms/${form.identifier}`}
          >
            Submit another response
          </Link>
        </CardHeader>
      </Card>
    </main>
  );
}

export default FormSuccessPage;

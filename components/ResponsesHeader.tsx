import { fetchAllFormsData } from "@/lib/data";
import { getResponses } from "@/lib/utils";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import ResponsesTabs from "./ResponsesTabs";

async function ResponsesHeader({ id }: { id: string }) {
  const formsData = await fetchAllFormsData();
  const responses = getResponses(formsData, id);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-normal">
          {responses.length} {responses.length === 1 ? "Response" : "Responses"}
        </CardTitle>
      </CardHeader>

      <CardFooter className="p-0 justify-center">
        <ResponsesTabs />
      </CardFooter>
    </Card>
  );
}

export default ResponsesHeader;

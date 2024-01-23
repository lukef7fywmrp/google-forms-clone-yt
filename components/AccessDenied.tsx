import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Alert, AlertDescription } from "./ui/alert";

function AccessDenied() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-center">
          Access Denied
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Alert className="mb-4">
          <AlertDescription>
            You cannot access the dashboard because you are not a member of the
            organization.
          </AlertDescription>
        </Alert>
        <Button asChild className="w-full mb-2" variant={"destructive"}>
          <Link href={"/"}>Clear Error</Link>
        </Button>

        <Button className="w-full" variant={"brand"}>
          Request Access
        </Button>
        <div className="mt-4 text-center text-sm">
          Learn how to
          <Link
            className="underline ml-1"
            href="https://oneentry.cloud/en/instructions"
          >
            get started
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default AccessDenied;

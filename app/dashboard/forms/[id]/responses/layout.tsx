import ResponsesHeader from "@/components/ResponsesHeader";
import { ResponsesHeaderSkeleton } from "@/components/Skeletons";
import { Suspense } from "react";

function ResponsesLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div className="max-w-3xl mx-auto pt-40 sm:pt-32 pb-16 space-y-3.5">
      <Suspense fallback={<ResponsesHeaderSkeleton />}>
        <ResponsesHeader id={id} />
      </Suspense>
      {children}
    </div>
  );
}

export default ResponsesLayout;

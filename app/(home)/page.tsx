import AccessDenied from "@/components/AccessDenied";
import CTAButtons from "@/components/CTAButtons";
import { AccessibilityIcon, BarChartIcon, CogIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Ease of Use",
    description:
      "Create and distribute your forms with just a few clicks. Our intuitive interface is designed for efficiency and comfort.",
    icon: <AccessibilityIcon className="w-6 h-6" />,
  },
  {
    title: "Powerful Analysis",
    description:
      "Analyze responses with automatic summaries. Visualize your data with colorful charts and graphs.",
    icon: <BarChartIcon className="w-6 h-6" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Google Forms works seamlessly with other Google products, such as Google Sheets and Google Drive.",
    icon: <CogIcon className="w-6 h-6" />,
  },
];

export default function Home({
  searchParams: { error },
}: {
  searchParams: { error?: string };
}) {
  return (
    <main
      className={cn(
        "flex flex-col items-center justify-center min-h-screen p-6",
        error ? "bg-gray-100" : "bg-background"
      )}
    >
      {error ? (
        <AccessDenied />
      ) : (
        <>
          <div className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Get insights quickly, with Google Forms
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Easily create and share online forms and surveys, and
                    analyze the responses in real-time.
                  </p>
                </div>
                <CTAButtons />
              </div>
            </div>
          </div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Google Forms?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Trusted by millions of teams worldwide, Google Forms helps you
                  collect and organize information quickly and efficiently.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <Card key={feature.title}>
                    <CardHeader className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      {feature.icon}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <CTAButtons className="mt-8" />
            </div>
          </section>
        </>
      )}
    </main>
  );
}

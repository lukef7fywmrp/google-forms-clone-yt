"use client";

import { IndividualResponse } from "@/lib/definitions";
import { BarChart, Card } from "@tremor/react";

function BarChartComponent({ responses }: { responses: IndividualResponse[] }) {
  return (
    <Card>
      <BarChart
        className="mt-6"
        data={responses}
        index="value"
        showLegend={false}
        categories={["count"]}
        colors={["violet-800"]}
        yAxisWidth={48}
      />
    </Card>
  );
}

export default BarChartComponent;

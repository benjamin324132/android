"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [...Array(50)].map((_, i) => {
  return {
    index: i,
    value: Math.floor((Math.random() + 1) * i),
  };
});

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const FavouriteStocksWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold">Favorite Stocks</h2>
        <div>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0,
              }}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                dataKey="value"
                type="linear"
                strokeWidth={2}
                fill="transparent"
                fillOpacity={0.4}
                stroke="#0EF8A9"
              />
            </AreaChart>
          </ChartContainer>
        </div>
        <div className="flex items-start justify-between">
          <div>
             <h3 className="text-2xl font-bold">Airbnb, Inc</h3>
             <h5 className="text-lg font-light text-zinc-400">ABNB</h5>
          </div>
          <div>
          <h3 className="text-2xl font-bold">$115.6</h3>
          <h5 className="text-lg font-light text-[#0EF8A9]">0.49%</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteStocksWidget;

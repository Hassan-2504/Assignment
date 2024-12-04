"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 30, mobile: 80 },
  { month: "February", desktop: 40, mobile: 200 },
  { month: "March", desktop: 50, mobile: 120 },
  { month: "April", desktop: 70, mobile: 190 },
  { month: "May", desktop: 99, mobile: 130 },
  { month: "June", desktop: 150, mobile: 140 },
];

// Custom Y-axis ticks array
const yAxisTicks = [0, 25, 50, 75, 100, 125, 150, 175, 200];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card className="bg-transparent shadow-none border-none">
      <div className="flex px-6 mb-5 ">
        <CardHeader className="flex justify-between flex-1 text-3xl font-semibold">
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <div className="flex-0 items-center justify-between flex gap-5">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#101928]"></div>
            <span className="text-md text-gray-500">Desktop</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#5679FF]"></div>
            <span className="text-md text-gray-500">Mobile</span>
          </div>
          <select className="rounded-md p-2 text-gray-500">
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      {/* Card Content */}
      <CardContent style={{ padding: "0" }}>
        <ChartContainer config={chartConfig}>
          <BarChart
            className="w-[100%] h-[200px]"
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {/* Dashed grid lines with tighter spacing */}
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#3F3F44"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              className="font-medium text-lg text-[#3F3F44]"
            />
            <YAxis
              ticks={yAxisTicks} // Custom ticks from array
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              className="font-medium text-lg text-[#3F3F44]"
            />

            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#101928" radius={4} />
            <Bar dataKey="mobile" fill="#5679FF" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

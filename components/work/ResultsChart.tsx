"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type ChartPoint = { label: string; value: number };

const tooltipStyle = {
  backgroundColor: "#0D1220",
  border: "1px solid #1C2436",
  borderRadius: 8,
  color: "#F5F5F0",
  fontSize: 12,
};

export default function ResultsChart({
  type,
  label,
  data,
}: {
  type: "bar" | "line";
  label: string;
  data: ChartPoint[];
}) {
  return (
    <div className="rounded-2xl border border-navy-border bg-navy-panel/40 p-6 sm:p-8">
      <p className="mb-1 font-mono text-sm uppercase tracking-wider text-gold-light">
        Results Over Time
      </p>
      <p className="mb-6 text-base text-ink-muted">{label}</p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="#1C2436" vertical={false} />
              <XAxis
                dataKey="label"
                stroke="#5B6478"
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: "#1C2436" }}
              />
              <YAxis stroke="#5B6478" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(212,175,55,0.06)" }}
                contentStyle={tooltipStyle}
                labelStyle={{ color: "#8A93A8" }}
              />
              <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="#1C2436" vertical={false} />
              <XAxis
                dataKey="label"
                stroke="#5B6478"
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: "#1C2436" }}
              />
              <YAxis stroke="#5B6478" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ stroke: "#D4AF37", strokeWidth: 1 }}
                contentStyle={tooltipStyle}
                labelStyle={{ color: "#8A93A8" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#D4AF37"
                strokeWidth={2}
                dot={{ fill: "#D4AF37", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

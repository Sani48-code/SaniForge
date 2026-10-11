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

const darkTooltipStyle = {
  backgroundColor: "#0D1220",
  border: "1px solid #1C2436",
  borderRadius: 8,
  color: "#F5F5F0",
  fontSize: 12,
};

const lightTooltipStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E2E8F0",
  borderRadius: 8,
  color: "#0F172A",
  fontSize: 12,
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
};

export default function ResultsChart({
  type,
  label,
  data,
  theme = "dark",
}: {
  type: "bar" | "line";
  label: string;
  data: ChartPoint[];
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  const gridStroke = isLight ? "#E2E8F0" : "#1C2436";
  const textStroke = isLight ? "#64748B" : "#5B6478";
  const mainColor = isLight ? "#0B63E5" : "#D4AF37";
  const tooltipStyle = isLight ? lightTooltipStyle : darkTooltipStyle;

  return (
    <div
      className={
        isLight
          ? "rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
          : "rounded-2xl border border-navy-border bg-navy-panel/40 p-6 sm:p-8"
      }
    >
      <p
        className={`mb-1 font-mono text-sm uppercase tracking-wider ${
          isLight ? "text-blue-600 font-semibold" : "text-gold-light"
        }`}
      >
        Results Over Time
      </p>
      <p className={`mb-6 text-base ${isLight ? "text-slate-600" : "text-ink-muted"}`}>{label}</p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke={gridStroke} vertical={false} />
              <XAxis
                dataKey="label"
                stroke={textStroke}
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: gridStroke }}
              />
              <YAxis stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: isLight ? "rgba(37, 99, 235, 0.05)" : "rgba(212,175,55,0.06)" }}
                contentStyle={tooltipStyle}
                labelStyle={{ color: isLight ? "#475569" : "#8A93A8" }}
              />
              <Bar dataKey="value" fill={mainColor} radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke={gridStroke} vertical={false} />
              <XAxis
                dataKey="label"
                stroke={textStroke}
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: gridStroke }}
              />
              <YAxis stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ stroke: mainColor, strokeWidth: 1 }}
                contentStyle={tooltipStyle}
                labelStyle={{ color: isLight ? "#475569" : "#8A93A8" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={mainColor}
                strokeWidth={2.5}
                dot={{ fill: mainColor, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

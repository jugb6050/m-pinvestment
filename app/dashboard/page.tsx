"use client";
import { useRouter } from "next/navigation";
import { Star, User } from "lucide-react";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "2015", value: 5 },
  { name: "2016", value: 6.3 },
  { name: "2017", value: 5.9 },
  { name: "2018", value: 7.1 },
  { name: "2019", value: 6.4 },
  { name: "2020", value: 8.6 },
  { name: "2021", value: 9.8 },
  { name: "2022", value: 12.5 },
  { name: "2023", value: 10.7 },
  { name: "2024", value: 17.23 },
];

const pieData = [
  { name: "Stocks", value: 50 },
  { name: "Bonds", value: 20 },
  { name: "Real Estate", value: 15 },
  { name: "Commodities", value: 10 },
  { name: "Cash", value: 5 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c"];

export default function InvestmentLandingPage() {
  const router = useRouter();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 sm:p-6 flex flex-col justify-between">
      <div>
        {/* HEADER */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-black text-white py-6 rounded-xl shadow-lg mb-4 text-center sm:text-left">
            <img
              src="/mnp.svg"
              alt="M & P Logo"
              className="w-24 h-auto mb-4 sm:mb-0 sm:mr-4"
            />
            <h1 className="text-2xl sm:text-4xl font-bold">
              M & P Investments Bankers
            </h1>
          </div>

          {/* NAVBAR */}
          <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white shadow-md rounded-xl px-4 sm:px-6 py-4 text-base sm:text-lg text-gray-700">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
              <a
                href="#"
                className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Accounts & Benefits
              </a>
              <a
                href="#"
                className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Plan & Learn
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium shadow-sm">
                <User className="w-5 h-5" />
                <span>Kieron Ali</span>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                24/7 Support Chat
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => router.push("/login")}
              >
                Logout
              </Button>
            </div>
          </nav>
        </header>

        {/* SUMMARY BAR */}
        <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white shadow rounded-xl px-4 sm:px-6 py-4 mb-6 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Your Portfolio: $17,263,432
          </h2>
          <p className="text-sm sm:text-md text-gray-600 mt-2 sm:mt-0">
            Set goals, track, manage, and take control
          </p>
        </section>

        {/* ALERT / TOOLTIP */}
        {showTooltip && (
          <div className="flex flex-col sm:flex-row items-center justify-between bg-yellow-100 border border-yellow-400 text-yellow-900 rounded-lg px-4 py-3 mb-6 shadow-md text-sm sm:text-base">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <Star className="w-5 h-5" />
              <span>
                Get ahead of the market volatility by keeping perspective and
                sticking to an investment plan.
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-yellow-900 hover:text-yellow-700 font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* MAIN CHART CONTENT */}
        <main className="max-w-6xl mx-auto">
          <Card className="p-4 sm:p-6">
            <CardContent>
              <div className="text-xl sm:text-2xl font-semibold text-center mb-4">
                Investment Projection & Distribution
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                      <Label value="Year" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                      <Label
                        value="Value (in Millions)"
                        angle={-90}
                        position="insideLeft"
                        style={{ textAnchor: "middle" }}
                      />
                    </YAxis>
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#4CAF50"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-sm text-gray-600 italic">
            Any projections, investment tips, or opportunities presented are
            generated by tools and are only projections and estimates—not
            guarantees of future performance.
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 border rounded-xl p-4 sm:p-6 bg-white shadow">
            {[
              "Manage Contributions",
              "View Your Statements",
              "Manage Investments",
              "Take a Loan or Withdrawal",
            ].map((text, idx) => (
              <button
                key={idx}
                className="border p-4 rounded-lg hover:bg-gray-50 transition text-left font-medium w-full"
              >
                {text}
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="mt-12 text-center text-sm text-gray-600 border-t pt-6">
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
          <a href="#" className="hover:underline">
            Disclosures
          </a>
        </div>
      </footer>
    </div>
  );
}

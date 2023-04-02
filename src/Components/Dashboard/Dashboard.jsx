import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const MarksArray = [
    { id: 1, name: "John", physics: 90, chemistry: 85, math: 95 },
    { id: 2, name: "Jane", physics: 75, chemistry: 80, math: 92 },
    { id: 3, name: "Bob", physics: 82, chemistry: 88, math: 76 },
    { id: 4, name: "Alice", physics: 95, chemistry: 90, math: 88 },
    { id: 5, name: "Tom", physics: 80, chemistry: 85, math: 90 },
    { id: 6, name: "Mary", physics: 85, chemistry: 75, math: 78 },
    { id: 7, name: "Mike", physics: 92, chemistry: 83, math: 85 },
    { id: 8, name: "Sara", physics: 80, chemistry: 92, math: 90 },
    { id: 9, name: "David", physics: 85, chemistry: 88, math: 92 },
    { id: 10, name: "Lucy", physics: 92, chemistry: 85, math: 78 },
    { id: 11, name: "Peter", physics: 88, chemistry: 75, math: 90 },
    { id: 12, name: "Karen", physics: 78, chemistry: 90, math: 85 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={MarksArray}>
        <Line dataKey="physics"></Line>
        <Line dataKey="math" stroke="#8884d8"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;

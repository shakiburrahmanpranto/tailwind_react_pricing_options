import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      name: studentData.name,
    };
    return student;
  });
  console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey={"name"}></XAxis>
      </BarChart>
      <YAxis></YAxis>
      <Bar dataKey="avg" fill="green"></Bar>
    </div>
  );
};

export default MarksChart;

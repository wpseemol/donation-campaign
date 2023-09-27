import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { getLsData } from "../../myHooks/LsSetGet";

const Statistics = () => {
  const allDontItems = useLoaderData().data || [];

  const [totalDonation, setTotalDonation] = useState(0);
  const yourDonation = 100 - totalDonation;

  useEffect(() => {
    const donetedDat = getLsData();
    setTotalDonation(
      Math.round((100 / allDontItems.length) * donetedDat.length)
    );
  }, []);

  const data = [
    {
      name: "Your Donation",
      value: yourDonation,
    },
    {
      name: "Total Donation",
      value: totalDonation,
    },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        className="text-4xl font-bold"
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="sm:flex justify-center items-center mt-80 sm:mt-0">
     
      <PieChart width={650} height={650}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={250}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip payload={[{ unit: "%" }]} />
        <Legend iconType="plainline" iconSize={80} formatter={textStyleSet} />
      </PieChart>
    </div>
  );
};

function textStyleSet(value) {
  return (
    <span
      className="text-lg text-textColor font-normal"
      style={{ color: "#0B0B0B" }}
    >
      {value}
    </span>
  );
}

export default Statistics;

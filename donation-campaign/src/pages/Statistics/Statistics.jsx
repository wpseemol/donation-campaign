import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { getLsData } from "../../myHooks/LsSetGet";
import { useWindowSize } from "@uidotdev/usehooks";

const Statistics = () => {
  const allDontItems = useLoaderData().data || [];

  const [totalDonation, setTotalDonation] = useState(0);
  const yourDonation = 100 - totalDonation;

  const size = useWindowSize();

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
        className={size.width > 720 ? "text-2xl font-bold" : "font-medium"}
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
    <div className="myContainer flex justify-center items-center mt-80 sm:mt-0">
      <PieChart
        width={size.width > 720 ? 720 : 320}
        height={size.width > 720 ? 620 : 520}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={size.width > 720 ? 250 : 150}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip payload={[{ unit: "%" }]} />
        <Legend
          iconType="plainline"
          iconSize={size.width > 720 ? 70 : 40}
          formatter={textStyleSet}
        />
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

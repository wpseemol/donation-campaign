import { Cell, Pie, PieChart } from "recharts";
const data = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
];
const Statistics = () => {
  return (
    <div className="flex justify-center items-center">
      <PieChart width={730} height={250}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statistics;

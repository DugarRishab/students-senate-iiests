import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import AvatarCard from "../../components/AvatarCard/AvatarCard";

function getFullDept(abbr) {
  switch (abbr.toLowerCase()) {
    case "ce":
      return "Civil Engineering";
    case "me":
      return "Mechanical Engineering";
    case "ee":
      return "Electrical Engineering";
    case "it":
      return "Information Technology";
    case "cst":
      return "Computer Science and Technology";
    case "etc":
      return "Electronics and Telecommunication Engineering";
    default:
      return "Unknown Department";
  }
}

export default function DepartmentsPage() {
  const [departmentsData, setDepartmentsData] = useState({});
  const [selectedDept, setSelectedDept] = useState("it");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jsonUrl = "/assets/data/departments.json";

    setLoading(true);
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => setDepartmentsData(data))
      .catch((err) => console.error("Error loading departments data:", err))
      .finally(() => setLoading(false));
  }, []);

  const pieData = [
    {
      name: "ce",
      value: departmentsData.ce?.length || 0,
    },
    {
      name: "me",
      value: departmentsData.me?.length || 0,
    },
    {
      name: "ee",
      value: departmentsData.ee?.length || 0,
    },
    {
      name: "it",
      value: departmentsData.it?.length || 0,
    },
    {
      name: "cst",
      value: departmentsData.cst?.length || 0,
    },
    {
      name: "etc",
      value: departmentsData.etc?.length || 0,
    },
  ];

  const regularColor = "rgba(76,76,237,0.5)";
  const activeColor = "#4C4CED";

  const handlePieClick = (_, index) => {
    const dept = pieData[index].name;
    setSelectedDept(dept);
  };

  const renderMembersGrid = () => {
    if (!departmentsData[selectedDept]) {
      return (
        <div className="text-center py-10">
          <p>Loading department data...</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-4 gap-6 mt-6 mb-12">
        {departmentsData[selectedDept].map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <AvatarCard
              name={member.name}
              department={`Department of ${getFullDept(selectedDept)}`}
              profilePic={member.profilePic}
              bgColor={member.bgColor}
              ringColor={member.ringColor}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-blue-50 py-4 pr-4 mb-24">
      <h1 className="w-full flex justify-end font-bold text-5xl py-12 pr-16">
        Lorem ipsum dolor sit
      </h1>

      <div className="flex">
        {/* Left side with semicircular chart */}
        <div className="w-1/3 relative">
          <div className="absolute top-[300px] left-[-350px] transform -translate-y-1/2">
            <div className="size-96 md:size-[700px]">
              <ResponsiveContainer width="100%" height="100%" className="z-30">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={-90}
                    innerRadius={0}
                    outerRadius="100%"
                    paddingAngle={2}
                    onClick={handlePieClick}
                    isAnimationActive={true}
                    animationDuration={800}
                    stroke="rgba(76,76,237,1)"
                    strokeWidth={1}
                  >
                    {pieData.map((item) => (
                      <Cell
                        key={`cell-${item.name}`}
                        fill={
                          item.name === selectedDept
                            ? activeColor
                            : regularColor
                        }
                        className={`transform origin-center ${
                          item.name === selectedDept
                            ? "scale-[100%]"
                            : "scale-[96%]"
                        }`}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* center semi circle */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-36 font-bold text-sm
                            bg-indigo-900 text-white rounded-full size-[278px] flex flex-col items-start justify-center text-left"
              style={{ borderRadius: "0% 50% 50% 0%" }}
            >
              THE <br />
              GENERAL <br />
              COUNCIL
            </div>
          </div>
        </div>

        {/* right side: department cards */}
        <div className="w-2/3 pl-10 min-h-[700px]">{renderMembersGrid()}</div>
      </div>
    </section>
  );
}

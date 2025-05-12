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
            .catch((err) =>
                console.error("Error loading departments data:", err),
            )
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
                <div className="text-center text-lg py-10">
                    <p>Loading department data...</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 min-[430px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            gap-8 min-[430px]:gap-8 sm:gap-5 md:gap-6 lg:gap-28 xl:gap-x-40
                            mt-3 min-[430px]:mt-4 sm:mt-5 md:mt-6">
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
        <section id="Departments" className="overflow-hidden min-h-max h-auto w-full max-w-[1700px] flex flex-col md:flex-row relative mx-auto bg-blue-50">

            {/* left side */}
            <div id="chart-container" className="h-auto w-full md:w-1/3 -mt-[10.625rem] min-[360px]:-mt-[12rem] min-[430px]:-mt-[13rem] min-[500px]:-mt-[14.5rem] min-[590px]:-mt-[18rem] sm:-mt-[20rem] md:mt-[0rem] md:transform md:translate-x-[-15rem] lg:translate-x-[-23.5rem] relative">
                {/* semicircular chart */}
                <div id="chart" className="h-[21rem] min-[360px]:h-[24rem] min-[430px]:h-[26rem] min-[500px]:h-[29rem] min-[590px]:h-[36rem] sm:h-[39rem] md:w-[30rem] lg:w-[47rem] rotate-90 md:rotate-0">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                        className="z-0"
                    >
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
                                        className={`transform origin-center ${item.name === selectedDept
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
                    id="center-semi-circle"
                    className="absolute top-[35%] min-[360px]:top-[36%] min-[590px]:top-[40%] md:top-[24%] left-[31%] min-[360px]:left-[33%] min-[430px]:left-[36%] sm:left-[37%] md:left-[50%] lg:left-[75%] xl:left-[65%] 2xl:left-[53%]
                            pt-[3rem] sm:pt-[3rem] md:pt-0 md:pl-[7rem] lg:pl-[7rem]
                            font-bold text-xs sm:text-sm
                            bg-indigo-900 text-white rounded-full 
                            size-[8rem] min-[360px]:size-[8rem] min-[430px]:size-[9rem] min-[590px]:size-[11rem] sm:size-[12rem] md:size-[12rem] 
                            flex items-center justify-center md:justify-start text-center md:text-start"
                >
                    THE <br />
                    GENERAL <br />
                    COUNCIL
                </div>
            </div>

            {/* right side */}
            <div className="md:w-2/3">
                {/* heading: department name */}
                <h1 className="w-full h-auto text-nowrap flex items-center justify-end 
                            font-bold text-base min-[360px]:text-base min-[430px]:text-lg min-[590px]:text-xl sm:text-2xl md:text-3xl 
                            py-3 min-[360px]:py-3 min-[430px]:py-5 sm:py-8 md:py-10
                            px-6 min-[360px]:px-6 min-[430px]:px-8 sm:px-10 md:px-16">
                    Heading 1
                </h1>

                {/* department cards */}
                <div className="h-auto w-full lg:w-2/3 
                                mx-auto">
                    {renderMembersGrid()}
                </div>
            </div>
        </section>
    );
}
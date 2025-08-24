import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function MobileSemiCircleChart({
  pieData,
  selectedDept,
  onSliceClick,
}) {
  const regularColor = "rgba(76,76,237,0.5)";
  const activeColor = "#4C4CED";

  return (
    <div className="relative w-full h-56 sm:h-64 md:hidden overflow-hidden">
      {/* Huge chart surface clipped by the wrapper above to force full-width dome */}
      <div className="absolute inset-x-0 bottom-0 h-[100vw] transform -translate-y-6">
        <div className="size-full transform rotate-90">
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
                onClick={onSliceClick}
                isAnimationActive={true}
                animationDuration={800}
                stroke="rgba(76,76,237,0)"
                strokeWidth={1}
              >
                {pieData.map((item) => (
                  <Cell
                    key={`cell-${item.name}`}
                    fill={
                      item.name === selectedDept ? activeColor : regularColor
                    }
                    className={`transform origin-center ${
                      item.name === selectedDept
                        ? "scale-[100%] md:scale-[100%]"
                        : "scale-[96%] md:scale-[96%]"
                    }`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* center semi circle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[0deg] md:rotate-0 pt-20 md:pt-0 md:pl-36 font-bold text-sm
            bg-indigo-900 text-white rounded-full size-[190px] md:size-[278px] flex flex-col items-center text-center md:text-left md:items-start justify-center"
        >
          THE <br />
          GENERAL <br />
          COUNCIL
        </div>
      </div>
    </div>
  );
}

export function MobileCircularChart({ pieData, selectedDept, handlePieClick }) {
  const regularColor = "rgba(76,76,237,0.5)";
  const activeColor = "#4C4CED";

  return (
    <div className="w-full h-64 sm:h-72 md:hidden px-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            onClick={handlePieClick}
            stroke="rgba(76,76,237,1)"
            strokeWidth={1}
          >
            {pieData.map((item) => (
              <Cell
                key={`mobile-cell-${item.name}`}
                fill={item.name === selectedDept ? activeColor : regularColor}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

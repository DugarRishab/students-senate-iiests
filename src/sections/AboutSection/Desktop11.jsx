import AvatarCard from "../../components/AvatarCard/AvatarCard";

export default function Desktop11() {
  const professorsData = [
    {
      name: "Mr. X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
    {
      name: "Mr. X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
    {
      name: "Mr. X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
  ];
  const studentsData = [
    {
      name: "Student X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
    {
      name: "Student X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
    {
      name: "Student X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
    {
      name: "Student X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
    {
      name: "Student X",
      department: "Computer Science",
      profilePic: "/assets/imgs/profilepic.webp",
      bgColor: "bg-yellow",
      ringColor: "#4C4CED",
      socials: {
        linkedIn: "https://linkedin.com/in/mr.x",
        github: "https://github.com/mr.x",
      },
    },
  ];
  return (
    <section className="min-h-screen relative mx-auto px-4 md:pl-12">
      {/* Row 1 - Title (Mobile) / Top section (Desktop) */}
      <div className="w-full mb-8 md:mb-36">
        {/* Mobile Title */}
        <h1 className="text-2xl md:hidden font-bold uppercase text-center mb-6">
          The executive
          <br />
          secretariat
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between text-5xl font-bold items-center uppercase">
          The executive
          <br />
          secretariat
          <div className="h-[20%] w-[68%] p-8 text-tintWhite bg-blue flex justify-between items-center rounded-lg">
            <div className="text-xl">
              <strong className="text-3xl font-bold">Professors</strong>
              <br />
              selected by the Director
            </div>

            <div className="flex flex-1 justify-center items-center text-base gap-4">
              {professorsData.length > 0 &&
                professorsData.map((prof, idx) => (
                  <AvatarCard
                    key={idx}
                    name={prof.name}
                    department={prof.department}
                    profilePic={prof.profilePic}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 - Professors Section (Mobile only) */}
      <div className="md:hidden mb-8">
        <div className="bg-blue text-tintWhite p-4 rounded-lg">
          <div className="text-center mb-4">
            <strong className="text-lg font-bold">Professors</strong>
            <br />
            <span className="text-sm">selected by the Director</span>
          </div>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {professorsData.length > 0 &&
              professorsData.map((prof, idx) => (
                <AvatarCard
                  key={idx}
                  name={prof.name}
                  department={prof.department}
                  profilePic={prof.profilePic}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Row 3 - Student Body Section */}
      <div className="w-full md:flex md:pr-24">
        {/* Mobile Student Body Header */}
        <div className="md:hidden mb-4 text-center">
          <h2 className="text-2xl text-mediumBlue font-bold">Student Body</h2>
          <p className="text-base text-blue mb-2">
            Elected by the General Council
          </p>
          <p className="text-sm text-gray-600 mb-4">
            *Not part of the Executive Secretariat but still elected by the
            general council.
          </p>
        </div>

        {/* Students Grid */}
        <div className="flex-1">
          {/* Mobile: 3-column grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden justify-items-center">
            {studentsData.length > 0 &&
              studentsData
                .slice(0, 4)
                .map((student, idx) => (
                  <AvatarCard
                    key={idx}
                    name={student.name}
                    department={student.department}
                    profilePic={student.profilePic}
                  />
                ))}
          </div>

          {/* Desktop: horizontal layout */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {studentsData.length > 0 &&
              studentsData.map((student, idx) => (
                <AvatarCard
                  key={idx}
                  name={student.name}
                  department={student.department}
                  profilePic={student.profilePic}
                />
              ))}
          </div>
        </div>

        {/* Desktop Student Body Info */}
        <div className="hidden md:block max-w-64">
          <h2 className="text-4xl text-mediumBlue text-right">Student Body</h2>
          <p className="text-2xl text-blue text-right">
            Elected by the <br /> General Council
          </p>
          <p className="text-right">
            *Not part of the <br /> Executive Secretariat <br /> but still
            elected by the <br /> general council.
          </p>
        </div>
      </div>
    </section>
  );
}

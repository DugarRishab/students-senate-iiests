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
    <section className="min-h-screen relative mx-auto pl-24">
      {/* top */}
      <div className="w-full flex justify-between mb-36 text-5xl font-bold items-center uppercase">
        The executive
        <br />
        secretariat
        <div className="h-[20%] w-[60%] p-8 text-tintWhite bg-blue flex justify-between items-center">
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

      {/* bottom */}
      <div className="w-full flex pr-24">
        <div className="flex-1 flex items-center justify-between gap-4">
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
        <div className="max-w-64">
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

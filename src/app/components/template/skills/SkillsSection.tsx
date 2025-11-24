import Image from "next/image";

const skills = [
  {
    name: "JavaScript",
    icon: "/icon/icons8-javascript-96.png",
  },
  {
    name: "React",
    icon: "/icon/icons8-react-96.png",
  },
  {
    name: "Next.js",
    icon: "/icon/icons8-next.js-96.png",
  },
  {
    name: "Tailwind",
    icon: "/icon/icons8-tailwind-css-96.png",
  },
  {
    name: "TypeScript",
    icon: "/icon/icons8-typescript-96.png",
  },
  {
    name: "git github",
    icon: "/icon/icons8-github-96.png",
  },
];

function SkillsSection() {
  return (
    <div className="w-full mt-20">
      <h2 className="text-4xl font-semibold text-center mb-14">Skills</h2>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-3">
            <div className="relative w-20 h-20">
              <Image src={skill.icon} fill alt={skill.name} />
            </div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;

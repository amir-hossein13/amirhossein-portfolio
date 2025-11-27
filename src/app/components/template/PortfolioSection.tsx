import Image from "next/image";

const projects = [
  {
    title: "idea-plus",
    image: "/projects/idea-plus.png",
    demo: "https://idea-plus.ir/",
    github: "https://github.com/amir-hossein13",
    description:
      "A real-world project built for Webino Startup. Idea Plus is a platform focused on freelancers and Instagram-related digital packages. I worked on improving the UI and performance while ensuring clean and scalable code.",
    solved:
      "How to optimize website performance, Designing cleaner and more modern UI, Managing APIs in real-world production environments",
  },
  {
    title: "Baghban",
    image: "/projects/bagban.png",
    demo: "https://baghban.vercel.app/",
    github: "https://github.com/amir-hossein13",
    description:
      "A cosmetics and hygiene product store. This was my first collaboration with the Webino team, where I contributed to building the user interface and gained experience working with another frontend developer.",
    solved:
      "How to use Next.js in a real project,Understanding layouts and structure in Next.js,Collaborating with other frontend developers",
  },
  {
    title: "Bilito",
    image: "/projects/bilito.png",
    demo: "https://github.com/amir-hossein13/ticket-shop",
    github: "https://github.com/amir-hossein13",
    description:
      "An open-source flight ticket project built to practice handling complex data and larger APIs. The project is not completed yet, but it helped me grow my understanding of scalable architecture.",
    solved:
      "What I learned soon  How to handle large and complex APIs,Structuring a scalable frontend project,Working on long-term, open-source style projects",
  },
  {
    title: "Sportiva",
    image: "/projects/sportiva.png",
    demo: "https://baghban.vercel.app/",
    github: "https://github.com/amir-hossein13",
    description:
      "My first independent project built with React. It includes authentication, CMS usage, and API handling — created as a test to measure my abilities and prepare for bigger real-world apps.",
    solved:
      "Handling APIs in React,Working with authentication and CMS,Improving UI quality and overall project structure,Building more polished and production-ready apps",
  },
];

function PortfolioSection() {
  return (
    <div id="projects">
      <h2 className="text-4xl font-semibold text-center mb-14">Portfolio</h2>

      <div className="flex flex-col gap-20 items-center">
        {projects.map((project, i) => (
          <div key={i} className="w-full  bg-white shadow-sm rounded-xl p-6">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-2xl font-semibold mt-6 text-center">
              {project.title}
            </h3>

            <p className="text-center text-lg mt-3 text-gray-700">
              {project.description}
            </p>

            <p className="text-center text-md mt-2 text-gray-700 italic">
              <strong>What I learned:</strong> {project.solved}
            </p>

            <div className="flex justify-center gap-8 mt-6">
              <a
                href={project.demo}
                target="_blank"
                className="text-blue-600 underline text-lg"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="text-blue-600 underline text-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;

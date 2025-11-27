import { useTranslations } from "next-intl";
import Image from "next/image";

const projects = [
  {
    title: "idea-plus",
    image: "/projects/idea-plus.png",
    demo: "https://idea-plus.ir/",
    github: "https://github.com/amir-hossein13",
  },
  {
    title: "Baghban",
    image: "/projects/bagban.png",
    demo: "https://baghban.vercel.app/",
    github: "https://github.com/amir-hossein13",
  },
  {
    title: "Bilito",
    image: "/projects/bilito.png",
    demo: "https://github.com/amir-hossein13/ticket-shop",
    github: "https://github.com/amir-hossein13",
  },
  {
    title: "Sportiva",
    image: "/projects/sportiva.png",
    demo: "https://baghban.vercel.app/",
    github: "https://github.com/amir-hossein13",
  },
];

function PortfolioSection() {
  const t = useTranslations("projects");
  return (
    <div id="projects">
      <h2 className="text-4xl font-semibold text-center mb-14">{t("title")}</h2>

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
              {t(`project.${project.title}.title`)}
            </h3>

            <p className="text-center text-lg mt-3 text-gray-700">
              {t(`project.${project.title}.description`)}
            </p>

            <p className="text-center text-md mt-2 text-gray-700 italic">
              <strong>What I learned:</strong>{" "}
              {t(`project.${project.title}.solved`)}
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

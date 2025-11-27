import { useTranslations } from "next-intl";

function AboutmeSection() {
  const t = useTranslations("about-me");
  return (
    <section className="bg-[#F6F6F6] py-20 w-full mt-10" id="about">
      <div className="flex flex-col justify-center gap-10 items-center text-center px-4">
        <h2 className="text-4xl font-semibold">{t("title")}</h2>

        <p className="text-lg leading-relaxed max-w-2xl">{t("desc1")}</p>

        <p className="text-lg leading-relaxed max-w-2xl">{t("desc2")}</p>
      </div>
    </section>
  );
}

export default AboutmeSection;

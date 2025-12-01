import { useTranslations } from "next-intl";
import LangSwitcher from "../../ui/LangSwitcher";

function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="mt-10" id="home">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-semibold leading-tight">
          {t("name")} <br /> {t("name2")}
        </h1>

        <h2 className="text-xl font-medium leading-relaxed wrap-break-words whitespace-normal">
          {t("title")} <br />
          {t("title2")}
        </h2>

        <LangSwitcher />
      </div>
      <div className="relative mt-5 w-full sm:h-64 border">
        {/* <Image src="" fill alt="amirhossein" /> */}
      </div>
    </section>
  );
}

export default HeroSection;

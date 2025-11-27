import { Github, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

function ContactMe() {
  const t = useTranslations("contact");
  return (
    <section className="py-20" id="contact">
      <div className="flex flex-col items-center text-center justify-center gap-5">
        <h2 className="text-4xl font-semibold">{t("title")}</h2>
        <h4 className="text-xl font-medium">{t("message")} </h4>
        <a
          href="https://t.me/aa_alfa"
          target="_blank"
          className="p-4 rounded-2xl bg-primary-black text-white "
        >
          {t("button")}{" "}
        </a>
        <div className="flex flex-row gap-5">
          <a href="https://www.instagram.com/aa_alfa13/" target="_blank">
            <Instagram size={35} />
          </a>
          <a href="" target="_blank">
            <Linkedin size={35} />
          </a>
          <a href="https://github.com/amir-hossein13/" target="_blank">
            <Github size={35} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

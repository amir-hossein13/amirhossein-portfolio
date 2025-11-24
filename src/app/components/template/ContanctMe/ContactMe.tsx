import Container from "../../ui/Container";

function ContactMe() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center gap-5">
        {" "}
        <h2 className="text-4xl font-semibold">Contacts</h2>
        <h4 className="text-xl font-medium">
          Want to know more or just chat? You are welcome!
        </h4>
        <button className="p-2 rounded-2xl bg-primary-black text-white">
          Send Message
        </button>
        <div></div>
        <p>Like me on LinkedIn, Telegram,github </p>
      </div>
    </section>
  );
}

export default ContactMe;

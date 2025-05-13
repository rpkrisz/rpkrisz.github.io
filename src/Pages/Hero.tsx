import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export default function Hero() {
  const [t] = useTranslation("translation", {keyPrefix: "hero"});

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/Logo_blue/horizontal-logo.png"
          alt="Logo"
          className="lg:size-24 zero:size-28 lg:fixed top-0 left-6 xs"
        />
        <img
          src="/assets/headshot.jpeg"
          alt="Headshot image about me."
          className="max-w-md h-full rounded-xl shadow-2xl shadow-gray-500"
        />
        <div>
          <h1 className="text-5xl font-bold text-primary m-2">
            Hello,
            <br />
            {t("title")}
          </h1>
          <div className="text-start font-bold rounded-md text-lg flex flex-col gap-3 py-3 m-2">
            <p>{t("text")}</p>
            <Link className="btn btn-accent text-black self-center mt-5" to="/projects">
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

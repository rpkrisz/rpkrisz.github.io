import H1 from "@/Components/H1";
import H2 from "@/Components/H2";
import H3 from "@/Components/H3";
import HobbyCard from "@/Components/HobbyCard";
import {AboutTYPE} from "@/data/Types";
import {useTranslation} from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("translation", {keyPrefix: "about"});
  const about: AboutTYPE = i18n.getResourceBundle(i18n.language, "translation").about;

  return (
    <div>
      <H1>{t("title")}</H1>
      <p className="text-justify">{t("introduction")}</p>
      <H2>{t("skills.title")}</H2>
      {about.skills.items.map(obj => {
        return (
          <div className="m-4" key={obj.title}>
            <H3>{obj.title}</H3>
            <ul className="flex flex-row flex-wrap gap-2">
              {obj.items.map(skill => {
                return (
                  <li key={skill} className="badge badge-secondary text-secondary-foreground p-5">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <H2>{t("freetime")}</H2>
      <div className="flex flex-col ml-4 gap-3">
        <H3>{t("sports.title")}</H3>
        <div className="flex flex-row justify-between gap-3 flex-wrap lg:flex-nowrap">
          {about.sports.items.map((sport, index) => {
            return (
              <HobbyCard key={index} title={sport.name} imageSrc={sport.image} size="96">
                {sport.description}
              </HobbyCard>
            );
          })}
        </div>
        <H3>{t("boardgames.title")}</H3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-10 ">
          {about.boardgames.items.map((boardgame, index) => {
            return <HobbyCard key={index} title={boardgame.name} imageSrc={boardgame.image} size="52" />;
          })}
        </div>
        <H3>{t("series.title")}</H3>
        <div className="flex flex-wrap justify-center gap-10">
          {about.series.items.map((series, index) => {
            return <HobbyCard key={index} title={series.name} imageSrc={series.image} size="40" />;
          })}
        </div>
      </div>
    </div>
  );
}

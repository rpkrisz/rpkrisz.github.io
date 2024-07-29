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
    <>
      <H1>{t("title")}</H1>
      <p>{t("introduction")}</p>
      <H2>{t("skills.title")}</H2>
      {about.skills.items.map(obj => {
        return (
          <div key={obj.title}>
            <H3>{obj.title}</H3>
            <ul className="flex flex-row flex-wrap gap-2">
              {obj.items.map(skill => {
                return (
                  <li key={skill} className="badge badge-secondary text-secondary-foreground p-2">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <H2>{t("freetime")}</H2>
      <H3>{t("series.title")}</H3>
      <div className="flex flex-row justify-between gap-10 flex-wrap">
        {about.series.items.map((series, index) => {
          return <HobbyCard key={index} title={series.name} imageSrc={series.image} />;
        })}
      </div>
      <H3>{t("boardgames.title")}</H3>
      <div className="flex flex-row justify-between gap-10 flex-wrap">
        {about.boardgames.items.map((boardgame, index) => {
          return <HobbyCard key={index} title={boardgame.name} imageSrc={boardgame.image} />;
        })}
      </div>
      <H3>{t("sports.title")}</H3>
      <div className="flex flex-row justify-between gap-10 flex-wrap lg:flex-nowrap">
        {about.sports.items.map((sport, index) => {
          return (
            <HobbyCard key={index} title={sport.name} imageSrc={sport.image}>
              {sport.description}
            </HobbyCard>
          );
        })}
      </div>
    </>
  );
}

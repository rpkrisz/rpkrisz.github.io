import H2 from "@/Components/H2";
import H3 from "@/Components/H3";
import Section from "./Section";
import {AboutTYPE, ResumeTYPE} from "@/data/Types";
import {FC} from "react";
import {useTranslation} from "react-i18next";

const ResumeWithSide: FC = () => {
  const [, i18n] = useTranslation("translation", {keyPrefix: "resume"});

  const resume: ResumeTYPE = i18n.getResourceBundle(i18n.language, "translation").resume.resume;
  const about: AboutTYPE = i18n.getResourceBundle(i18n.language, "translation").about;

  return (
    <>
      <aside className="bg-secondary [&_h2]:text-secondary-content [&_h3]:text-secondary-content p-2 rounded-lg flex flex-col justify-between">
        <div>
          {/* <img src={resume.image} alt="Profile picture" className="h-36 m-auto" /> */}
          <H2 className="text-accent" id="cv_name">
            {resume.name}
          </H2>
          <H3>{resume.title}</H3>

          <H2>{resume.contact.title}</H2>
          {resume.contact.items.map(({title, contact}) => {
            return (
              <div key={title} className="flex flex-col justify-start">
                <H3 className="m-0">{title}</H3>
                <p className="pl-2">{contact}</p>
              </div>
            );
          })}

          <H3>{resume.contact.links.title}</H3>
          <ul className="list-disc list-inside pl-2">
            {resume.contact.links.items.map(({title, link}) => {
              return (
                <li key={title} className="flex flex-col justify-start">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                    <p className="m-0">{title}</p>
                  </a>
                </li>
              );
            })}
          </ul>

          <H2>{resume.languages.title}</H2>
          <div className="pl-2">
            {resume.languages.items.map(language => {
              return <p key={language}>{language}</p>;
            })}
          </div>

          <H2>{about.skills.title}</H2>

          <div className="m-1" key={about.skills.items[0].title}>
            <H3>{about.skills.items[0].title}</H3>
            <ul className="flex flex-row flex-wrap gap-2">
              {about.skills.items[0].items.map(skill => {
                return (
                  <li key={skill} className="badge badge-accent text-accent-content p-2">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-1" key={about.skills.items[1].title}>
            <H3>{about.skills.items[1].title}</H3>
            <ul className="flex flex-row flex-wrap gap-2">
              {about.skills.items[1].items.map(skill => {
                return (
                  <li key={skill} className="badge badge-accent text-accent-content p-2">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <H2>{about.freetime}</H2>
          <H3>{about.sports.title}</H3>
          <p>
            {about.sports.items
              .map(({name}) => name)
              .slice(0, 3)
              .join(", ")}
          </p>
          <H3>{about.boardgames.title}</H3>
          <p>
            {about.boardgames.items
              .map(({name}) => name)
              .slice(0, 3)
              .join(", ")}
          </p>
          <H3>{about.series.title}</H3>
          <p>
            {about.series.items
              .map(({name}) => name)
              .slice(0, 3)
              .join(", ")}
          </p>
        </div>
      </aside>
      <div>
        <H2 reverse={true}>{about.title}</H2>
        <p className="text-justify pr-5">{about.introduction}</p>
        <Section section={resume.experience}></Section>
        <Section section={resume.education}></Section>
        <div>
          <H2 reverse={true}>{resume.other.title}</H2>
          <H3>Programozás</H3>
          <ul className="list-disc list-inside px-2">
            {resume.other.items["programming"]?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <H3>ICDL/ECDL Standard Bizonyítvány</H3>
          <p>{resume.other.items["ICDL/ECDL"].join(", ")}</p>
          <H3>PSZK +</H3>
          <p>{resume.other.items["PSZK+"].join(", ")}</p>
          <H3>SAP</H3>
          <p>{resume.other.items.SAP}</p>
          <H3>Cisco Networking Academy</H3>
          <p>{resume.other.items["Cisco Networking Academy"]}</p>
          <H3>Üzleti Szimulációs Verseny</H3>
          <ul className="list-disc list-inside px-2">
            {resume.other.items["competitions"]?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResumeWithSide;

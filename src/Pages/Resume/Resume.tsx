import H1 from "@/Components/H1";
import H2 from "../../Components/H2";
import Section from "./Components/Section";
import {ResumeTYPE} from "../../data/Types";
import {FileDown} from "lucide-react";
import {useTranslation} from "react-i18next";

const Resume = () => {
  const [t, i18n] = useTranslation("translation", {keyPrefix: "resume"});
  const resume: ResumeTYPE = i18n.getResourceBundle(i18n.language, "translation").resume.resume;

  return (
    <>
      <H1>{t("title")}</H1>
      <div className="felx flex-col justify-center md:px-16 gap-5">
        <Section section={resume.education}></Section>
        <Section section={resume.experience}></Section>
        <H2 reverse={true}>{resume.languages.title}</H2>
        <div className="pl-2">
          {resume.languages.items.map(language => {
            return <p key={language}>{language}</p>;
          })}
        </div>
        <H2 reverse={true}>{resume.other.title}</H2>
        {resume.other.items.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="text-xl">{item.title}</h3>
              <ul className="list-disc list-inside px-2">
                {item.items?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center m-2 md:justify-end">
        <a className="btn btn-accent" href="/CV_Resume.pdf" download>
          Download
          <FileDown />
        </a>
      </div>
    </>
  );
};

export default Resume;

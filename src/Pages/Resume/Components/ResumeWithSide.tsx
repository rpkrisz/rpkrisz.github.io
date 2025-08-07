import H2 from "@/Components/H2";
import H3 from "@/Components/H3";
import Section from "./Section";
import {AboutTYPE, ResumeTYPE} from "@/data/Types";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {GraduationCap, Briefcase} from "lucide-react";
import SidePanel from "./SidePanel";
import Card from "@/Components/Card";

const ResumeWithSide: FC = () => {
  const [, i18n] = useTranslation("translation", {keyPrefix: "resume"});

  const resume: ResumeTYPE = i18n.getResourceBundle(i18n.language, "translation").resume.resume;
  const about: AboutTYPE = i18n.getResourceBundle(i18n.language, "translation").about;

  return (
    <>
      <SidePanel />
      <div>
        <H2>{about.title}</H2>
        <Card>
          <p className="text-justify pr-5">{about.introduction}</p>
        </Card>
        <Section section={resume.experience} mainIcon={<Briefcase />}></Section>
        <Section section={resume.education} mainIcon={<GraduationCap />}></Section>
        <div>
          <H2>{resume.other.title}</H2>
          <Card>
            {resume.other.enumItems.map(item => {
              return (
                <div key={item.title}>
                  <H3>{item.title}</H3>
                  <p>{item.items.join(", ")}</p>
                </div>
              );
            })}
            {resume.other.listItems.map(item => {
              return (
                <div key={item.title}>
                  <H3>{item.title}</H3>
                  <ul className="list-disc list-inside px-2">
                    {item.items.map((subItem, subIndex) => {
                      return <li key={subIndex}>{subItem}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResumeWithSide;

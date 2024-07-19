import {useState} from "react";
import LangToggel from "../../Components/lang-toggel";
import H1 from "@/Components/H1";
import H2 from "./Components/H2";
import Section from "./Components/Section";
import ResumeType from "./Components/Types";
import data from "./Components/data.json";
import {Link} from "react-router-dom";

const Resume = () => {
  const [toggel, setToggel] = useState(false);
  let resume: ResumeType | undefined = undefined;
  toggel ? (resume = data.english) : (resume = data.hungarian);

  function handelClick() {
    toggel ? setToggel(false) : setToggel(true);

    return toggel;
  }

  return (
    <>
      <LangToggel handelClick={handelClick} />
      <H1>Resume</H1>
      <div className="felx flex-col justify-center px-16 p-2 gap-5">
        <Section section={resume.education}></Section>
        <Section section={resume.experience}></Section>
        <H2>{resume.languages.title}</H2>
        <div className="pl-2">
          {resume.languages.items.map(language => {
            return <p key={language}>{language}</p>;
          })}
        </div>
        <H2>{resume.other.title}</H2>
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
      <div className="flex justify-end">
        <a className="btn btn-primary" href="/CV_Resume.pdf" download>
          Download
        </a>
      </div>
    </>
  );
};

export default Resume;

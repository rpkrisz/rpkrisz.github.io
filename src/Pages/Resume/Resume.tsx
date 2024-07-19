import {useState} from "react";
import Hun from "./hun";
import LangToggel from "../../Components/lang-toggel";
import En from "./en";
import H1 from "@/Components/H1";

const Resume = () => {
  const [toggel, setToggel] = useState(false);
  function handelClick() {
    toggel ? setToggel(false) : setToggel(true);
    return toggel;
  }
  return (
    <>
      <LangToggel handelClick={handelClick} />
      <div className="flex justify-start items-center gap-5">
        <h1>Resume - Réthey-Prikkel Krisztián</h1>
        <a className="btn" href="/CV_Resume.pdf" download>
      <H1>Resume</H1>
          Download
        </a>
      </div>
      {toggel ? <Hun /> : <En />}
    </>
  );
};

export default Resume;

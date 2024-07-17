import {useState} from "react";
import Hun from "./hun";
import Langtoggel from "./langtoggel";
import En from "./en";

const Resume = () => {
  const [toggel, setToggel] = useState(false);
  function handelClick() {
    toggel ? setToggel(false) : setToggel(true);
    return toggel;
  }
  return (
    <>
      <Langtoggel handelClick={handelClick} />
      <div className="flex justify-start items-center gap-5">
        <h1>Resume - Réthey-Prikkel Krisztián</h1>
        <a className="btn" href="/CV_Resume.pdf" download>
          Download
        </a>
      </div>
      {toggel ? <Hun /> : <En />}
    </>
  );
};

export default Resume;

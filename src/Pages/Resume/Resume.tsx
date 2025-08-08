import H1 from "@/Components/H1";
//  import {FileDown} from "lucide-react";
import {useTranslation} from "react-i18next";
import ResumePrint from "./Components/ResumePrint";
import ResumeWithSide from "./Components/ResumeWithSide";

const Resume = () => {
  const [t] = useTranslation("translation", {keyPrefix: "resume"});

  return (
    <div>
      <H1>{t("title")}</H1>
      <div className="mb-10 grid lg:grid-cols-[325px(500px,_1fr)] xl:grid-cols-[325px_minmax(700px,_1fr)] gap-5">
        <ResumeWithSide />
      </div>
      <div className="absolute bottom-48 md:bottom-24 right-0.5 lg:right-48 m-4">
        <ResumePrint />
      </div>
    </div>
  );
};

export default Resume;

import H1 from "@/Components/H1";

// import {FileDown} from "lucide-react";
import {useTranslation} from "react-i18next";
import Print from "../Print";
import ResumeWithSide from "./Components/ResumeWithSide";

const Resume = () => {
  const [t] = useTranslation("translation", {keyPrefix: "resume"});

  return (
    <>
      <H1>{t("title")}</H1>
      <div className=" grid lg:grid-cols-[300px(500px,_1fr)] xl:grid-cols-[300px_minmax(700px,_1fr)] gap-5">
        <ResumeWithSide />
      </div>
      <div className="absolute bottom-48 md:bottom-24 right-0.5 lg:right-32 m-4">
        <Print />
      </div>
    </>
  );
};

export default Resume;

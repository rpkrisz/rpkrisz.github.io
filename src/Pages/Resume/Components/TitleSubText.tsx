import H3 from "@/Components/H3";
import {FC} from "react";

const TitleSubText: FC<{title: string; subtext?: string | undefined}> = ({title, subtext}) => {
  return (
    <>
      <H3 >{title}</H3>
      {subtext && <p className="text-xs ">{subtext}</p>}
    </>
  );
};

export default TitleSubText;

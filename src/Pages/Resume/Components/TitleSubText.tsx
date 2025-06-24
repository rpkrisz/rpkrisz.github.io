import H3 from "@/Components/H3";
import {FC} from "react";

const TitleSubText: FC<{title: string; subtext?: string | undefined}> = ({title, subtext}) => {
  return (
    <div className="flex flex-col mt-1 mb-2">
      <H3 className="mb-0">{title}</H3>
      {subtext && <p className="text-xs">{subtext}</p>}
    </div>
  );
};

export default TitleSubText;

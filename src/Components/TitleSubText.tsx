import {FC} from "react";

const TitleSubText: FC<{title: string; subtext?: string | undefined}> = ({title, subtext}) => {
  return (
    <>
      <h3 className="text-xl">{title}</h3>
      {subtext && <p className="text-xs ">{subtext}</p>}
    </>
  );
};

export default TitleSubText;

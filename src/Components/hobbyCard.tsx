import {FC} from "react";
import H3 from "./H3";

const HobbyCard: FC<{title: string; children: string; imageSrc: string}> = ({title, children, imageSrc}) => {
  return (
    <div className="flex flex-col justify-center max-w-2xl min-w-40 mx-auto">
      <img src={imageSrc} alt={"Image about the sport."} className="h-32 m-3 self-center" />
      <H3>{title}</H3>
      <p>{children}</p>
    </div>
  );
};

export default HobbyCard;

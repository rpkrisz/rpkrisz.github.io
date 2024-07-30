import {FC} from "react";
import H3 from "./H3";

const HobbyCard: FC<{title: string; children?: string; imageSrc: string}> = ({title, children, imageSrc}) => {
  return (
    <div className="flex flex-col justify-center max-w-2xl min-w-40 mx-auto bg-primary p-2 rounded-md">
      {children ? (
        <img src={imageSrc} alt={"Image about the hobby."} className="h-32 m-3 self-center" />
      ) : (
        <img src={imageSrc} alt={"Image about the hobby."} className="h-44 m-3 self-center" />
      )}
      <H3 reverse={true}>{title}</H3>
      {children && <p className="text-secondary-content text-justify p-2">{children}</p>}
    </div>
  );
};

export default HobbyCard;

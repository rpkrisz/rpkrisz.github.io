import {FC} from "react";

const HobbyCard: FC<{title: string; text: string; imageSrc: string}> = ({title, text, imageSrc}) => {
  return (
    <div className="flex flex-col justify-center max-w-2xl min-w-40 mx-auto">
      <img src={imageSrc} alt={"Image about the sport."} className="h-32 m-3 self-center" />
      <h2 className="text-xl">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default HobbyCard;

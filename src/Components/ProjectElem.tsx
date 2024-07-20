import {FC} from "react";
import H2 from "./H2";

const ProjectElem: FC<{link: string; name: string; imageSrc: string; thisPic: string}> = ({
  link,
  name,
  imageSrc,
  thisPic,
}) => {
  return (
    <li className="flex flex-col justify-center mx-auto zero:max-w-32 xs:min-w-72 sm:max-w-screen-2xl sm:min-w-96 md:min-h-dvh min-h-full">
      <H2>{name}</H2>
      <div className="flex flex-wrap">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda molestias nisi aperiam aspernatur nobis
          ipsum asperiores aliquid ipsam? Quaerat omnis consectetur harum accusantium eos provident modi. Ea accusamus
          saepe porro?
        </p>
      </div>
      <a
        href={link}
        className="flex self-center justify-center p-1 zero:max-w-32 xs:min-w-72 sm:max-w-5xl sm:min-w-96 hover:bg-accent hover:rounded-2xl"
      >
        <div className="mockup-browser bg-neutral border">
          <div className="mockup-browser-toolbar">
            <div className="input text-white">{link}</div>
          </div>
          <div className="bg-base-200 flex justify-center ">
            <img src={imageSrc} alt={`Egy kép ${thisPic}`} className="w-full" />
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProjectElem;

import {FC} from "react";

const ListElem: FC<{link: string; name: string; imageSrc: string; thisPic: string}> = ({
  link,
  name,
  imageSrc,
  thisPic,
}) => {
  return (
    <li className="flex flex-col justify-center max-w-2xl min-w-96 mx-auto">
      <a href={link} className="flex justify-center flex-grow flex-col p-5 hover:bg-slate-800">
        <h1>{name}</h1>
        <img src={imageSrc} alt={`Egy kép ${thisPic}`} className="h-80 m-3 self-center" />
      </a>
    </li>
  );
};

export default ListElem;

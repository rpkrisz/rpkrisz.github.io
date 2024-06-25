import {FC} from "react";

const ListElem: FC<{link: string; name: string; imageSrc: string; thisPic: string}> = ({
  link,
  name,
  imageSrc,
  thisPic,
}) => {
  return (
    <li className="flex justify-start items-center bg-slate-800 ">
      <a href={link}>
        <h1>{name}</h1>
        <img src={imageSrc} alt={`Egy kép ${thisPic}`} className="h-52 m-3" />
      </a>
    </li>
  );
};

export default ListElem;

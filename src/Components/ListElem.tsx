import {FC} from "react";

const ListElem: FC<{link: string; name: string; imageSrc: string; thisPic: string}> = ({
  link,
  name,
  imageSrc,
  thisPic,
}) => {
  return (
    <li className="flex flex-col justify-center max-w-screen-2xl min-h-svh  min-w-96 mx-auto">
      <h1>{name}</h1>
      <div className="flex flex-wrap">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore minima odio error, quo sequi explicabo
          dolorem deleniti libero nisi voluptas culpa, quis vero suscipit quaerat quasi eos alias deserunt. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorum labore minima odio error, quo sequi explicabo dolorem
          deleniti libero nisi voluptas culpa, quis vero suscipit quaerat quasi eos alias deserunt.
        </p>
      </div>
      <a href={link} className="flex self-center justify-center p-1 max-w-5xl hover:bg-primary hover:rounded-2xl">
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

export default ListElem;

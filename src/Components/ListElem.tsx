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
      <a href={link} className="flex justify-center flex-grow flex-col p-3 hover:bg-primary-content hover:rounded-lg">
        <div className="mockup-browser bg-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input">{link}</div>
          </div>
          <div className="bg-base-200 flex justify-center ">
            <img src={imageSrc} alt={`Egy kép ${thisPic}`} />
          </div>
        </div>
      </a>
    </li>
  );
};

export default ListElem;

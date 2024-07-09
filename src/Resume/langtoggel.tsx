import {FC} from "react";

const Langtoggel: FC<{handelClick: FC}> = ({handelClick}) => {
  return (
    <label className="swap swap-flip text-lg fixed right-5">
      <input type="checkbox" onClick={handelClick} />
      <div className="swap-on">HU</div>
      <div className="swap-off">EN</div>
    </label>
  );
};

export default Langtoggel;

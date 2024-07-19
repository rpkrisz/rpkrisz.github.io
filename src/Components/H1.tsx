import {FC} from "react";

const H1: FC<{children: string}> = ({children}) => {
  return <h1 className="text-5xl text-center text-primary font-semibold p-2 m-3 ">{children}</h1>;
};

export default H1;

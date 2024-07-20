import {FC} from "react";

const H1: FC<{children: string; reverse?: boolean}> = ({children, reverse = false}) => {
  return reverse ? (
    <h1 className="p-2 m-3 font-bold text-5xl text-center text-primary-content bg-primary rounded-sm">{children}</h1>
  ) : (
    <h1 className="p-2 m-3 font-bold text-5xl text-center text-primary">{children}</h1>
  );
};

export default H1;

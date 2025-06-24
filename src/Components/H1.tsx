import {FC} from "react";

const H1: FC<{children: string; reverse?: boolean}> = ({children, reverse = false}) => {
  const baseStyle = "p-2 mt-4 mb-2 font-bold text-center text-3xl md:text-5xl";
  return reverse ? (
    <h1 className={`${baseStyle} text-primary-content bg-primary rounded-sm`}>{children}</h1>
  ) : (
    <h1 className={`${baseStyle} text-primary`}>{children}</h1>
  );
};

export default H1;

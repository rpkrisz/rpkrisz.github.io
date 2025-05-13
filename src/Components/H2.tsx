import {FC} from "react";

const H2: FC<{children: string; reverse?: boolean}> = ({children, reverse = false}) => {
  const baseStyle = "font-semibold my-2 text-xl md:text-3xl";
  return reverse ? (
    <h2 className={`${baseStyle} text-primary-content bg-primary rounded-sm p-1`}>{children}</h2>
  ) : (
    <h2 className={`${baseStyle} text-primary`}>{children}</h2>
  );
};

export default H2;

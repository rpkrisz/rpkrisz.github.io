import {FC} from "react";

const H3: FC<{children: string; reverse?: boolean}> = ({children, reverse = false}) => {
  const baseStyle = "font-semibold my-1 text-lg md:text-xl";
  return reverse ? (
    <h3 className={`${baseStyle}text-primary-content bg-primary rounded-sm p-1`}>{children}</h3>
  ) : (
    <h3 className={`${baseStyle} text-primary`}>{children}</h3>
  );
};

export default H3;

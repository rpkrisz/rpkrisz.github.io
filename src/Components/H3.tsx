import {FC} from "react";

const H3: FC<{children: string; className?: string; reverse?: boolean}> = ({children, calssName, reverse = false}) => {
  const baseStyle = "font-semibold text-lg md:text-xl";
  return reverse ? (
    <h3 className={`${baseStyle} ${calssName} text-primary-content bg-primary rounded-sm p-1`}>{children}</h3>
  ) : (
    <h3 className={`${baseStyle} ${calssName} text-primary`}>{children}</h3>
  );
};

export default H3;

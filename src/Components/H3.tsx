import {FC} from "react";

const H3: FC<{children: string; reverse?: boolean}> = ({children, reverse = false}) => {
  return reverse ? (
    <h3 className="text-primary-content text-xl font-semibold my-1 bg-primary rounded-sm p-1 ">{children}</h3>
  ) : (
    <h3 className="text-primary text-xl font-semibold my-1">{children}</h3>
  );
};

export default H3;

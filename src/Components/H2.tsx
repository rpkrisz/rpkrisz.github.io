import {FC} from "react";

const H2: FC<{children: string; reverse?: boolean}> = ({children, reverse = false}) => {
  return reverse ? (
    <h2 className="text-primary-content text-3xl font-semibold my-2 bg-primary rounded-sm p-1 ">{children}</h2>
  ) : (
    <h2 className="text-primary text-3xl font-semibold my-2">{children}</h2>
  );
};

export default H2;

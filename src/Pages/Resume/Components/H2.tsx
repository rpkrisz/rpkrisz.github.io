import {FC} from "react";

const H2: FC<{children: string}> = ({children}) => {
  return <h2 className="text-3xl text-gray-800 underline bg-primary rounded-sm p-1">{children}</h2>;
};

export default H2;

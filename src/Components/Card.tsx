import {FC, ReactNode} from "react";

const Card: FC<{children: ReactNode; className?: string}> = ({children, className}) => {
  return <div className={`card card-compact bg-base-300 shadow-xl ${className}`}>{children}</div>;
};

export default Card;

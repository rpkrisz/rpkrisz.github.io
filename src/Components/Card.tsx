import {FC, ReactNode} from "react";

const Card: FC<{children: ReactNode; className?: string}> = ({children, className}) => {
  return (
    <div
      className={`card card-compact p-2 bg-secondary [&_h3]:text-secondary-content shadow-lg shadow-secondary ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

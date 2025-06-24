import {FC} from "react";

const H1: FC<{children: string; className?: string; icon?: IconBaseProps; reverse?: boolean}> = ({
  children,
  className,
  icon,
  reverse = false,
}) => {
  const baseStyle = `${className} p-2 mt-4 mb-2 font-bold text-center text-3xl md:text-5xl flex flex-row items-center justify-start gap-2`;

  if (reverse)
    return (
      <h1 className={`${baseStyle} text-primary-content bg-primary rounded-sm`}>
        {icon}
        {children}
      </h1>
    );

  return (
    <h1 className={`${baseStyle} text-primary`}>
      {icon}
      {children}
    </h1>
  );
};

export default H1;

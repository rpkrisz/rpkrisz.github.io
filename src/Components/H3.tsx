import {FC, ReactElement} from "react";

const H3: FC<{children: string; className?: string; icon?: ReactElement; reverse?: boolean}> = ({
  children,
  className,
  icon,
  reverse = false,
}) => {
  const baseStyle = `${className} font-semibold text-lg md:text-xl flex flex-row items-center justify-start gap-2`;
  return reverse ? (
    <h3 className={`${baseStyle} text-primary-content bg-primary rounded-sm p-1`}>
      {icon}
      {children}
    </h3>
  ) : (
    <h3 className={`${baseStyle} text-primary`}>
      {icon}
      {children}
    </h3>
  );
};

export default H3;

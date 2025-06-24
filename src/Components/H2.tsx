import {FC} from "react";
import {IconBaseProps} from "react-icons/lib";

const H2: FC<{children: string; className?: string; icon?: IconBaseProps; reverse?: boolean}> = ({
  children,
  className,
  icon,
  reverse = false,
}) => {
  const baseStyle = `${className} font-semibold mt-4 mb-2  text-xl md:text-3xl flex flex-row items-center justify-start gap-2`;
  return reverse ? (
    <h2 className={`${baseStyle} text-primary-content bg-primary rounded-sm p-1`}>
      {icon}
      {children}
    </h2>
  ) : (
    <h2 className={`${baseStyle} text-primary`}>
      {icon}
      {children}
    </h2>
  );
};

export default H2;

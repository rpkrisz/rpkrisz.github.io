import {FC, ReactElement} from "react";

const H2: FC<{
  children: string;
  className?: string;
  icon?: ReactElement;
  reverse?: boolean;
  id?: string;
}> = ({children, className, icon, reverse = false, id}) => {
  const baseStyle = `${className} font-semibold mt-2 mb-1  text-xl md:text-3xl flex flex-row items-center justify-start gap-2`;
  return reverse ? (
    <h2 className={`${baseStyle} text-primary-content bg-primary rounded-sm p-1`} id={id}>
      {icon}
      {children}
    </h2>
  ) : (
    <h2 className={`${baseStyle} text-primary`} id={id}>
      {icon}
      {children}
    </h2>
  );
};

export default H2;

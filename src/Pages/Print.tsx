import {useReactToPrint} from "react-to-print";
import {FC, useRef} from "react";
import ResumeWithSide from "./Resume/Components/ResumeWithSide";
import "@/Components/print/Print.css"; // Importing the CSS for print styles

const Print: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({contentRef});

  return (
    <>
      <div className="hidden">
        <div ref={contentRef} className="grid grid-cols-[350px_minmax(900px,_1fr)] gap-4">
          <ResumeWithSide />
        </div>
      </div>
      <button className="btn btn-accent" onClick={reactToPrintFn}>
        Print CV
      </button>
    </>
  );
};

export default Print;

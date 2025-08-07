import {useReactToPrint} from "react-to-print";
import {FC, useRef} from "react";
import ResumeWithSide from "./ResumeWithSide";
import "@/Components/print/Print.css"; // Importing the CSS for print styles

const ResumePrint: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({contentRef});

  return (
    <>
      <div className="hidden">
        <div ref={contentRef} className="grid grid-cols-[300px_minmax(750px,_1fr)] gap-4">
          <ResumeWithSide />
        </div>
      </div>
      <button className="btn btn-accent" onClick={reactToPrintFn}>
        Print CV
      </button>
    </>
  );
};

export default ResumePrint;

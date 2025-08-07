import {FC, ReactElement} from "react";
import H2 from "@/Components/H2";
import TitleSubText from "./TitleSubText";
import {PlaceListTYPE} from "@/data/Types";
import {CircleCheck} from "lucide-react";
import Card from "@/Components/Card";

const Section: FC<{section: PlaceListTYPE; mainIcon: ReactElement}> = ({section, mainIcon}) => {
  return (
    <>
      <ul className="timeline timeline-vertical timeline-compact print:hidden">
        <li className="first-of-type:[&>hr]:first-of-type:hidden last-of-type:[&>hr]:last-of-type:hidden">
          <hr />
          <div className="timeline-middle">{mainIcon}</div>
          <H2 className="timeline-end w-full px-5 py-2 mt-1">{section.title}</H2>
          <hr />
        </li>
        {section?.items?.map(place => {
          return (
            <li
              key={place.title}
              className="first-of-type:[&>hr]:first-of-type:hidden last-of-type:[&>hr]:last-of-type:hidden"
            >
              <hr />
              <CircleCheck className="timeline-middle" />
              <Card className="timeline-end w-full">
                <TitleSubText title={place.title} subtext={place.adress} />
                <div className="pl-2">
                  {place.info?.map((info, index) => {
                    return <p key={index}>{info}</p>;
                  })}
                </div>
              </Card>
              <hr />
            </li>
          );
        })}
      </ul>
      <div className="print:block hidden">
        <H2 reverse={true}>{section.title}</H2>
        {section?.items?.map(place => {
          return (
            <div key={place.title}>
              <TitleSubText title={place.title} subtext={place.adress} />
              <div className="pl-2">
                {place.info?.map((info, index) => {
                  return <p key={index}>{info}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Section;

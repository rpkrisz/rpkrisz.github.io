import {FC} from "react";
import H2 from "../../../Components/H2";
import TitleSubText from "./TitleSubText";
import {PlaceList} from "./Types";

const Section: FC<{section: PlaceList}> = ({section}) => {
  return (
    <>
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
    </>
  );
};

export default Section;

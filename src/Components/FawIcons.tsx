import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  Transform,
  IconProp,
  FlipProp,
  SizeProp,
  PullProp,
  RotateProp,
  FaSymbol,
} from "@fortawesome/fontawesome-svg-core";
import {CSSProperties, SVGAttributes, RefAttributes} from "react";
type BackwardCompatibleOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

import {
  faFilter,
  faMagnifyingGlass,
  faEnvelope,
  faXmark,
  faUser,
  faKey,
  faLocationDot,
  faBuilding,
  faHouseLaptop,
  faHourglassEnd,
  faHourglass,
  faGraduationCap,
  faTrash,
  faPenToSquare,
  faEye,
  faCircleCheck,
  faCircleXmark,
  faUserPen,
  faHourglassStart,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

import {faGithub, faLinkedin, faSquareFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

export interface Params
  extends BackwardCompatibleOmit<SVGAttributes<SVGSVGElement>, "children" | "mask" | "transform">,
    RefAttributes<SVGSVGElement> {
  mask?: IconProp;
  maskId?: string;
  className?: string;
  color?: string;
  spin?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  pulse?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  bounce?: boolean;
  shake?: boolean;
  border?: boolean;
  fixedWidth?: boolean;
  inverse?: boolean;
  listItem?: boolean;
  flip?: FlipProp;
  size?: SizeProp;
  pull?: PullProp;
  rotation?: RotateProp;
  transform?: string | Transform;
  symbol?: FaSymbol;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
  titleId?: string;
  swapOpacity?: boolean;
}

export function InstagramIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faInstagram} />;
}

export function GithubIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faGithub} />;
}
<FontAwesomeIcon icon={faGithub} />;
export function SquareFacebookIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faSquareFacebook} />;
}

export function FloppyDiskIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faFloppyDisk} />;
}

export function UserPenIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faUserPen} />;
}
export function HourglassStartIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faHourglassStart} />;
}

export function CircleCheckIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faCircleCheck} />;
}

export function CircleXmarkIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faCircleXmark} />;
}

export function PenToSquareIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faPenToSquare} />;
}

export function EyeIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faEye} />;
}

export function FilterIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faFilter} />;
}

export function MagnifyingGlassIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faMagnifyingGlass} />;
}

export function XmarkIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faXmark} />;
}

export function EnvelopeIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faEnvelope} />;
}

export function UserIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faUser} />;
}

export function KeyIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faKey} />;
}

export function LocationDotIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faLocationDot} />;
}

export function BuildingIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faBuilding} />;
}

export function HouseLaptopIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faHouseLaptop} />;
}

export function HourglassEndIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faHourglassEnd} />;
}

export function HourglassIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faHourglass} />;
}

export function GraduationCapIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faGraduationCap} />;
}

export function TrashIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faTrash} />;
}

export function LinkedinIcon(params: Params) {
  return <FontAwesomeIcon {...params} icon={faLinkedin} />;
}

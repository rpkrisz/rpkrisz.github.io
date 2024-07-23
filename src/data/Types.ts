export interface dataTYPE {
  hungarian: {
    about: aboutTYPE;
    projects: ProjectTYPE[];
    resume: ResumeTYPE;
  };
  english: {
    about: aboutTYPE;
    projects: ProjectTYPE[];
    resume: ResumeTYPE;
  };
}

export interface ProjectTYPE {
  name: string;
  description: string;
  extras: string;
  webLink?: string;
  gitHubLink?: string;
  images: imageTYPE[];
}

export interface imageTYPE {
  src: string;
  text: string;
  alt: string;
}

export interface ResumeTYPE {
  education: PlaceListTYPE;
  experience: PlaceListTYPE;
  languages: {
    title: string;
    items: string[];
  };
  other: {
    title: string;
    items: ListTYPE<ListTYPE<string>>[];
  };
}

export interface PlaceTYPE {
  title: string;
  adress: string;
  info?: string[];
}

export interface ListTYPE<Type> {
  title: string;
  items: Type[];
}

export interface PlaceListTYPE {
  title: string;
  items: PlaceTYPE[];
}
export interface aboutTYPE {
  title: string;
  items: PlaceTYPE[];
}

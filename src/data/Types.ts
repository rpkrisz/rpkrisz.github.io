export interface dataTYPE {
  language: string;
  menu: string[];
  hero: {
    title: string;
    text: string;
    button: string;
  };
  about: AboutTYPE;
  projects: ListTYPE<ProjectTYPE>;
  resume: {
    title: string;
    resume: ResumeTYPE;
  };
}

export interface ProjectTYPE {
  name: string;
  description: string;
  extras: string;
  languages: string[];
  webLink?: string;
  gitHubLink?: string;
  images: ImageTYPE[];
}

export interface ImageTYPE {
  src: string;
  text: string;
  alt: string;
}

export interface ResumeTYPE {
  image: string;
  name: string;
  title: string;
  contact: {
    title: string;
    links: {
      title: string;
      items: {
        title: string;
        link: string;
      }[];
    };
    items: {
      title: string;
      contact: string;
    }[];
  };
  education: PlaceListTYPE;
  experience: PlaceListTYPE;
  languages: {
    title: string;
    items: string[];
  };
  other: {
    title: string;
    enumItems: ListTYPE<string>[];
    listItems: ListTYPE<string>[];
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
export interface AboutTYPE {
  title: string;
  introduction: string;
  skills: ListTYPE<ListTYPE<string>>;
  freetime: string;
  series: ListTYPE<HobbyType>;
  boardgames: ListTYPE<HobbyType>;
  sports: ListTYPE<HobbyType>;
}

export interface HobbyType {
  name: string;
  image: string;
  description?: string;
}

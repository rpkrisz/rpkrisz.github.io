export default interface Resume {
  education: PlaceList;
  experience: PlaceList;
  languages: {
    title: string;
    items: string[];
  };
  other: {
    title: string;
    items: List<List<string>>[];
  };
}

export interface Place {
  title: string;
  adress: string;
  info?: string[];
}

export interface List<Type> {
  title: string;
  items: Type[];
}

export interface PlaceList {
  title: string;
  items: Place[];
}

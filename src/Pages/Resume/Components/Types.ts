export default interface Resume {
  education: PlaceList;
  experience: PlaceList;
  languages: {
    title: string;
    items: ReadonlyArray<string>;
  };
  other: {
    title: string;
    items: ReadonlyArray<List<List<string>>>;
  };
}

export interface Place {
  title: string;
  adress: string;
  info?: ReadonlyArray<string>;
}

export interface List<Type> {
  title: string;
  items?: ReadonlyArray<Type>;
}

export interface PlaceList {
  title: string;
  items: ReadonlyArray<Place>;
}

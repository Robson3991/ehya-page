export type LinkT = {
  url: string;
  name: string;
};

export interface NavItemI extends LinkT {
  haveChildren?: boolean;
  navChildren?: LinkT[];
}

export type NavigationT = NavItemI[];

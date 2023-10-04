import { User } from "./User";

export type Student = User & {
  faculty?: string;
  familyStatus?: string;
  nationality?: string;
  citizenship?: Citizenship;

  type: "STUDENT";
};

export type Citizenship = {
  country: string;
  isResident?: boolean;
};

export type Student = {
  name: string;

  login: string;
  identityNumber?: string;
  email?: string;
  internalEmail?: string;
  phone?: string;

  birthDate?: Date;
  faculty?: string;
  familyStatus?: string;
  nationality?: string;
  citizenship?: Citizenship;
};

export type Citizenship = {
  country: string;
  isResident?: boolean;
};

export type User = {
  id: string;

  name: string;
  firstName?: string;
  lastName?: string;
  maidenName?: string;

  username: string;
  email: string;

  identityNumber?: string;
  internalEmail?: string;
  phone?: string;

  birthDate?: Date;
  image?: string;

  type: UserType;
};

export type UserType = "STUDENT" | "TEACHER";

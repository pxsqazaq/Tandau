export type User = {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  country: string;
  language: string;
  date_of_birth: string;
  profile_picture: string;
};

export type UpdateUserDTO = {
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  country: string;
  language: string;
  date_of_birth: string;
  profile_picture: string;
};

export type UpdatePasswordDTO = {
  password: string;
  new_password: string;
  verify_new_password: string;
};

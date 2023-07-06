export type RegionData = {
  [key: string]: string[];
};

export type PostData = {
  title: string;
  content: string;
  memberId: number;
  categoryId: number;
  tags: string[];
  locationId: number;
};

export type CardData = {
  title: string;
  content: string;
  userImg: string;
  userName: string;
};

export type SignupData = {
  email: string;
  password: string;
  nickName: string;
  birthYear: number | null;
  gender: boolean | null;
  location: string | null;
  welcome_msg: string;
};

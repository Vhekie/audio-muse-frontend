export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  password: string;
  role?: string;
};
export type LoginData = {
  email: string;
  password: string;
};
export type Category = {
  name: string;
  description: string;
  _id?: string;
};
export type AudioData = {
  title: string;
  point: number;
  categoryId: string;
  url?: string;
};

export type ChangePasswordData = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
//merge type
export type Audio = AudioData & {
  _id: string;
  categoryId: { name: string };
  userId: { firstName: string };
  url: string;
};
export type UpdateCategory = {
  name?: string;
  description?: string;
};
export type UpdateCategoryParams = {
  id?: string;
  data: UpdateCategory;
};

export type DownloadsData = {
  audioId: string;
  audioPoint: number;
  userId: string;
};

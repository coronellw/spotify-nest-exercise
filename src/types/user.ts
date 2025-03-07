export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  isNew?: boolean;
}

export type Role = 'INTERN' | 'ENGINEER' | 'ADMIN';

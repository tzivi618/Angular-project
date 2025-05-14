export enum Role {SECRETARY, TEACHER};

export class Team {
  constructor(
    public firstName: string,
    public lastName: string,
    public id: string,
    public phone: string,
    public email: string,
    public password: string,
    public role: Role,
  ) { }
}
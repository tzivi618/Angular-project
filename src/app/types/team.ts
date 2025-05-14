
import { Role } from "./role";

export class Team{
    constructor(
        public firstName: string,
        public lastName: string,
        public id: number,
        public phone: string,
        public email: string,
        public password: string,
        public role: Role,
    ) { }
}
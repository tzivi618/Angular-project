export class Course {
    constructor(
        public id: number,
        public name: string,
        public teacherID: number,
        public numberOFlessons: number,
        public price: number,
        public description: string,
        public startDate: Date,
        public dayOfWeek: string,
        public startTime: string
    ) { }
}
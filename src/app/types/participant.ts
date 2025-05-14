export class Participant {
  getParticipants(): Participant[] {
    throw new Error('Method not implemented.');
  }
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public lessonNumber: number,
    public price: number,
    public isPaid: boolean,
    public email: string,
    public password: string,
    

  ) { }
}


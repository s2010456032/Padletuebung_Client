import { Entry } from "./entry";
export { Entry } from "./entry";
import { User } from "./user";
export { User } from "./user";


export class Padlet {

  constructor(
    public id: number,
    public name: string,
    public published: Date,
    public is_public: number,
    public users: User[],
    public entries: Entry[]
  ) {}

}

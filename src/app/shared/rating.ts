export class Rating {

  constructor(
    public id: number,
    public username: string,
    public entry_id: number,
    public rating?: number,
    public comment?: string
  ) { }

}

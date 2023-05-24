export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const EntryFormErrorMessages = [
  new ErrorMessage('text', 'required', 'Ein Titel für den Eintrag muss angegeben werden.')
];

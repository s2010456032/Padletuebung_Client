export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const PadletFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Ein Padlettitel muss angegeben werden.'),
  new ErrorMessage('is_public', 'required', 'Es muss angegeben werden, ob das Padlet public ist oder nicht.')
];

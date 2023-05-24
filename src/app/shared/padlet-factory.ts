import { Padlet } from './padlet';
export class PadletFactory {
  static empty(): Padlet {
    return new Padlet(0, '', new Date(), 1,[],[] );
  }
  static fromObject(rawPadlet: any): Padlet {
    return new Padlet(
      rawPadlet.id,
      rawPadlet.name,
      typeof(rawPadlet.published) === 'string' ?
        new Date(rawPadlet.published) : rawPadlet.published,
      rawPadlet.is_public,
      rawPadlet.users,
      rawPadlet.entries
    );
  }
}

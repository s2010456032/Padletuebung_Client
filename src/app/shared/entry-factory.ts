import { Entry } from './entry';
export class EntryFactory {
  static empty(): Entry {
    return new Entry(0, '', 0, []);
  }
  static fromObject(rawEntry: any): Entry {
    return new Entry(
      rawEntry.id,
      rawEntry.text,
      rawEntry.padlet_id,
      rawEntry.ratings
    );
  }
}

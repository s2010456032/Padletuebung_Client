import { Rating } from './rating';
export class RatingFactory {
  static empty(): Rating {
    return new Rating(0,  '', 0,0, '');
  }
  static fromObject(rawRating: any): Rating {
    return new Rating(
      rawRating.id,
      rawRating.username,
      rawRating.entry_id,
      rawRating.rating,
      rawRating.comment
    );
  }
}

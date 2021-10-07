import {hp, wp} from '../helpers/layout';

enum HorizontalSpacing {
  ONE = wp(2.13),
  TWO = wp(4.27),
  THREE = wp(6.4),
  FOUR = wp(8.53),
  FIVE = wp(10.76),
  SIX = wp(12.8),
}

enum VerticalSpacing {
  ONE = hp(0.99),
  TWO = hp(1.97),
  THREE = hp(2.96),
  FOUR = hp(3.94),
  FIVE = hp(4.93),
  SIX = hp(5.91),
}

export {HorizontalSpacing, VerticalSpacing};

import {genRandomId} from '../../helpers/data';
import {
  selectMileageEntries,
  selectAverageFuelConsumption,
  selectTotalFuelCostsForCurrentMonth,
} from './mileage.selectors';

it('should select the mileageEntries from state', () => {
  const mileage = {
    mileageEntries: [
      {
        date: {
          month: 'August',
          year: 2021,
        },
        data: [
          {
            id: genRandomId(),
            miles: 69283,
            gas: 10,
            price: 1.5,
            createdAt: 1629266400000,
          },
        ],
      },
      {
        date: {
          month: 'September',
          year: 2021,
        },
        data: [
          {
            id: genRandomId(),
            miles: 69290,
            gas: 12,
            price: 1.53,
            createdAt: 1631260800000,
          },
          {
            id: genRandomId(),
            miles: 69610,
            gas: 15,
            price: 1.52,
            createdAt: 1632503700000,
          },
        ],
      },
    ],
  };

  const result = selectMileageEntries({mileage});

  expect(result.length).toEqual(2);
});

it('should calculate the average fuel consumption', () => {
  const mileage = {
    mileageEntries: [
      {
        date: {
          month: 'August',
          year: 2021,
        },
        data: [
          {
            id: genRandomId(),
            miles: 69283,
            gas: 10,
            price: 1.5,
            createdAt: 1629266400000,
          },
        ],
      },
      {
        date: {
          month: 'September',
          year: 2021,
        },
        data: [
          {
            id: genRandomId(),
            miles: 69290,
            gas: 12,
            price: 1.53,
            createdAt: 1631260800000,
          },
          {
            id: genRandomId(),
            miles: 69610,
            gas: 15,
            price: 1.52,
            createdAt: 1632503700000,
          },
        ],
      },
    ],
  };

  const result = selectAverageFuelConsumption({mileage});
  expect(result).toEqual(((69610 - 69283) / (15 + 12 + 10)).toFixed(3));
});

it('should calculate the total fuel costs for the current month', () => {
  const mileage = {
    mileageEntries: [
      {
        date: {
          month: 'October',
          year: 2021,
        },
        data: [
          {
            id: genRandomId(),
            miles: 69290,
            gas: 12,
            price: 1.53,
            createdAt: Date.now(),
          },
          {
            id: genRandomId(),
            miles: 69610,
            gas: 15,
            price: 1.52,
            createdAt: Date.now(),
          },
        ],
      },
    ],
  };

  const result = selectTotalFuelCostsForCurrentMonth({mileage});
  expect(result).toEqual(15 * 1.52 + 12 * 1.53);
});

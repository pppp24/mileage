import moment from 'moment';

const selectShowMileageForm = ({mileage}) => {
  return mileage.showMileageForm;
};

const selectMileageEntries = ({mileage}) => {
  return mileage.mileageEntries;
};

const selectLastFuelPrice = ({mileage}) => {
  const lastMonthEntry =
    mileage.mileageEntries[mileage.mileageEntries.length - 1];
  return lastMonthEntry.data[lastMonthEntry.data.length - 1].price.toFixed(3);
};

const selectLastFuelConsumption = ({mileage}) => {
  const lastMonthEntry =
    mileage.mileageEntries[mileage.mileageEntries.length - 1];
  const lastFuelEntry = lastMonthEntry.data[lastMonthEntry.data.length - 1];

  if (lastMonthEntry.data.length === 1) {
    const beforeLastMonthEntry =
      mileage.mileageEntries[mileage.mileageEntries.length - 2];
    const beforeLastFuelEntry =
      beforeLastMonthEntry.data[beforeLastMonthEntry.data.length - 1];

    return (
      (lastFuelEntry.miles - beforeLastFuelEntry.miles) /
      lastFuelEntry.gas
    ).toFixed(3);
  }

  const beforeLastFuelEntry =
    lastMonthEntry.data[lastMonthEntry.data.length - 2];

  return (
    (lastFuelEntry.miles - beforeLastFuelEntry.miles) /
    lastFuelEntry.gas
  ).toFixed(3);
};

const selectAverageFuelConsumption = ({mileage}) => {
  const {mileageEntries} = mileage;
  const firstEntry = mileageEntries[0].data[0];
  const lastEntry =
    mileageEntries[mileageEntries.length - 1].data[
      mileageEntries[mileageEntries.length - 1].data.length - 1
    ];
  return (
    (lastEntry.miles - firstEntry.miles) /
    mileageEntries.reduce(
      (a, b) => (a += b.data.reduce((c, d) => (c += d.gas), 0)),
      0,
    )
  ).toFixed(3);
};

const selectLastEntry = ({mileage}) => {
  const {mileageEntries} = mileage;
  const lastEntryDate =
    mileageEntries[mileageEntries.length - 1].data[
      mileageEntries[mileageEntries.length - 1].data.length - 1
    ];

  return lastEntryDate;
};

const selectTotalFuelCostsForCurrentMonth = ({mileage}) => {
  const {mileageEntries} = mileage;
  const currentMonth = moment(Date.now()).format('MMMM');
  const currentYear = moment(Date.now()).format('YYYY');
  const lastMonthEntry = mileageEntries.filter(
    e => e.date.month === currentMonth && e.date.year === parseInt(currentYear),
  );
  if (lastMonthEntry.length > 0) {
    return lastMonthEntry[0].data.reduce((a, v) => (a += v.price * v.gas), 0);
  } else {
    return 0;
  }
};

const selectTotalFuelCostsForPreviousMonth = ({mileage}) => {
  const {mileageEntries} = mileage;
  const previousMonth = moment(Date.now()).subtract(1, 'months').format('MMMM');
  const currentYear = moment(Date.now()).format('YYYY');
  const beforeLastMonthEntry = mileageEntries.filter(
    e =>
      e.date.month === previousMonth && e.date.year === parseInt(currentYear),
  );

  if (beforeLastMonthEntry.length > 0) {
    return beforeLastMonthEntry[0].data.reduce(
      (a, v) => (a += v.price * v.gas),
      0,
    );
  } else {
    return 0;
  }
};

const selectLastTwoMonths = ({mileage}) => {
  const {mileageEntries} = mileage;
  return mileageEntries.slice(mileageEntries.length - 2);
};

export {
  selectShowMileageForm,
  selectMileageEntries,
  selectLastFuelPrice,
  selectLastFuelConsumption,
  selectAverageFuelConsumption,
  selectLastEntry,
  selectLastTwoMonths,
  selectTotalFuelCostsForCurrentMonth,
  selectTotalFuelCostsForPreviousMonth,
};

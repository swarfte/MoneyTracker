interface IRecordForm {
  id: string;
  category: string;
  price: number;
  store: string;
  time: number;
  note: string;
  tags: string[];
}

interface IRecordSeries {
  id: string;
  time: number;
  storage: IRecordForm[];
}
interface ICalendarValue {
  year: number;
  month: number;
  date: number;
}

interface ITimeStampValue extends ICalendarValue {
  hour: number;
  minute: number;
}

export type { IRecordForm, IRecordSeries, ICalendarValue, ITimeStampValue };

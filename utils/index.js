import { format, differenceInMinutes } from 'date-fns'

export const setVal = val => {
  return val ? val : '-'
}

export const setFloatVal = val => {
  return val ? val.toFixed(2) * 1 : '-'
}

export const getDateDiff = (start, end) => {
  let m = differenceInMinutes(start, end);

  let h = m > 59 ? Math.ceil(m / 60) : 0;
  const d = h > 23 ? Math.ceil(h / 24) : 0;
  h = h % 24;
  m = m % 60;

  return (d != 0 ? `${d}d ` : '') + (h != 0 ? `${h}h ` : '') + (m != 0 ? `${m}m` : '');
}

export const getAddress = (address, len) => {
  return address.substr(0, len) + "..." + address.substr(address.length - len, len)
}

import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayJs = dayjs(timestampMs);
  const nowDayJs = dayjs();

  if (timestampDayJs.isBefore(nowDayJs)) {
    return {
      seconds: '00',
      minutes: '00'
    }
  }

  return {
    seconds: getRemainingSeconds(nowDayJs, timestampDayJs),
    minutes: getRemainingMinutes(nowDayJs, timestampDayJs)
  }
}

function getRemainingSeconds(nowDayJs, timestampDayJs) {
  const seconds = timestampDayJs.diff(nowDayJs, 'seconds') % 60;
  return padWithZeros(seconds, 2);
};

function getRemainingMinutes(nowDayJs, timestampDayJs) {
  const minutes = timestampDayJs.diff(nowDayJs, 'minutes') % 60;
  return padWithZeros(minutes, 2);
};

function padWithZeros(number, minLength) {
  const numberString = number.toString();

  if (numberString.lenght >= minLength) {
    return numberString;
  } else {
    return '0'.repeat(minLength - numberString.length) + numberString;
  }
}
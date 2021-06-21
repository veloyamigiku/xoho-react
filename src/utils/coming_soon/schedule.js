import { getDayOfWeekStr } from '../common/date';

export const getDateStr = function (year, month, day) {
  if (day) {
    return month + '/' + day + '(' + getDayOfWeekStr(year, month, day) + ')';
  } else {
    return month + '月以降';
  }
}

export const getComingSoonDateList = function (comingSoonData) {
  var comingSoonDateList = [];
  if (!Array.isArray(comingSoonData) || comingSoonData.length === 0) {
    return comingSoonDateList;
  }
  comingSoonData.forEach(function (comingSoon, comingSoonIdx) {
    comingSoonDateList.push({
      year: comingSoon.year,
      month: comingSoon.month,
      day: comingSoon.day,
      idx: comingSoonIdx
    });
  });
  return comingSoonDateList;
}

export const getScheduleDateList = function (comingSoonData) {
  const comingSoonDateList = getComingSoonDateList(comingSoonData);
  var scheduleDateList = [];
  var preYear = -1;
  var preMonth = -1;
  var firstYear = -1;
  var firstMonth = -1;
  comingSoonDateList.forEach(function (comingSoonDate) {
    if (firstYear === -1) {
      firstYear = comingSoonDate.year;
      firstMonth = comingSoonDate.month;
    }

    if (preYear === -1) {
      scheduleDateList.push({
        year: comingSoonDate.year,
        month: comingSoonDate.month,
        day: comingSoonDate.day,
        idx: comingSoonDate.idx
      });
    } else if (firstYear < comingSoonDate.year || firstMonth < comingSoonDate.month) {
      if (preYear < comingSoonDate.year || preMonth < comingSoonDate.month) {
        scheduleDateList.push({
          year: comingSoonDate.year,
          month: comingSoonDate.month,
          day: undefined,
          idx: comingSoonDate.idx
        });
      }
    } else {
      scheduleDateList.push({
        year: comingSoonDate.year,
        month: comingSoonDate.month,
        day: comingSoonDate.day,
        idx: comingSoonDate.idx
      });
    }
    preYear = comingSoonDate.year;
    preMonth = comingSoonDate.month;
  })

  return scheduleDateList;
}

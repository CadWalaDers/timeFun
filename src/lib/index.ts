/**
 * @name timejs
 * @author fankai16
 * @Time 2021/08/11
 * @function getDateRange  -时间区间处理
 * @function dateToTimestamp -日期区间
 * @function timestampToTime -时间戳转年月日时分秒
 * @function formatDuringDay -计算还剩下多少秒
 * @function getDate -当月
 * @function onYesterday -昨日
 * @function today   -今日
 * @function tomorrow -明天
 * @function dataFormatT -去掉时间字母T
 * @function getGrowAge -年龄换算
 * @function LeapYear -平年闰年计算
 * @function DaysOfMonth -当月多少天
 * @function getdiffdate -日期区间
 * @description 针对时间戳的处理
 **/
export function getDateRange (dateNow:any, intervalDays:number, bolPastTime:boolean) {
  // 获取多少天日期
  const oneDayTime = 24 * 60 * 60 * 1000;
  const list = [];
  let lastDay;
  if (bolPastTime == true) {
    lastDay = new Date(dateNow.getTime() - intervalDays * oneDayTime);
    list.push(formateDate(lastDay));
    list.push(formateDate(dateNow));
  } else {
    lastDay = new Date(dateNow.getTime() + intervalDays * oneDayTime);
    list.push(formateDate(dateNow));
    list.push(formateDate(lastDay));
  }
  function formateDate(time:any) {
    const year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day + '';
  }
  return list;
}

export function dateToTimestamp(dateStr:string) {
  if (!dateStr) {
    return '';
  }
  const newDataStr = dateStr.replace(/\.|\-/g, '/');
  const date = new Date(newDataStr);
  const timestamp = date.getTime();
  return timestamp;
}

export function timestampToTime(timestamp:number, tyep:string) {
  var date = new Date(timestamp * 1000); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  if (tyep === 'YYYY') {
    return Y;
  } else if (tyep === 'YYYY-mm') {
    return Y + M;
  } else if (tyep === 'YYYY-mm-dd') {
    return Y + M + D;
  } else if (tyep === 'YYYY-mm-dd-h') {
    return Y + M + D + h;
  }else if (tyep === 'YYYY-mm-dd-h-m') {
    return Y + M + D + h + m;
  } else if (tyep === 'YYYY-mm-dd-h-m-s') {
    return Y + M + D + h + m + s;
  }
}

export function formatDuringDay (mss:number,hover:string,fen:string,miao:string) {
  // 计算还剩下多少时间PS秒
  var data=mss
  var days = mss / (1000 * 60 * 60 * 24);
  var hours = (mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  var minutes =(mss % (1000 * 60 * 60)) / (1000 * 60);
  var seconds = ((mss % (1000 * 60)) / 1000).toFixed(0);
  if (days > 0) {
    return days;
  } else {
    const ishover = hover ? hover : '小时';
    const isfen = fen ? fen : '分钟';
    const ismiao = miao ? miao : '秒';
    return hours + ishover + minutes + isfen + seconds + ismiao
  }
}

export function getDate () {
  var myDate = new Date();
  var tYear = myDate.getFullYear();
  var tMonth = myDate.getMonth();
  tMonth = doHandleZero(tMonth + 1);
  return tYear + '-' + tMonth + '-01';
}

export function onYesterday() {
  var day1 = new Date();
  day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
  var s1 =
    day1.getFullYear() + '-' + (day1.getMonth() + 1) + '-' + day1.getDate();
  return day1;
}

export function today() {
  var day2 = new Date();
  day2.setTime(day2.getTime());
  var s2 =
    day2.getFullYear() + '-' + (day2.getMonth() + 1) + '-' + day2.getDate();
  return day2;
}

export function tomorrow() {
  var day3 = new Date();
  day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
  var s3 =
    day3.getFullYear() + '-' + (day3.getMonth() + 1) + '-' + day3.getDate();
  return day3;
}

function doHandleZero(zero:any) {
  var date = zero;
  if (zero.toString().length == 1) {
    date = '0' + zero;
  }
  return date;
}
export function dataFormatT(value:string) {
  // 去掉时间戳的字母T
  var year = value.substr(0, 4);
  var month = value.substr(5, 2);
  var day = value.substr(8, 2);
  var hour = value.substr(11, 2);
  var min = value.substr(14, 2);
  var second = value.substr(17, 2);
  return (
    year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second
  );
}

export function getGrowAge(birthday:any) {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var myDate = new Date(birthday);
  var myYear = myDate.getFullYear();
  var myMonth = myDate.getMonth() + 1;
  var myDay = myDate.getDate();
  var myHour = myDate.getHours();
  var myMinute = myDate.getMinutes();
  var mySecond = myDate.getSeconds();
  var gapSecond = second - mySecond;
  if (gapSecond < 0) {
    minute -= 1;
    gapSecond = 60 - mySecond + second;
  }
  var gapMinute = minute - myMinute;
  if (gapMinute < 0) {
    hour -= 1;
    gapMinute = 60 - myMinute + minute;
  }
  var gapHour = hour - myHour;
  if (gapHour < 0) {
    day -= 1;
    gapHour = 24 - myHour + hour;
  }
  var gapDay = day - myDay;
  if (gapDay < 0) {
    month -= 1;
    gapDay = getDaysOfMonth(birthday) - myDay + day;
  }
  var gapMonth = month - myMonth;
  if (gapMonth < 0) {
    year -= 1;
    gapMonth = 12 - myMonth + month;
  }
  var gapYear = year - myYear;
  if (gapYear < 0) {
    gapYear = 0;
  }
  var dateStr =
    gapYear +
    '岁 ' +
    (gapMonth < 10 ? '0' + gapMonth : gapMonth) +
    '月 ' +
    (gapDay < 10 ? '0' + gapDay : gapDay) +
    '天 ' +
    (gapHour < 10 ? '0' + gapHour : gapHour) +
    '时 ' +
    (gapMinute < 10 ? '0' + gapMinute : gapMinute) +
    '分 ' +
    (gapSecond < 10 ? '0' + gapSecond : gapSecond) +
    '秒';
  return dateStr;
}
export function LeapYear (year:any) {
  const newData=isLeapYear(year)
  return newData
}
export function DaysOfMonth (dateStr:string) {
  const newData=getDaysOfMonth(dateStr)
  return newData
}
function isLeapYear(year:any) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function getDaysOfMonth(dateStr:string) {
  var date = new Date(dateStr);
  var year = date.getFullYear();
  var mouth = date.getMonth() + 1;
  var day = 0;
  if (mouth == 2) {
    day = isLeapYear(year) ? 29 : 28;
  } else if (
    mouth == 1 ||
    mouth == 3 ||
    mouth == 5 ||
    mouth == 7 ||
    mouth == 8 ||
    mouth == 10 ||
    mouth == 12
  ) {
    day = 31;
  } else {
    day = 30;
  }
  return day;
}

export function getdiffdate(stime:string, etime:string) {
  // 初始化日期列表，数组
  var diffdate = new Array();
  var i = 0;
  // 开始日期小于等于结束日期,并循环
  while (stime <= etime) {
    diffdate[i] = stime;

    // 获取开始日期时间戳
    var stime_ts = new Date(stime).getTime();
    // console.log('当前日期：' + stime + '当前时间戳：' + stime_ts);
    // 增加一天时间戳后的日期
    var next_date = stime_ts + 24 * 60 * 60 * 1000;

    // 拼接年月日，这里的月份会返回（0-11），所以要+1
    var next_dates_y = new Date(next_date).getFullYear() + '-';
    var next_dates_m =
      new Date(next_date).getMonth() + 1 < 10
        ? '0' + (new Date(next_date).getMonth() + 1) + '-'
        : new Date(next_date).getMonth() + 1 + '-';
    var next_dates_d =
      new Date(next_date).getDate() < 10
        ? '0' + new Date(next_date).getDate()
        : new Date(next_date).getDate();
    stime = next_dates_y + next_dates_m + next_dates_d;
    // 增加数组key
    i++;
  }
  return diffdate;
}


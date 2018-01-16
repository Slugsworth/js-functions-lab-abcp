// write your code below!

function happyHolidays() {
  return "Happy holidays!"
}

happyHolidays();

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("Rick");

function happyHolidayTo(holiday,name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo("Christmas", "Rick");

function holidayCountdown(days, holiday){
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown(4, "Christmas");

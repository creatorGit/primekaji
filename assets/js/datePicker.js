// Date Picker

var now = Date.now();
$.get("https://holidays-jp.github.io/api/v1/date.json", function(holidaysData) {
  $(".date-picker").datepicker({
    dateFormat: "yy/mm/dd",
    duration: "fast",
    beforeShowDay: function(date) {
      if (date.getDay() == 0) {
        return [true, 'day-sunday', null];
      } else if (date.getDay() == 6) {
        return [true, 'day-saturday', null];
      }

      var holidays = Object.keys(holidaysData);
      for (var i = 0; i < holidays.length; i++) {
        var holiday = new Date(Date.parse(holidays[i]));
        if (holiday.getYear() == date.getYear() &&
            holiday.getMonth() == date.getMonth() &&
            holiday.getDate() == date.getDate()) {
          return [true, 'day-holiday', null];
        }
      }

      return [true, 'day-weekday', null];
    },
    isDisabled: function(date) {
      return date.valueOf() < now ? true : false;
    }
  });
});

// End of Date Picker

	$.datetimepicker.setLocale('ru');
	$('#date').datetimepicker({
			lang:'ru',
			i18n:{ru:{
				months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				dayOfWeek:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",],
			}},
			timepicker:false,
			format:'d.m.Y',
			dayOfWeekStart: 1
	});
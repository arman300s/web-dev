// Task 1: Create a date
let d1 = new Date(2005, 1, 26, 3, 12);
alert( d1 );

// Task2 : Show a weekday
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}
let date = new Date(2016, 3, 3);
alert( getWeekDay(date) );

// Task 3: European weekday
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}

// Task 4: Which day of month was many days ago?
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

// Task 5: Last day of month?
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// Task 6: How many seconds have passed today?
function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000);
}

// Task 7: How many seconds till tomorrow?
function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

// Task 8: Format the relative date
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
        return `${diffMin} min. ago`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}
// 82 / 86
// The getWeek function uses the getDay

export function addDays (date, daysToAdd) {
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd);
    return clone;
}

export function getWeek (forDate, daysOffset = 0) {
    const date = addDays(forDate, daysOffset);
    const day = date.getDay();

    return {
        date, // 2020-04-01
        start: addDays(date, -day), // start of the week // 2020-03-29
        end: addDays(date, 6 - day) // end of the week // 2020-04-04
    };
}
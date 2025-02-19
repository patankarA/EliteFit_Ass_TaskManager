export const getDateDate = (date) => {
    if (date === 0) {
        return "Today"
    } else if (date < 0) {
        return "Passed end date"
    } else {
        return `${date} days left`
    }
}

export const getDaysLeft = (endDate, showString) => {
    const inputDateObject = new Date(endDate);
    inputDateObject.setHours(0, 0, 0, 0);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const differenceInMilliseconds = inputDateObject.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return showString? getDateDate(differenceInDays) : differenceInDays
};
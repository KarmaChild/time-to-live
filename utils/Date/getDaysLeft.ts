export const getDaysLeft = (targetDate: Date): string => {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const differenceInMilliseconds = targetDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInMilliseconds / oneDay);

    if (differenceInDays === 0) {
        return 'Expiring Today';
    } else if (differenceInDays === 1) {
        return 'Expiring Tomorrow';
    } else if (differenceInDays < 0) {
        return `Expired ${+differenceInDays} ${differenceInDays == -1 ? 'day' : 'days'} ago`;
    } else {
        return `${differenceInDays} days left`;
    }
}
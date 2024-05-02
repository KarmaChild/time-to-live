import PushNotification from 'react-native-push-notification'

const notificationIds: any = {}

export const scheduleExpiryNotification = (itemId: string, itemName: string, expiryDate: Date) => {
    const expiryTimestamp = expiryDate.getTime();
    const oneDayNotificationTime = expiryTimestamp - 24 * 60 * 60 * 1000
    const threeDayNotificationTime = expiryTimestamp - 3 * 24 * 60 * 60 * 1000

    const oneDayNotificationId = `${itemId}_one_day`;
    const threeDayNotificationId = `${itemId}_three_days`;

    PushNotification.localNotificationSchedule({
        id: oneDayNotificationId,
        message: `${itemName} is expiring today!`,
        date: new Date(oneDayNotificationTime),
    })
    PushNotification.localNotificationSchedule({
        id: threeDayNotificationId,
        message: `${itemName} is expiring in 3 days!`,
        date: new Date(threeDayNotificationTime),
    })

    notificationIds[itemId] = { oneDayNotificationId, threeDayNotificationId };

    return {
        oneDayNotificationId,
        threeDayNotificationId
    };
}

export const deleteItem = (itemId: string) => {
    const { oneDayNotificationId, threeDayNotificationId } = notificationIds[itemId];

    if (oneDayNotificationId) {
        PushNotification.cancelLocalNotification(oneDayNotificationId);
    }
    if (threeDayNotificationId) {
        PushNotification.cancelLocalNotification(threeDayNotificationId);
    }

    delete notificationIds[itemId]
}

export const editItemExpiry = (itemId: string, itemName: string, newItemExpiryDate: Date) => {
    deleteItem(itemId)
    scheduleExpiryNotification(itemId, itemName, newItemExpiryDate)
}

import * as Notifications from 'expo-notifications'

const notificationIds: any = {}

export const scheduleExpiryNotification = async (itemId: string, itemName: string, expiryDate: Date) => {
    const expiryTimestamp = expiryDate.getTime()
    const oneDayNotificationTime = expiryTimestamp - 24 * 60 * 60 * 1000
    const threeDayNotificationTime = expiryTimestamp - 3 * 24 * 60 * 60 * 1000

    const oneDayNotificationId = `${itemId}_one_day`
    const threeDayNotificationId = `${itemId}_three_days`

    // testing use only
    const now = new Date();
    const oneMinuteNotificationTime = now.getTime() + 60 * 1000;
    const threeMinuteNotificationTime = now.getTime() + 3 * 60 * 1000;

    const oneDayNotification = {
        title: `${itemName} Expiring Soon!`,
        body: `${itemName} is expiring tomorrow.`,
        data: { itemId },
    }

    const threeDayNotification = {
        title: `${itemName} Expiry Reminder`,
        body: `${itemName} is expiring in 3 days.`,
        data: { itemId },
    }

    try {
        await Notifications.scheduleNotificationAsync({
            content: oneDayNotification,
            trigger: oneMinuteNotificationTime,
        })

        await Notifications.scheduleNotificationAsync({
            content: threeDayNotification,
            trigger: threeMinuteNotificationTime,
        })

        notificationIds[itemId] = { oneDayNotificationId, threeDayNotificationId }
        console.log(`Notifications Scheduled for ${oneMinuteNotificationTime} and ${threeMinuteNotificationTime} minutes.`)

        return { oneDayNotificationId, threeDayNotificationId }
    } catch (error) {
        console.error('Error scheduling notifications:', error)
        return null
    }
}

export const deleteItem = async (itemId: string) => {
    const { oneDayNotificationId, threeDayNotificationId } = notificationIds[itemId] || {}

    if (oneDayNotificationId) {
        await Notifications.cancelScheduledNotificationAsync(oneDayNotificationId)
    }

    if (threeDayNotificationId) {
        await Notifications.cancelScheduledNotificationAsync(threeDayNotificationId)
    }

    delete notificationIds[itemId]
}

export const editItemExpiry = async (itemId: string, itemName: string, newItemExpiryDate: Date) => {
    await deleteItem(itemId)
    await scheduleExpiryNotification(itemId, itemName, newItemExpiryDate)
}

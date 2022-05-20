import {
    impactAsync,
    notificationAsync,
    ImpactFeedbackStyle,
    NotificationFeedbackType,
} from 'expo-haptics'

export const handleTapFeedback = async (isError: boolean = false) => {
    if (isError) {
        await notificationAsync(NotificationFeedbackType.Error)
        return
    }
    await impactAsync(ImpactFeedbackStyle.Medium)
}

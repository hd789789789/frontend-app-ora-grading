/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';
import { StrictDict } from 'utils';

const messages = defineMessages({
  infoMessage: {
    id: 'ora-grading.NotificationsBanner.Message',
    defaultMessage: 'Bạn hiện có thể bật thông báo cho các bài tập ORA yêu cầu chấm điểm của nhân viên, từ ',
    description: 'user info message that user can enable notifications for ORA assignments',
  },
  notificationsBannerPreferencesCenterMessage: {
    id: 'ora-grading.NotificationsBanner.linkMessage',
    defaultMessage: 'trung tâm tùy chọn.',
    description: 'placeholder for the preferences center link',
  },
});

export default StrictDict(messages);

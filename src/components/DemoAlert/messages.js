import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  warningMessage: {
    id: 'ora-grading.demoAlert.warningMessage',
    defaultMessage: 'Nộp điểm bị vô hiệu hóa trong chế độ Demo của công cụ chấm điểm ORA mới.',
    description: 'Submit Grade button text after successful submission',
  },
  confirm: {
    id: 'ora-grading.demoAlert.confirm',
    defaultMessage: 'Xác nhận',
    description: 'Confirm button text',
  },
  title: {
    id: 'ora-grading.demoAlert.title',
    defaultMessage: 'Đã ngăn nộp bài trong Demo',
    description: 'Title of alert modal after submit was prevented because in demo mode',
  },
});

export default messages;

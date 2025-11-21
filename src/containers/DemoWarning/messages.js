/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';
import { StrictDict } from 'utils';

const messages = defineMessages({
  demoModeHeading: {
    id: 'ora-grading.ReviewModal.demoHeading',
    defaultMessage: 'Chế độ Demo',
    description: 'Demo mode heading',
  },
  demoModeMessage: {
    id: 'ora-grading.ReviewModal.demoMessage',
    defaultMessage: 'Bạn đang demo trải nghiệm chấm điểm nhân viên ORA mới. Bạn sẽ không thể nộp điểm cho đến khi kích hoạt tính năng này. Đây sẽ trở thành trải nghiệm chấm điểm mặc định vào ngày 9 tháng 5 (05/09/2022). Để tham gia sớm hoặc từ chối, vui lòng liên hệ Hỗ trợ đối tác.',
    description: 'Demo mode message',
  },
});

export default StrictDict(messages);

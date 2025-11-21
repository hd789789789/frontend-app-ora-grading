import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  closeReviewConfirmTitle: {
    id: 'ora-grading.ReviewModal.closeReviewConfirm.title',
    defaultMessage: 'Bạn có chắc chắn muốn đóng hộp thoại này không?',
    description: 'Prompt confirmation for closing modal',
  },
  closeReviewConfirmWarning: {
    id: 'ora-grading.ReviewModal.closeReviewConfirmWarning',
    defaultMessage: 'Điều này không thể hoàn tác. Điều này sẽ hủy bỏ công việc chưa lưu và dừng quá trình chấm điểm này.',
    description: 'Confirm discard on unsaved work and close the modal',
  },
  goBack: {
    id: 'ora-grading.ReviewModal.goBack',
    defaultMessage: 'Quay lại',
    description: 'Cancel closing the modal button text',
  },
  confirmCloseModalAction: {
    id: 'ora-grading.ReviewModal.CloseReviewConfirmModal.confirmText',
    defaultMessage: 'Đóng hộp thoại',
    description: 'Confirm closing the modal button text',
  },
});

export default messages;

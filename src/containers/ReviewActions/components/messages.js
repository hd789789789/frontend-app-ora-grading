import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  overrideConfirmTitle: {
    id: 'ora-grading.ReviewActions.overrideConfirmTitle',
    defaultMessage: 'Bạn có chắc chắn muốn ghi đè điểm này không?',
    description: 'ORA Grading override confirm modal title',
  },
  overrideConfirmWarning: {
    id: 'ora-grading.ReviewActions.overrideConfirmWarning',
    defaultMessage: 'Điều này không thể hoàn tác. Người học có thể đã nhận được điểm của họ.',
    description: 'ORA Grading override confirm modal warning/content text',
  },
  overrideConfirmContinue: {
    id: 'ora-grading.ReviewActions.overrideConfirmContinue',
    defaultMessage: 'Tiếp tục ghi đè điểm',
    description: 'ORA Grading override confirm modal confirm button',
  },
  startGrading: {
    id: 'ora-grading.ReviewActions.StartGradingButton.startGrading',
    defaultMessage: 'Bắt đầu chấm điểm',
    description: 'Review pane button text to start grading',
  },
  overrideGrade: {
    id: 'ora-grading.ReviewActions.StartGradingButton.overrideGrade',
    defaultMessage: 'Ghi đè điểm',
    description: 'Review pane button text to start grading an already graded submission',
  },
  stopGrading: {
    id: 'ora-grading.ReviewActions.StartGradingButton.stopGrading',
    defaultMessage: 'Dừng chấm điểm phản hồi này',
    description: 'Review pane button text to stop grading',
  },
  confirmStopOverrideTitle: {
    id: 'ora-grading.ReviewActions.StopGradingConfirmModal.override.title',
    defaultMessage: 'Bạn có chắc chắn muốn dừng ghi đè điểm không?',
    description: 'ORA stop overriding grade confirm modal title',
  },
  confirmStopGradingTitle: {
    id: 'ora-grading.ReviewActions.StopGradingConfirmModal.title',
    defaultMessage: 'Bạn có chắc chắn muốn dừng chấm điểm phản hồi này không?',
    description: 'ORA stop grading confirm modal title',
  },
  confirmStopWarning: {
    id: 'ora-grading.ReviewActions.StopGradingConfirmModal.warning',
    defaultMessage: 'Tiến độ của bạn sẽ bị mất.',
    description: 'ORA stop grading confirm modal warning/content text',
  },
  confirmStopOverrideAction: {
    id: 'ora-grading.ReviewActions.StopGradingConfirmModal.override.confirmText',
    defaultMessage: 'Dừng ghi đè điểm',
    description: 'ORA stop overriding grade confirm modal confirm text',
  },
  confirmStopGradingAction: {
    id: 'ora-grading.ReviewActions.StopGradingConfirmModal.confirmText',
    defaultMessage: 'Hủy chấm điểm',
    description: 'ORA stop grading confirm modal confirm text',
  },
  goBack: {
    id: 'ora-grading.ReviewActions.goBack',
    defaultMessage: 'Quay lại',
    description: 'Confirm modal cancel button text',
  },
  loadPrevious: {
    id: 'ora-grading.ReviewActions.loadPrevious',
    defaultMessage: 'Tải bài nộp trước',
    description: 'Alt text for submission navigation (to previous submission) button',
  },
  loadNext: {
    id: 'ora-grading.ReviewActions.loadNext',
    defaultMessage: 'Tải bài nộp tiếp theo',
    description: 'Alt text for submission navigation (to next submission) button',
  },
  navigationLabel: {
    id: 'ora-grading.ReviewActions.navigationLabel',
    defaultMessage: '{current} trên {total}',
    description: 'Submission navigation location label',
  },
});

export default messages;

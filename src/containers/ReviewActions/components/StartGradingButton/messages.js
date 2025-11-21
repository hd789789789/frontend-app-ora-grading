import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
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
});

export default messages;

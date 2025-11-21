/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';
import { StrictDict } from 'utils';

const messages = defineMessages({
  gradeNotSubmittedHeading: {
    id: 'ora-grading.ReviewModal.gradeNotSubmitted.heading',
    defaultMessage: 'Chưa nộp điểm',
    description: 'Grade submission network error heading',
  },
  gradeNotSubmittedContent: {
    id: 'ora-grading.ReviewModal.gradeNotSubmitted.Content',
    defaultMessage: "Rất tiếc, đã xảy ra lỗi khi chúng tôi thử gửi điểm này. Vui lòng thử lại.",
    description: 'Grade submission network error message',
  },
  resubmitGrade: {
    id: 'ora-grading.ReviewModal.resubmitGrade',
    defaultMessage: 'Nộp lại điểm',
    description: 'Resubmit grade button after network failure',
  },
  dismiss: {
    id: 'ora-grading.ReviewModal.dismiss',
    defaultMessage: 'Bỏ qua',
    description: 'Dismiss error action button text',
  },
  errorSubmittingGradeHeading: {
    id: 'ora-grading.ReviewModal.errorSubmittingGrade.Heading',
    defaultMessage: 'Lỗi khi nộp điểm',
    description: 'Error Submitting Grade heading text',
  },
  errorSubmittingGradeContent: {
    id: 'ora-grading.ReviewModal.errorSubmittingGrade.Content',
    defaultMessage: 'Có vẻ như người khác đã làm trước! Bài nộp điểm của bạn đã bị từ chối',
    description: 'Error Submitting Grade content',
  },
});

export default StrictDict(messages);

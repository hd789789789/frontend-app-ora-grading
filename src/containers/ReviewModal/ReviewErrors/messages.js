/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';
import { StrictDict } from 'utils';

const messages = defineMessages({
  loadErrorHeading: {
    id: 'ora-grading.ReviewModal.loadErrorHeading',
    defaultMessage: 'Lỗi khi tải bài nộp',
    description: 'Submission response load failure alert header',
  },
  loadErrorMessage: {
    id: 'ora-grading.ReviewModal.loadErrorMessage1',
    defaultMessage: 'Đã xảy ra lỗi khi tải bài nộp này. Hãy thử tải lại bài nộp này.',
    description: 'Submission response load failure alert message',
  },
  reloadSubmission: {
    id: 'ora-grading.ReviewModal.reloadSubmission',
    defaultMessage: 'Tải lại bài nộp',
    description: 'Reload button text in case of network failure',
  },
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
  errorLockContestedHeading: {
    id: 'ora-grading.ReviewModal.errorLockContestedHeading',
    defaultMessage: 'Khóa thuộc về người dùng khác',
    description: 'Error lock by someone else',
  },
  errorLockContested: {
    id: 'ora-grading.ReviewModal.errorLockContested',
    defaultMessage: 'Khóa thuộc về người dùng khác',
    description: 'Error lock by someone else',
  },
  errorLockBadRequestHeading: {
    id: 'ora-grading.ReviewModal.errorLockBadRequestHeading',
    defaultMessage: 'Yêu cầu không hợp lệ. Vui lòng kiểm tra đầu vào của bạn.',
    description: 'Error lock request for missing params',
  },
  errorLockBadRequest: {
    id: 'ora-grading.ReviewModal.errorLockBadRequest',
    defaultMessage: 'Yêu cầu không hợp lệ. Vui lòng kiểm tra đầu vào của bạn.',
    description: 'Error lock request for missing params',
  },
  downloadFailedHeading: {
    id: 'ora-grading.ReviewModal.errorDownloadFailed',
    defaultMessage: `Không thể tải xuống tệp`,
  },
  downloadFailedContent: {
    id: 'ora-grading.ReviewModal.errorDownloadFailedContent',
    defaultMessage: `Chúng tôi xin lỗi, đã xảy ra lỗi khi chúng tôi cố tải xuống các tệp này. Vui lòng thử lại.`,
    description: 'Failed download error content',
  },
  retryDownload: {
    id: 'ora-grading.ReviewModal.errorRetryDownload',
    defaultMessage: 'Thử tải lại',
    description: 'Failed download retry button text',
  },
  failedFiles: {
    id: 'ora-grading.ReviewModal.errorDownloadFailedFiles',
    defaultMessage: 'Tệp thất bại:',
    description: 'List header for file download failure alert',
  },
});

export default StrictDict(messages);

import { defineMessages } from '@edx/frontend-platform/i18n';
import { gradingStatuses } from './constants';

const messages = defineMessages({
  ungraded: {
    id: 'ora-grading.lms-api.gradingStatusDisplay.ungraded',
    defaultMessage: 'Chưa chấm điểm',
    description: 'Grading status label for ungraded submission',
  },
  locked: {
    id: 'ora-grading.lms-api.gradingStatusDisplay.locked',
    defaultMessage: 'Hiện đang được người khác chấm điểm',
    description: 'Grading status label for locked submission',
  },
  graded: {
    id: 'ora-grading.lms-api.gradingStatusDisplay.graded',
    defaultMessage: 'Đã hoàn thành chấm điểm',
    description: 'Grading status label for graded submission',
  },
  inProgress: {
    id: 'ora-grading.lms-api.gradingStatusDisplay.inProgress',
    defaultMessage: 'Bạn hiện đang chấm điểm phản hồi này',
    description: 'Grading status label for in-progress submission',
  },
});

// re-keying the messages to ensure that the api can link to them even if the passed
// status keys change.
export default {
  [gradingStatuses.ungraded]: messages.ungraded,
  [gradingStatuses.locked]: messages.locked,
  [gradingStatuses.graded]: messages.graded,
  [gradingStatuses.inProgress]: messages.inProgress,
};

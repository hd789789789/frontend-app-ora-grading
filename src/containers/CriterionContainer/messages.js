import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addComments: {
    id: 'ora-grading.CriterionFeedback.addCommentsLabel',
    defaultMessage: 'Thêm nhận xét',
    description: 'label for editable feedback field',
  },
  comments: {
    id: 'ora-grading.CriterionFeedback.commentsLabel',
    defaultMessage: 'Nhận xét',
    description: 'label for read-only feedback field',
  },
  optional: {
    id: 'ora-grading.CriterionFeedback.optional',
    defaultMessage: '(Tùy chọn)',
    description: 'additional label for optional feedback field',
  },
  optionPoints: {
    id: 'ora-grading.RadioCriterion.optionPoints',
    defaultMessage: '{points} điểm',
    description: 'criterion option point value display',
  },
  rubricSelectedError: {
    id: 'ora-grading.RadioCriterion.rubricSelectedError',
    defaultMessage: 'Yêu cầu chọn tiêu chí chấm điểm',
    description: 'Error message when rubric radio did not get selected',
  },
  criterionFeedbackError: {
    id: 'ora-grading.CriterionFeedback.criterionFeedbackError',
    defaultMessage: 'Yêu cầu nhập phản hồi',
    description: 'Error message when feedback is required',
  },
});

export default messages;

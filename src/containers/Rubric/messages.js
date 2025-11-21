import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  gradeSubmitted: {
    id: 'ora-grading.Rubric.gradeSubmitted',
    defaultMessage: 'Đã nộp điểm',
    description: 'Submit Grade button text after successful submission',
  },
  rubric: {
    id: 'ora-grading.Rubric.rubric',
    defaultMessage: 'Tiêu chí chấm điểm',
    description: 'Rubric interface label',
  },
  submitGrade: {
    id: 'ora-grading.Rubric.submitGrade',
    defaultMessage: 'Nộp điểm',
    description: 'Submit Grade button text',
  },
  submittingGrade: {
    id: 'ora-grading.Rubric.submittingGrade',
    defaultMessage: 'Đang nộp điểm',
    description: 'Submit Grade button text while submitting',
  },
  overallComments: {
    id: 'ora-grading.Rubric.overallComments',
    defaultMessage: 'Nhận xét tổng thể',
    description: 'Rubric overall comments label',
  },
  addComments: {
    id: 'ora-grading.Rubric.addComments',
    defaultMessage: 'Thêm nhận xét (Tùy chọn)',
    description: 'Rubric comments input label',
  },
  comments: {
    id: 'ora-grading.Rubric.comments',
    defaultMessage: 'Nhận xét (Tùy chọn)',
    description: 'Rubric comments display label',
  },
  overallFeedbackError: {
    id: 'ora-grading.RubricFeedback.error',
    defaultMessage: 'Yêu cầu nhập phản hồi tổng thể',
    description: 'Error message when feedback input is required',
  },
});

export default messages;

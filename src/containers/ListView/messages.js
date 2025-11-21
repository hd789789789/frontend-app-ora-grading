import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  backToResponses: {
    id: 'ora-grading.ListView.ListViewBreadcrumbs.backToResponses',
    defaultMessage: 'Quay lại tất cả các phản hồi đang mở',
    description: 'Breadcrumbs link text to return to ORA list in LMS',
  },
  noResultsFoundTitle: {
    id: 'ora-grading.ListView.noResultsFoundTitle',
    defaultMessage: 'Chưa có gì ở đây',
    description: 'Empty table for the submission table title',
  },
  noResultsFoundBody: {
    id: 'ora-grading.ListView.noResultsFoundBody',
    defaultMessage: 'Khi người học nộp phản hồi, chúng sẽ xuất hiện ở đây',
    description: 'Empty table messages',
  },
  viewAllResponses: {
    id: 'ora-grading.ListView.viewAllResponses',
    defaultMessage: 'Xem tất cả phản hồi',
    description: 'Button text to load all responses for review/grading',
  },
  viewSelectedResponses: {
    id: 'ora-grading.ListView.viewSelectedResponses',
    defaultMessage: 'Xem các phản hồi đã chọn ({value})',
    description: 'Button text to load selected responses for review/grading',
  },
  username: {
    id: 'ora-grading.ListView.tableHeaders.username',
    defaultMessage: 'Tên người dùng',
    description: 'Username table column header for submission list view',
  },
  teamName: {
    id: 'ora-grading.ListView.tableHeaders.teamName',
    defaultMessage: 'Tên nhóm',
    description: 'Team name table column header for submission list view',
  },
  learnerSubmissionDate: {
    id: 'ora-grading.ListView.tableHeaders.learnerSubmissionDate',
    defaultMessage: 'Ngày nộp bài của người học',
    description: 'Learner submission date table column header for submission list view',
  },
  teamSubmissionDate: {
    id: 'ora-grading.ListView.tableHeaders.teamSubmissionDate',
    defaultMessage: 'Ngày nộp bài của nhóm',
    description: 'Team submission date table column header for submission list view',
  },
  grade: {
    id: 'ora-grading.ListView.tableHeaders.grade',
    defaultMessage: 'Điểm',
    description: 'Grade table column header for submission list view',
  },
  gradingStatus: {
    id: 'ora-grading.ListView.tableHeaders.gradingStatus',
    defaultMessage: 'Trạng thái chấm điểm',
    description: 'Grading status table column header for submission list view',
  },
  loadErrorHeading: {
    id: 'ora-grading.ListView.loadErrorHeading',
    defaultMessage: 'Lỗi khi tải bài nộp',
    description: 'Initialization failure alert header',
  },
  loadErrorMessage: {
    id: 'ora-grading.ListView.loadErrorMessage1',
    defaultMessage: 'Đã xảy ra lỗi khi tải các bài nộp cho phản hồi này. Hãy thử tải lại trang hoặc {backToResponses}.',
    description: 'Initialization failure alert message line 2',
  },
  backToResponsesLowercase: {
    id: 'ora-grading.ListView.backToResponsesLowercase',
    defaultMessage: 'quay lại tất cả Phản hồi đang mở',
    description: 'lowercase string for link to list of all open responses in lms',
  },
  reloadSubmissions: {
    id: 'ora-grading.ListView.reloadSubmissions',
    defaultMessage: 'Tải lại bài nộp',
    description: 'Reload button text in case of network failure',
  },
  loadingResponses: {
    id: 'ora-grading.ListView.loadingResponses',
    defaultMessage: 'Đang tải phản hồi',
    description: 'loading text for submission response list',
  },
});

export default messages;

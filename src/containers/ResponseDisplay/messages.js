import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  tableNameHeader: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.tableNameHeader',
    defaultMessage: 'Tên',
    description: 'Table header file name',
  },
  tableExtensionHeader: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.tableExtensionHeader',
    defaultMessage: 'Phần mở rộng tệp',
    description: 'Table header file extension',
  },
  tablePopoverHeader: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.tablePopoverHeader',
    defaultMessage: 'Siêu dữ liệu tệp',
    description: 'Table header for popover file metadata',
  },
  downloadFiles: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.downloadFiles',
    defaultMessage: 'Tải xuống tệp',
    description: 'Download files inactive state label',
  },
  downloading: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.downloading',
    defaultMessage: 'Đang tải xuống',
    description: 'Download files pending state label',
  },
  downloaded: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.downloaded',
    defaultMessage: 'Đã tải xuống!',
    description: 'Download files completed state label',
  },
  retryDownload: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.retryDownload',
    defaultMessage: 'Thử tải lại',
    description: 'Download files failed state label',
  },
  submissionFiles: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.submissionFile',
    defaultMessage: 'Tệp bài nộp',
    description: 'Total submission files',
  },
  exceedFileSize: {
    id: 'ora-grading.ResponseDisplay.SubmissionFiles.fileSizeExceed',
    defaultMessage: 'Vượt quá kích thước tải xuống cho phép',
    description: 'Exceed the allow download size error message',
  },
});

export default messages;

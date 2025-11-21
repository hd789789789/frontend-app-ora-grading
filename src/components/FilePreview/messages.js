import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  fileInfo: {
    id: 'ora-grading.InfoPopover.fileInfo',
    defaultMessage: 'Thông tin tệp',
    description: 'Popover trigger button text for file preview card',
  },
  retryButton: {
    id: 'ora-grading.ResponseDisplay.FileRenderer.retryButton',
    defaultMessage: 'Thử lại',
    description: 'Retry button for error in file renderer',
  },
  fileNotFoundError: {
    id: 'ora-grading.ResponseDisplay.FileRenderer.fileNotFound',
    defaultMessage: 'Không tìm thấy tệp',
    description: 'File not found error message',
  },
  unknownError: {
    id: 'ora-grading.ResponseDisplay.FileRenderer.unknownError',
    defaultMessage: 'Lỗi không xác định',
    description: 'Unknown errors message',
  },
});

export default messages;

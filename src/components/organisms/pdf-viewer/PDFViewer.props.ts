import { PageChangeEvent, ViewerProps } from '@react-pdf-viewer/core';

interface PDFViewerProps extends ViewerProps {
  onPageChange?: (e: PageChangeEvent) => void;
}

export default PDFViewerProps;

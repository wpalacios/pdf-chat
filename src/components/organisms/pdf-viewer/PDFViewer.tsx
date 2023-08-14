import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { ToolbarSlot, TransformToolbarSlot, toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { PDF_WORKER_URL } from 'constants/config';
import { usePdfChat } from 'hooks';
import { useCallback, useEffect } from 'react';
import PDFViewerProps from './PDFViewer.props';

const PDFViewer = ({ onPageChange, ...props }: PDFViewerProps): React.ReactElement => {
  const toolbarPluginInstance = toolbarPlugin({});
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {
    pdfViewer: { page }
  } = usePdfChat();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const transform: TransformToolbarSlot = useCallback(
    (slot: ToolbarSlot) => ({
      ...slot,
      Upload: () => <></>,
      Download: () => <></>,
      SwitchTheme: () => <></>,
      Open: () => <></>
    }),
    []
  );

  useEffect(() => {
    if (page) {
      pageNavigationPluginInstance.jumpToPage(page);
    }
  }, [page, pageNavigationPluginInstance]);

  return (
    <Worker workerUrl={PDF_WORKER_URL}>
      <div className="border-2">
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
      </div>
      <div className="h-[calc(100%-36px)] sm:h-full">
        <Viewer {...props} plugins={[toolbarPluginInstance, pageNavigationPluginInstance]} />
      </div>
    </Worker>
  );
};

export default PDFViewer;

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "pdfjs-dist/web/pdf_viewer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { downloadFile } from "../../utils/commonFunction";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewerModal({
  showModal,
  toggle,
  fileUrl = "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
  isDownload = false,
  title,
  isIframeShow = false,
}) {
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = (pdfDocument) => {
    setNumPages(pdfDocument.numPages);
  };

  return (
    <>
      {showModal && (
        <Modal isOpen={showModal} toggle={toggle} size="xl" centered scrollable>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            {isIframeShow ? (
              <iframe
                src={fileUrl}
                width="100%"
                height="600"
                // allow="autoplay"
              ></iframe>
            ) : (
              <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(err) => console.error("Load error:", err)}
              >
                {Array.from({ length: numPages }, (_, index) => (
                  <Page key={index + 1} pageNumber={index + 1} />
                ))}
              </Document>
            )}
          </ModalBody>

          <ModalFooter>
            <button className="secondary__btn download__btn" onClick={toggle}>
              Close
            </button>
            {isDownload && (
              <button
                className="primary__btn download__btn"
                onClick={() => downloadFile(fileUrl, "vivek_resume.pdf")}
              >
                <svg
                  className="download__btn--svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </button>
            )}
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}

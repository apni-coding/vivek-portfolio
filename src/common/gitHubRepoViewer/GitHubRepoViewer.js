import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./gitHubRepoViewer.scss";


export default function GitHubRepoViewer({
  modalOpen,
  toggleModal,
  gitHubOwner,
  repoName,
  branchName,
}) {
    const API_BASE = `https://api.github.com/repos/${gitHubOwner}/${repoName}/contents`;
//     const API_BASE = (path = "") =>
//   `https://api.github.com/repos/${gitHubOwner}/${repoName}/contents${path ? `/${path}` : ""}?ref=${branchName}`;

  const [files, setFiles] = useState([]);
  const [path, setPath] = useState(""); // Current folder path
  const [selectedFileContent, setSelectedFileContent] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [loading, setLoading] = useState(false);
  //   const [modalOpen, setModalOpen] = useState(false);

  // Load files for current path
  useEffect(() => {
    if (modalOpen) {
      fetch(`${API_BASE}/${path}`)
        .then((res) => res.json())
        .then((data) => {
          setFiles(data);
          setSelectedFileContent("");
        });
    }
  }, [path, modalOpen]);

  // Handle click on folder or file
  const onFileClick = (file) => {
    if (file.type === "dir") {
      setPath(file.path); // Navigate into folder
    } else if (file.type === "file") {
      setLoading(true);
      setSelectedFileName(file.name);
      fetch(file.download_url)
        .then((res) => res.text())
        .then((text) => {
          setSelectedFileContent(text);
          setLoading(false);
        });
    }
  };

  // Navigate back
  const goBack = () => {
    if (!path) return;
    const parts = path.split("/");
    parts.pop();
    setPath(parts.join("/"));
  };

  return (
    <div>
      {/* Button to open modal */}
      {/* <Button color="primary" onClick={() => setModalOpen(true)}>
        📂 View Repo
      </Button> */}

      {/* Modal with folder + code */}
      <Modal isOpen={modalOpen} toggle={toggleModal} size="xl" centered scrollable>
        <ModalHeader toggle={toggleModal}>GitHub Repository Viewer</ModalHeader>
        <ModalBody style={{ display: "flex", height: "80vh", padding: 0 }}>
          {/* Folder Structure */}
          <div
            style={{
              width: "280px",
              borderRight: "1px solid #333",
              background: "#f8f9fa",
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {path && (
              <div
                style={{
                  cursor: "pointer",
                  color: "blue",
                  marginBottom: "10px",
                }}
                onClick={goBack}
              >
                ⬅ Back
              </div>
            )}
            <ListGroup flush>
              {files.map((file) => (
                <ListGroupItem
                  key={file.path}
                  className={file.type === "dir" ? "folder" : "file"}
                  style={{
                    cursor: "pointer",
                    background:
                      file.name === selectedFileName ? "#e9ecef" : "white",
                  }}
                  onClick={() => onFileClick(file)}
                >
                  {file.type === "dir" ? "📁" : "📄"} {file.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>

          {/* Code Viewer */}
          <div
            style={{ flex: 1, backgroundColor: "#1e1e1e", overflow: "auto" }}
          >
            {loading ? (
              <div style={{ padding: "20px", color: "white" }}>
                Loading file content...
              </div>
            ) : selectedFileContent ? (
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                showLineNumbers
                wrapLongLines
                customStyle={{
                  fontSize: "14px",
                  fontFamily: "'Fira Code', 'Consolas', monospace",
                  padding: "16px",
                  margin: 0,
                  backgroundColor: "#1e1e1e",
                }}
                lineNumberStyle={{
                  minWidth: "2em",
                  paddingRight: "12px",
                  textAlign: "right",
                  color: "#858585",
                }}
              >
                {selectedFileContent}
              </SyntaxHighlighter>
            ) : (
              <div style={{ padding: "20px", color: "white" }}>
                Select a file to view its code
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

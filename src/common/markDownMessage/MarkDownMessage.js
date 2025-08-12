// MarkdownMessage.jsx
import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownMessage({ message }) {
  return <ReactMarkdown>{message}</ReactMarkdown>;
}

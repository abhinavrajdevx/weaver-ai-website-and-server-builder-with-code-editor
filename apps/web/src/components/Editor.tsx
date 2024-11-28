import MonacoEditor from "@monaco-editor/react";
import { useFileStore } from "../store/fileStore";
import { View } from "lucide-react";

export function Editor() {
  const { selectedFile, updateFileContent } = useFileStore();

  const handleEditorChange = (value: string | undefined) => {
    if (selectedFile && value !== undefined) {
      updateFileContent(selectedFile.path, value);
    }
  };

  if (!selectedFile) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a file to edit
      </div>
    );
  }

  return (
    <MonacoEditor
      height="100%"
      width={"100%"}
      defaultLanguage="javascript"
      theme="vs-dark"
      value={selectedFile.content}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: "on",
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}

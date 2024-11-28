import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { PromptInput } from "./components/PromptInput";
import { Preview } from "./components/Preview";
import { FileExplorer } from "./components/FileExplorer";
import { Editor } from "./components/Editor";
import { useFileStore } from "./store/fileStore";
import { FileNode } from "./types/file";

const PromptCard = ({
  handleGenerateWebsite,
  isLoading,
  showAiResponse,
}: {
  isLoading: boolean;
  showAiResponse?: boolean;
  handleGenerateWebsite: (prompt: string) => Promise<void>;
}) => (
  <div className="rounded-lg neon-border p-6 w-full h-full flex flex-col">
    {!showAiResponse && (
      <h2 className="text-lg font-medium text-cyber-accent mb-4">
        Create Your Website
      </h2>
    )}
    {showAiResponse && <div className="flex-grow w-full"></div>}
    <PromptInput
      showAiResponse
      onSubmit={handleGenerateWebsite}
      isLoading={isLoading}
    />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const { setFiles } = useFileStore();

  useEffect(() => {
    const mockFiles: FileNode[] = [
      {
        id: "1",
        name: "src",
        type: "directory",
        path: "/src",
        children: [
          {
            id: "2",
            name: "index.html",
            type: "file",
            path: "/src/index.html",
            content:
              "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>",
          },
          {
            id: "3",
            name: "styles",
            type: "directory",
            path: "/src/styles",
            children: [
              {
                id: "4",
                name: "main.css",
                type: "file",
                path: "/src/styles/main.css",
                content: "body { margin: 0; padding: 0; }",
              },
            ],
          },
        ],
      },
    ];
    setFiles(mockFiles);
  }, [setFiles]);

  const handleGenerateWebsite = async (prompt: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const mockCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Generated Website</title>
</head>
<body>
    <h1>Hello from AI Generated Website!</h1>
    <p>This is a mock preview based on your prompt:</p>
    <blockquote>${prompt}</blockquote>
</body>
</html>`;

      setGeneratedCode(mockCode);
      setPreviewUrl("about:blank");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-screen bg-cyber-dark text-cyber-text flex flex-col">
      <Header />
      <div className="flex flex-grow gap-6 w-full p-9">
        <div className="flex-1 w-full max-w-[400px]">
          <PromptCard
            showAiResponse
            isLoading={isLoading}
            handleGenerateWebsite={handleGenerateWebsite}
          />
        </div>
        <div className="flex flex-1">
          <div className="w-64 flex-shrink-0">
            <FileExplorer />
          </div>
          <div className="border-2 border-cyber-accent/20 border-l-0 flex-1">
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

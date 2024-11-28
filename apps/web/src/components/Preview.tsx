import React from 'react';
import { Code, Copy, Download, Monitor } from 'lucide-react';

interface PreviewProps {
  code: string;
  previewUrl: string;
}

export function Preview({ code, previewUrl }: PreviewProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  if (!code) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="cyber-panel rounded-lg neon-border">
        <div className="border-b border-cyber-accent/20 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Monitor className="h-4 w-4 text-cyber-accent" />
            <h3 className="text-sm font-medium text-cyber-text">Neural Output Preview</h3>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center px-3 py-1 border border-cyber-accent/20 rounded-md text-sm font-medium text-cyber-accent bg-cyber-dark hover:bg-cyber-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyber-accent transition-colors duration-200"
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy Code
            </button>
            <button
              onClick={() => window.open(previewUrl, '_blank')}
              className="inline-flex items-center px-3 py-1 border border-cyber-accent/20 rounded-md text-sm font-medium text-cyber-accent bg-cyber-dark hover:bg-cyber-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyber-accent transition-colors duration-200"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
        </div>
        <div className="p-4">
          <iframe
            src={previewUrl}
            className="w-full h-[600px] border-2 border-cyber-accent/20 rounded bg-white"
            title="Website Preview"
          />
        </div>
      </div>
      <div className="cyber-panel rounded-lg neon-border p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Code className="h-4 w-4 text-cyber-accent" />
            <span className="text-sm text-cyber-text">Neural Network Output</span>
          </div>
        </div>
        <pre className="text-sm text-cyber-text/80 overflow-x-auto bg-cyber-dark/50 p-4 rounded-md border border-cyber-accent/20">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
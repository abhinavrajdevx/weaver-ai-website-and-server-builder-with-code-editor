import React from 'react';
import { ChevronRight, ChevronDown, File, Folder } from 'lucide-react';
import { FileNode } from '../types/file';
import { useFileStore } from '../store/fileStore';

interface FileTreeProps {
  node: FileNode;
  level?: number;
}

function FileTree({ node, level = 0 }: FileTreeProps) {
  const [isOpen, setIsOpen] = React.useState(true);
  const { setSelectedFile, selectedFile } = useFileStore();

  const handleClick = () => {
    if (node.type === 'directory') {
      setIsOpen(!isOpen);
    } else {
      setSelectedFile(node);
    }
  };

  const isSelected = selectedFile?.path === node.path;

  return (
    <div style={{ marginLeft: `${level * 12}px` }}>
      <div
        className={`flex items-center py-1 px-2 cursor-pointer hover:bg-cyber-accent/10 rounded-md transition-colors duration-200 ${
          isSelected ? 'bg-cyber-accent/20 text-cyber-accent' : 'text-cyber-text/80'
        }`}
        onClick={handleClick}
      >
        <span className="mr-1">
          {node.type === 'directory' ? (
            isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )
          ) : (
            <File className="h-4 w-4" />
          )}
        </span>
        {node.type === 'directory' && <Folder className="h-4 w-4 mr-1" />}
        <span className="text-sm font-mono">{node.name}</span>
      </div>
      {node.type === 'directory' && isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTree key={child.path} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileExplorer() {
  const { files } = useFileStore();

  return (
    <div className="h-full cyber-panel border-cyber-accent/20 border-r-0  overflow-y-auto">
      <div className="p-4 border-b border-cyber-accent/20">
        <h2 className="text-sm font-medium text-cyber-accent">System Files</h2>
      </div>
      <div className="px-2 py-2">
        {files.map((file) => (
          <FileTree key={file.path} node={file} />
        ))}
      </div>
    </div>
  );
}
export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: FileNode[];
  path: string;
}

export interface FileStore {
  files: FileNode[];
  selectedFile: FileNode | null;
  setFiles: (files: FileNode[]) => void;
  setSelectedFile: (file: FileNode | null) => void;
  updateFileContent: (path: string, content: string) => void;
}
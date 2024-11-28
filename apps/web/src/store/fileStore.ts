import { create } from 'zustand';
import { FileNode, FileStore } from '../types/file';

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  selectedFile: null,
  setFiles: (files) => set({ files }),
  setSelectedFile: (file) => set({ selectedFile: file }),
  updateFileContent: (path, content) =>
    set((state) => ({
      files: updateFileContentInTree(state.files, path, content),
    })),
}));

function updateFileContentInTree(
  files: FileNode[],
  path: string,
  content: string
): FileNode[] {
  return files.map((file) => {
    if (file.path === path) {
      return { ...file, content };
    }
    if (file.children) {
      return {
        ...file,
        children: updateFileContentInTree(file.children, path, content),
      };
    }
    return file;
  });
}
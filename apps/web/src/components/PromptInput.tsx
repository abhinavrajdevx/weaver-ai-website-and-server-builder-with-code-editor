import React, { useState } from "react";
import { Wand2, Terminal } from "lucide-react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  showAiResponse?: boolean;
}

export function PromptInput({
  onSubmit,
  isLoading,
  showAiResponse,
}: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        {!showAiResponse && (
          <label
            htmlFor="prompt"
            className="flex items-center text-sm font-medium text-cyber-text/80"
          >
            <Terminal className="h-4 w-4 mr-2 text-cyber-accent" />
            Enter Prompt
          </label>
        )}
        <textarea
          id="prompt"
          rows={4}
          className="mt-2 block w-full rounded-md bg-cyber-dark/50 border border-cyber-accent/20 text-cyber-text placeholder-cyber-text/30 focus:border-cyber-accent focus:ring-cyber-accent/50 sm:text-sm"
          placeholder="Create a Sticky notes application."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="inline-flex items-center px-4 py-2 border border-cyber-accent/20 rounded-md text-sm font-medium text-cyber-accent bg-cyber-dark hover:bg-cyber-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyber-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 neon-border"
      >
        <Wand2 className="h-4 w-4 mr-2" />
        {isLoading ? "Initializing Neural Network..." : "Execute Generation"}
      </button>
    </form>
  );
}

import React from 'react';
import { Button } from '@mui/material';
import KeywordModal from './KeywordModal';
import PromptModal from './PromptModal';
import ExportToExcel from '../ExportToExcel';

const ActionButtons = ({
  keywords,
  setIsKeywordModalOpen,
  handleExportToWord,
  summary,
  questions,
  isDarkMode,
  handleTrizAnalysisClick,
  isLoading,
  isKeywordModalOpen,
  onCloseKeywordModal,
  handleKeywordClick,
  theme,
  isPromptModalOpen,
  setIsPromptModalOpen, // Ensure this prop is passed correctly
  handleClosePromptModal,
  suggestedPrompts,
  handlePromptClick,
  PromptModal,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Keywords:</h3>
      <div className="flex space-x-2">
        <Button onClick={() => setIsKeywordModalOpen(true)}>
          View Keywords
        </Button>
        {/* <Button onClick={() => setIsPromptModalOpen(true)}>
          ĐỀ XUẤT PROMPTS
        </Button> */}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleExportToWord}
          disabled={!summary || questions.length === 0}
        >
          Export to Word
        </Button>
        {/* {summary && (
          <ExportToExcel summary={summary} isDarkMode={isDarkMode} />
        )} */}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleTrizAnalysisClick}
          disabled={!summary || isLoading}
        >
          Find Solutions With TRIZ
        </Button>
      </div>
      <KeywordModal
        isOpen={isKeywordModalOpen}
        onClose={onCloseKeywordModal}
        keywords={keywords}
        handleKeywordClick={handleKeywordClick}
        isDarkMode={isDarkMode}
        theme={theme}
      />
      <PromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
        suggestedPrompts={suggestedPrompts}
        handlePromptClick={handlePromptClick}
        isDarkMode={isDarkMode}
        theme={theme}
      />
    </div>
  );
};

export default ActionButtons;

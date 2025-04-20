import React, { useRef, useEffect } from 'react';

const ChatInput = ({ onSend }) => {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const text = inputRef.current.innerText.trim();
      if (text !== '') {
        onSend(text);
        inputRef.current.innerText = '';
      }
    }
  };

  // Placeholder effect (mimics :empty:before with inline style)
  useEffect(() => {
    const el = inputRef.current;

    const updatePlaceholder = () => {
      if (el.innerText.trim() === '') {
        el.setAttribute('data-show-placeholder', 'true');
      } else {
        el.removeAttribute('data-show-placeholder');
      }
    };

    el.addEventListener('input', updatePlaceholder);
    updatePlaceholder();

    return () => {
      el.removeEventListener('input', updatePlaceholder);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={inputRef}
        className="border border-gray-300 rounded-lg px-4 py-3 min-h-[40px] max-h-[200px] overflow-y-auto whitespace-pre-wrap font-sans text-base outline-none"
        contentEditable
        role="textbox"
        aria-multiline="true"
        onKeyDown={handleKeyDown}
        data-show-placeholder="true"
      />
    </div>
  );
};

export default ChatInput;

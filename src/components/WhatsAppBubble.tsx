import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Encode the user message for WhatsApp
    const encodedMsg = encodeURIComponent(message);
    // Open WhatsApp URL with specified phone number
    window.open(`https://wa.me/919979955963?text=${encodedMsg}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-inner">
                RS
              </div>
              <div>
                <h4 className="font-bold text-sm">Reliable Research Services</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Typically replies instantly via WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Chat Transcript */}
          <div className="p-4 bg-slate-950/60 max-h-72 overflow-y-auto space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl rounded-tl-sm text-slate-200 shadow-sm max-w-[85%]">
              <p className="font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Nishchit Sheth & Team
              </p>
              Hello! 👋 Welcome to Reliable Research Services. How can we help you with your digital solutions, website, or WhatsApp marketing today?
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-colors cursor-pointer"
              title="Send via WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-xl shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Open WhatsApp chat"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-950 animate-ping" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-950" />
        <MessageSquare className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
};

import { useState } from "react";
import { Button } from "../ui/button";
import { HelpCircle } from "lucide-react";
import ChatBot from "./chat-bot"; // Ensure the path is correct

const HelpFloatingActionButton = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const handleHelpClick = () => {
    setShowChatBot(!showChatBot); // Toggle visibility
  };

  return (
    <>
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
      <Button
        onClick={handleHelpClick}
        title="Need Help?"
        className="fixed bottom-6 right-6 w-20 h-8 rounded-2xl bg-green-600 hover:bg-green-700 text-white shadow-xl z-50 flex items-center justify-center gap-2 transition-transform hover:scale-110"
        aria-label="Help"
      >
        <p>Help</p>
        <HelpCircle className="w-6 h-6" />
      </Button>
    </>
  );
};

export default HelpFloatingActionButton;

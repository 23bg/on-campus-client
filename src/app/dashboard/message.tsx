import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/custom/footer";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const mockMessages = {
  1: [{ from: "them", text: "Hi there!" }, { from: "me", text: "Hey Alice!" }],
  2: [{ from: "them", text: "Hello!" }, { from: "me", text: "Hi Bob!" }],
  3: [{ from: "them", text: "Good morning" }],
};

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [input, setInput] = useState("");

  const messages = mockMessages[selectedUser.id] || [];

  const handleSend = () => {
    if (input.trim()) {
      mockMessages[selectedUser.id].push({ from: "me", text: input });
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
       <div className="pt-16"/>
      {/* Chat Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel – User List */}
        <Card className="w-1/4 h-full p-4 rounded-none overflow-hidden">
          <h2 className="text-lg font-semibold mb-4">Users</h2>
          <ScrollArea className="h-96 pr-2">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`p-3 cursor-pointer rounded-md transition ${
                  selectedUser.id === user.id
                    ? "bg-blue-100 font-bold"
                    : "hover:bg-muted"
                }`}
              >
                {user.name}
              </div>
            ))}
          </ScrollArea>
        </Card>

        {/* Right Panel – Chat Area */}
        <div className="flex flex-col w-3/4 h-full">
          {/* Messages container */}
          <Card className="flex-1 p-4 mb-2 overflow-y-auto rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{selectedUser.name}</h2>
            <div className="space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-md max-w-sm ${
                    msg.from === "me"
                      ? "ml-auto bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </Card>

          {/* Input section */}
          <div className="flex gap-2 px-2 pb-2">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Messages;

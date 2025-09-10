import React, { useState, useEffect, useRef } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am your  Assistant 🤖. What's in your mind!!!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const experimentFAQ = {
    Pendulum: {
      Use: "A pendulum measures gravitational acceleration and studies oscillations.",
      Advantage: "Simple and accurate for basic timing.",
      Disadvantage: "Air resistance and friction affect accuracy."
    },
    Ohmslaw: {
      Use: "Verifies voltage-current-resistance relationships.",
      Advantage: "Simple setup, clear results.",
      Disadvantage: "Resistor heating may affect results."
    },
    projectile: {
      Use: "Studies 2D motion under gravity.",
      Advantage: "Visualizes parabolic paths.",
      Disadvantage: "Air resistance introduces error."
    },
    lens: {
      Use: "Explores image formation by lenses.",
      Advantage: "Teaches lens formula practically.",
      Disadvantage: "Alignment errors possible."
    },
    acidbase: {
      Use: "Studies neutralization reactions.",
      Advantage: "Foundational for titration.",
      Disadvantage: "Indicator errors may occur."
    },
    titration: {
      Use: "Determines unknown concentrations via neutralization.",
      Advantage: "Accurate if performed carefully.",
      Disadvantage: "Requires precise endpoint detection."
    },
    reactionrate: {
      Use: "Measures how fast reactions proceed.",
      Advantage: "Teaches chemical kinetics.",
      Disadvantage: "External factors affect rates."
    },
    electrolysis: {
      Use: "Deposits metals using electric current.",
      Advantage: "Practical for Faraday’s laws.",
      Disadvantage: "Safety precautions required."
    },
    photosynthesis: {
      Use: "Studies light effects on plant food production.",
      Advantage: "Visual learning on plant biology.",
      Disadvantage: "Requires controlled conditions."
    },
    enzyme: {
      Use: "Studies enzyme-catalyzed reactions.",
      Advantage: "Visualizes enzyme activity.",
      Disadvantage: "Enzyme denaturation may occur."
    },
    celldivision: {
      Use: "Observes cell multiplication stages.",
      Advantage: "Teaches mitosis and meiosis clearly.",
      Disadvantage: "Microscopic visibility limitations."
    },
    respiration: {
      Use: "Explores energy release in cells.",
      Advantage: "Shows biochemical processes practically.",
      Disadvantage: "Difficult to measure precisely in cells."
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userMessage.toLowerCase();
      let response = "Please ask about a specific experiment using the keywords 'use', 'advantage', or 'disadvantage'.";

      for (let key in experimentFAQ) {
        if (lower.includes(key)) {
          if (lower.includes("use")) response = experimentFAQ[key].use;
          else if (lower.includes("advantage")) response = experimentFAQ[key].advantage;
          else if (lower.includes("disadvantage")) response = experimentFAQ[key].disadvantage;
          else response = `Ask about ${key} "use", "advantage", or "disadvantage".`;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-500 text-white rounded-full p-4 shadow-lg hover:bg-indigo-600 transition"
      >
        💬
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-80 h-[70%] bg-white shadow-2xl rounded-t-lg flex flex-col animate-slide-in">
          {/* Header */}
          <div className="bg-indigo-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">Virtual Lab Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="text-white font-bold">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "bot" ? "bg-indigo-100 self-start" : "bg-green-100 self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="italic text-gray-500 text-sm">Bot is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask here..."
              className="border p-2 rounded flex-grow"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-500 text-white px-3 rounded hover:bg-indigo-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

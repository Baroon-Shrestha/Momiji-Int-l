import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Minimize2 } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentOptions, setCurrentOptions] = useState([
    "Our Services",
    "How to Apply for Japan",
    "Language Training",
    "Scholarship Opportunities",
    "Visa Guidance",
    "Book an Appointment",
    "Contact Information",
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionSelect = (option) => {
    const newMessage = {
      id: messages.length + 1,
      text: option,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(option),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);

      const nextOptions = getNextOptions(option);
      setCurrentOptions(nextOptions);
    }, 1500);
  };

  const getBotResponse = (userOption) => {
    const responses = {
      "Our Services":
        "We provide career counseling, university applications, language training, and visa processing for Japan.",
      "How to Apply for Japan":
        "We’ll guide you through application timelines, documentation, and interview preparation.",
      "Language Training":
        "We offer JLPT-focused language classes both online and in person.",
      "Scholarship Opportunities":
        "You can apply for MEXT and other private scholarships with our support.",
      "Visa Guidance":
        "We assist in preparing student visa documentation and guide you through the submission process.",
      "Book an Appointment":
        "You can book through our website or request a callback to schedule a meeting.",
      "Contact Information":
        "Phone: +977-1-XXXXXXX | Email: info@momiji.edu.np | Kathmandu, Nepal",
      "Back to Main Menu":
        "You're back at the main menu. Please choose a topic to get started.",
    };

    return (
      responses[userOption] ||
      "Thank you for your message. You can reach us out at momijiinfo@gmail.com or give us a call at +981-*******"
    );
  };

  const getNextOptions = (selectedOption) => {
    const mainMenu = [
      "Our Services",
      "How to Apply for Japan",
      "Language Training",
      "Scholarship Opportunities",
      "Visa Guidance",
      "Book an Appointment",
      "Contact Information",
    ];

    const optionMap = {
      "Our Services": [
        "Counseling",
        "University/College Application",
        "Pre-Departure Support",
        "Part-Time Job Assistance",
        "Back to Main Menu",
      ],
      "How to Apply for Japan": [
        "Application Timeline",
        "Required Documents",
        "Interview Preparation",
        "Back to Main Menu",
      ],
      "Language Training": [
        "JLPT Courses",
        "Class Schedule",
        "Online vs In-Person",
        "Back to Main Menu",
      ],
      "Scholarship Opportunities": [
        "MEXT Scholarship",
        "Private Scholarships",
        "Eligibility Criteria",
        "Back to Main Menu",
      ],
      "Visa Guidance": [
        "Student Visa Process",
        "Visa Document Checklist",
        "Common Rejection Reasons",
        "Back to Main Menu",
      ],
      "Book an Appointment": [
        "Book via Website",
        "Request a Callback",
        "Visit Office",
        "Back to Main Menu",
      ],
      "Contact Information": [
        "Email",
        "Phone",
        "Office Location",
        "Social Media",
        "Back to Main Menu",
      ],
      // Counseling: [
      //   "Academic Counseling",
      //   "Career Counseling",
      //   "Personalized Sessions",
      //   "Back to Our Services",
      // ],
      "Back to Main Menu": mainMenu,
    };

    return optionMap[selectedOption] || mainMenu;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-md h-[70vh] flex flex-col border border-gray-200 backdrop-blur-sm sm:w-96 sm:h-[40rem]">
          {/* Header */}
          <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white p-4 rounded-t-xl flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-semibold text-sm">Chat Support</span>
                <p className="text-xs text-white">Always here to help</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-800 hover:bg-opacity-50 p-2 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Minimize chat"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-500 hover:bg-opacity-70 p-2 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages + Inline Options */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100">
            {messages.map((message, index) => (
              <div key={message.id}>
                <div
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-sm px-4 py-3 rounded-2xl text-sm shadow-md transition-all duration-200 hover:shadow-lg ${
                      message.sender === "user"
                        ? "bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white rounded-br-md transform hover:scale-[1.02]"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-md transform hover:scale-[1.02]"
                    }`}
                  >
                    <p className="mb-2 leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs ${
                        message.sender === "user"
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>

                {/* Render options right after the last bot message */}
                {index === messages.length - 1 &&
                  message.sender === "bot" &&
                  currentOptions.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {currentOptions.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionSelect(option)}
                          className="w-full text-left px-4 py-3 text-sm bg-white hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-slate-700 rounded-xl transition-all duration-300 border border-gray-200 hover:border-amber-300 hover:shadow-md transform font-medium"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-md">
                  <div className="flex space-x-2 items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      typing...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

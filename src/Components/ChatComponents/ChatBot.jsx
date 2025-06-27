import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Minimize2 } from "lucide-react";

// Flat structured options with parent and response
const allOptions = [
  // Main Menu
  {
    text: "Our Services",
    parent: null,
    response: "We offer personalized guidance for studying in Japan.",
  },
  {
    text: "Language Training",
    parent: null,
    response: "Join our Japanese language classes tailored to JLPT levels.",
  },
  {
    text: "Scholarship Opportunities",
    parent: null,
    response:
      "We support students in applying for MEXT and private scholarships.",
  },
  {
    text: "Visa Guidance",
    parent: null,
    response: "We help you through every step of the visa application process.",
  },
  {
    text: "Book an Appointment",
    parent: null,
    response: "Choose how you'd like to connect with us for more information.",
  },
  {
    text: "Contact Information",
    parent: null,
    response: "Phone: +977-1-XXXXXXX | Email: info@momiji.edu.np",
  },

  // Our Services -> Sub-options
  {
    text: "Counseling",
    parent: "Our Services",
    response: "We offer career guidance to help you choose the right path.",
  },
  {
    text: "Application Help",
    parent: "Our Services",
    response: "We assist with documentation, SOPs, and college applications.",
  },
  {
    text: "Pre-Departure Support",
    parent: "Our Services",
    response: "We help you prepare for your journey and stay in Japan.",
  },
  {
    text: "Part-Time Job Assistance",
    parent: "Our Services",
    response: "We guide you on finding legal part-time work in Japan.",
  },
  { text: "Back to Main Menu", parent: "Our Services" },

  // Counseling -> Sub-options
  {
    text: "Career Assessment",
    parent: "Counseling",
    response:
      "We evaluate your strengths and interests to suggest career paths.",
  },
  {
    text: "University Matching",
    parent: "Counseling",
    response: "We suggest universities based on your profile and preferences.",
  },
  { text: "Back to Our Services", parent: "Counseling" },

  // Language Training -> Sub-options
  {
    text: "JLPT N5/N4",
    parent: "Language Training",
    response:
      "Beginner Japanese courses focused on daily conversation and grammar.",
  },
  {
    text: "JLPT N3/N2",
    parent: "Language Training",
    response:
      "Intermediate courses with kanji, reading comprehension, and writing.",
  },
  {
    text: "Class Timings",
    parent: "Language Training",
    response: "Morning: 7–9 AM | Evening: 5–7 PM",
  },
  { text: "Back to Main Menu", parent: "Language Training" },

  // Scholarship Opportunities -> Sub-options
  {
    text: "MEXT Scholarship",
    parent: "Scholarship Opportunities",
    response: "A prestigious scholarship by the Japanese Government.",
  },
  {
    text: "JASSO Scholarship",
    parent: "Scholarship Opportunities",
    response: "Available to international students studying in Japan.",
  },
  {
    text: "Private Scholarships",
    parent: "Scholarship Opportunities",
    response: "We help you find and apply to private fundings.",
  },
  { text: "Back to Main Menu", parent: "Scholarship Opportunities" },

  // Visa Guidance -> Sub-options
  {
    text: "Student Visa Process",
    parent: "Visa Guidance",
    response: "Step-by-step guide to apply for a Japanese student visa.",
  },
  {
    text: "Required Documents",
    parent: "Visa Guidance",
    response:
      "You’ll need: admission letter, financial proof, passport copies.",
  },
  {
    text: "Interview Tips",
    parent: "Visa Guidance",
    response: "We train you for your embassy or immigration interview.",
  },
  { text: "Back to Main Menu", parent: "Visa Guidance" },

  // Book an Appointment -> Sub-options
  {
    text: "Book via Website",
    parent: "Book an Appointment",
    response: "Visit www.momiji.edu.np/appointments to schedule a session.",
  },
  {
    text: "Request a Callback",
    parent: "Book an Appointment",
    response: "Fill out the callback form on our contact page.",
  },
  {
    text: "Visit Office",
    parent: "Book an Appointment",
    response: "We’re open Sunday–Friday, 9AM to 5PM at Samakhusi-10, KTM.",
  },
  { text: "Back to Main Menu", parent: "Book an Appointment" },

  // Contact Information -> Sub-options
  {
    text: "Phone",
    parent: "Contact Information",
    response: "Call us at +977-1-XXXXXXX",
  },
  {
    text: "Email",
    parent: "Contact Information",
    response: "Reach out to info@momiji.edu.np",
  },
  {
    text: "Office Location",
    parent: "Contact Information",
    response: "We are located at Samakhusi-10, Kathmandu, Nepal.",
  },
  {
    text: "Social Media",
    parent: "Contact Information",
    response: "Follow us on Facebook, Instagram, and TikTok @MomijiNepal",
  },
  { text: "Back to Main Menu", parent: "Contact Information" },
];

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
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setCurrentOptions(
      allOptions.filter((o) => o.parent === null).map((o) => o.text)
    );
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getNextOptions = (selectedOption) => {
    return allOptions
      .filter((opt) => opt.parent === selectedOption)
      .map((o) => o.text);
  };

  const getBotResponse = (selectedOption) => {
    return (
      allOptions.find((o) => o.text === selectedOption)?.response ||
      "Please choose from the available options."
    );
  };

  const handleOptionSelect = (option) => {
    const userMessage = {
      id: messages.length + 1,
      text: option,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: getBotResponse(option),
        sender: "bot",
        timestamp: new Date(),
      };

      // First: Handle 'Back to Main Menu'
      if (option === "Back to Main Menu") {
        setMessages((prev) => [...prev, botReply]);

        const backMessage = {
          id: messages.length + 3,
          text: "You're back at the main menu. Let us know how we can assist you further.",
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, backMessage]);
        setCurrentOptions(
          allOptions.filter((o) => o.parent === null).map((o) => o.text)
        );
        setIsTyping(false);
        return;
      }

      const next = getNextOptions(option);

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);

      // If the current option has no children (leaf node)
      if (next.length === 0) {
        const followUpMessage = {
          id: messages.length + 3,
          text: "Reach us at info@momiji.edu.np or call us at 981-*******.",
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, followUpMessage]);
        setCurrentOptions(["Back to Main Menu"]);
      } else {
        setCurrentOptions(next);
      }
    }, 1000);
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
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-500 hover:bg-opacity-70 p-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
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
                        ? "bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                    }`}
                  >
                    <p className="mb-2">{message.text}</p>
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
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce delay-200"></div>
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

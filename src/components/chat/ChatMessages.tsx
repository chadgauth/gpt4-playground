import { useOpenAI } from "@/context/OpenAIProvider";
import React, { useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatPlaceholder from "./ChatPlaceholder";

type Props = {};

export default function ChatMessages({}: Props) {
  const { messages, submit } = useOpenAI();
  const messageContainer = React.useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = React.useState(false);
  const [prevMessageLength, setPrevMessageLength] = React.useState(0);

  // Scroll handling for auto scroll
  useEffect(() => {
    const handleScroll = () => {
      if (messageContainer.current) {
        if (
          messageContainer.current.scrollTop <
          messageContainer.current.scrollHeight -
            messageContainer.current.offsetHeight
        ) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    if (messageContainer.current) {
      messageContainer.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (messageContainer.current) {
        messageContainer.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (messages.length != prevMessageLength) {
      setPrevMessageLength(messages.length);
    }

    if (
      messageContainer.current &&
      (!scrolling || messages.length != prevMessageLength)
    ) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [messages, scrolling]);

  // Command Enter to submit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.metaKey) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [submit]);

  return (
    <div className="flex h-full w-full flex-col items-stretch bg-stone-300 text-black md:pl-[260px]">
      <div
        className="relative flex flex-1 flex-col items-stretch overflow-auto border-b bg-stone-300 pb-[10rem] scrollbar scrollbar-track-black scrollbar-thumb-green-500 scrollbar-thumb-rounded-full scrollbar-w-3"
        ref={messageContainer}
      >
        {messages.length === 0 ? (
          <ChatPlaceholder />
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <hr className="border-b border-green-500/20" />
          </>
        )}
      </div>
      <ChatInput />
    </div>
  );
}

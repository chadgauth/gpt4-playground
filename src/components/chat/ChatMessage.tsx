import { motion } from "framer-motion";
import { OpenAIChatMessage } from "@/utils/OpenAI";
import React from "react";
import {
  MdPerson,
  MdDesktopMac,
  MdContentCopy,
  MdCheckCircle,
} from "react-icons/md";
import AssistantMessageContent from "./AssistantMessageContent";
import UserMessageContent from "./UserMessageContent";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

type Props = {
  message: OpenAIChatMessage;
};

export default function ChatMessage({ message: { id, role, content } }: Props) {
  const [hover, setHover] = React.useState(false);
  const [copied, handleCopy] = useCopyToClipboard(content);

  return (
    <div
      className={`flex cursor-pointer flex-row items-center p-2 transition-all ${
        role === "user" ? "bg-stone-300 hover:bg-gray-200" : "bg-gray-200"
      } text-black`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="max-w-screen relative mx-auto flex w-full max-w-4xl flex-row items-center">
        <div
          className={`sticky top-0 my-2 mr-1 flex h-8 w-8 items-center justify-center self-start text-3xl transition-colors ${
            hover ? "text-gray-500" : "text-black"
          }`}
        >
          {role === "user" ? <MdPerson /> : <MdDesktopMac />}
        </div>
        <div className="overflow-x-auto">
          <div className="prose w-full max-w-3xl rounded p-2 pr-8 text-sm text-black dark:prose-invert prose-code:text-black prose-pre:bg-transparent prose-pre:p-0">
            {role === "user" ? (
              <UserMessageContent content={content} />
            ) : (
              <AssistantMessageContent content={content} />
            )}
          </div>
          <div
            className={`absolute right-1 top-4 h-8 w-8 cursor-pointer text-lg transition-none duration-500 ease-in-out ${
              copied ? "text-emerald-600" : "text-gray-500"
            }`}
            onClick={handleCopy}
          >
            {copied ? (
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{
                  type: "tween",
                  duration: 0.25,
                }}
              >
                <MdCheckCircle />
              </motion.div>
            ) : (
              <MdContentCopy />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

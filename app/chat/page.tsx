import { MyThread } from "@/components/ui/assistant-ui/thread";
import { ChatRutimeProvider } from "../providers/ai-runtime";
const ChatApp = () => {
  return (
    <>
      <ChatRutimeProvider>
        <main>
          <div className="h-full">
            <MyThread />
          </div>
        </main>
      </ChatRutimeProvider>
    </>
  );
};

export default ChatApp;

import { ChatRutimeProvider } from "@/app/providers/ai-runtime";
import { MyThread } from "@/components/ui/assistant-ui/thread";
const ChatApp = () => {
  return (
    <>
      <ChatRutimeProvider>
        <main className="w-screen h-full">
          <MyThread />
        </main>
      </ChatRutimeProvider>
    </>
  );
};

export default ChatApp;

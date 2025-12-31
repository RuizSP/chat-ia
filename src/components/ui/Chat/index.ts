import ChatContainer from "./ChatContainer"
import { ChatContextProvider } from "./ChatContextProvider"
import ChatFooter from "./ChatFooter"
import ChatRoot from "./ChatRoot"
import ChatSpeechContent from "./ChatSpeechContent"
import ChatTextField from "./ChatTextField"

export const Chat = {
  Root: ChatRoot,
  Container: ChatContainer,
  TextField: ChatTextField,
  Footer: ChatFooter,
  SpeechContent: ChatSpeechContent,
  Provider: ChatContextProvider,
}

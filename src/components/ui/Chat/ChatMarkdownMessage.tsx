import { Box, Typography } from "@mui/material"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighterPrism } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkGfm from "remark-gfm"
import CopyButton from "../CopyButton"

interface ChatMarkdownMessageProps {
  markdown: string
  isReceiver: boolean
}

export default function ChatMarkdownMessage({ markdown, isReceiver }: ChatMarkdownMessageProps) {
  return (
    <Box
      sx={{
        "& pre": {
          borderRadius: 1,
          overflowX: "auto",
          fontSize: "0.85rem",
        },
        "& p": {
          margin: "4px 0",
        },
      }}
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <Typography variant="body2" color={isReceiver ? "textSecondary" : "textPrimary"}>
              {children}
            </Typography>
          ),

          code({ className, children }) {
            const value = String(children).replace(/\n$/, "")
            const match = /language-(\w+)/.exec(className || "")

            return (
              <Box position="relative">
                <Box position="absolute" top={8} right={8} zIndex={1}>
                  <CopyButton value={value} />
                </Box>

                <SyntaxHighlighterPrism
                  style={vscDarkPlus}
                  language={match?.[1] || "text"}
                  showLineNumbers
                  wrapLines
                  customStyle={{
                    paddingTop: 40,
                    borderRadius: 8,
                  }}
                >
                  {value}
                </SyntaxHighlighterPrism>
              </Box>
            )
          },
        }}
      >
        {markdown}
      </Markdown>
    </Box>
  )
}

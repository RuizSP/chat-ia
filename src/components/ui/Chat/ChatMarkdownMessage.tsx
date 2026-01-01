import { Box, Stack, Typography } from "@mui/material"
import Markdown from "react-markdown"
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
          position: "relative",
          backgroundColor: "#0d1117",
          color: "#c9d1d9",
          padding: 1.5,
          borderRadius: 1,
          overflowX: "auto",
          fontSize: "0.85rem",
        },
        "& code": {
          fontFamily: "monospace",
        },
        "& h3": {
          fontSize: "1rem",
          fontWeight: 600,
          mt: 1,
        },
        "& h4": {
          fontSize: "0.95rem",
          fontWeight: 600,
          mt: 1,
        },
        "& p": {
          margin: "4px 0",
        },
        "& ul": {
          paddingLeft: 2,
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

          code: ({ children }) => {
            const value = String(children).replace(/\n$/, "")

            return (
              <Stack position="relative">
                <Stack alignSelf={"flex-end"}>
                  <CopyButton value={value} />
                </Stack>
                <pre>
                  <code>{value}</code>
                </pre>
              </Stack>
            )
          },
        }}
      >
        {markdown}
      </Markdown>
    </Box>
  )
}

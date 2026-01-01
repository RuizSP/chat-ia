import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"

export function markdownToSpeechText(markdown: string): string {
  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(markdown)

  const parts: string[] = []

  visit(tree, "text", node => {
    parts.push(node.value)
  })

  return parts
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
}

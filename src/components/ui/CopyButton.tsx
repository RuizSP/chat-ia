import { CheckCircle, ContentCopy } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"
import { useEffect, useState } from "react"

interface CopyButtonProps {
  value: string
}

export default function CopyButton(props: CopyButtonProps) {
  const { value } = props
  const [copied, setCopied] = useState<boolean>(false)

  const copiarParaClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  useEffect(() => {
    if (!copied) return
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [copied])

  return (
    <Tooltip title={copied ? "Texto Copiado com Sucesso!" : "Copiar texto"}>
      <IconButton disabled={copied} onClick={copiarParaClipboard}>
        {copied ? <CheckCircle /> : <ContentCopy />}
      </IconButton>
    </Tooltip>
  )
}

import { CopyAll } from "@mui/icons-material";
import { IconButton } from "@mui/material";


interface CopyButtonProps
{
    value:string
}

export default function CopyButton(props:CopyButtonProps){
    const {value} = props
    
    const copiarParaClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Texto copiado!");
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

    
    return <IconButton onClick={copiarParaClipboard}>
        <CopyAll />
    </IconButton>
}
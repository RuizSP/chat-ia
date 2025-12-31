import { Box } from "@mui/material"

export function ThreeDotsLoader() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            m: 1,
            width: 12,
            height: 12,
            bgcolor: "text.secondary",
            borderRadius: "50%",
            animation: `bounce 1s infinite ${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: .3; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </Box>
  )
}

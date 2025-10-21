export default function Spacer({ size = "sm", divider = false }) {
  const sizes = {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
    xl: "4rem",
  };
  return (
    <div
      style={{
        height: sizes[size],
        borderTop: divider && "1px solid var(--border-color)",
      }}
    />
  );
}

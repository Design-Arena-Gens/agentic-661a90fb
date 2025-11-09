"use client";

export default function CopyButton({ text }: { text: string }) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };
  return (
    <button onClick={onCopy} className="button">Copy to clipboard</button>
  );
}

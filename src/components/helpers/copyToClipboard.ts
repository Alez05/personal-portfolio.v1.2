'use client'

export const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`${text} copied!`))
      .catch(() => alert("Failed to copy."));
  } else {
    const temp = document.createElement("input");
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert(`${text} copied`);
  }
};

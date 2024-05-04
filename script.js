document.getElementById("myBtn").addEventListener("click", () => setClipboard("sandbloxmc.com"));

async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
  alert("Copied to clipboard!");
}
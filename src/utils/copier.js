import Toast from "../components/Toast";

export default function copyToClipboard(
  text,
  successMessage = "Copied to clipboard.",
  errorMessage = "Unable to copy."
) {
  // Check if the browser supports the Clipboard API
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Toast({type: "successMessage", message: successMessage});
      })
      .catch((err) => {
        Toast({type: "errorMessage", message: errorMessage});
      });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      Toast({type: "successMessage", message: successMessage});
    } catch (err) {
      Toast({type: "errorMessage", message: errorMessage});
    }
    document.body.removeChild(textarea);
  }
}

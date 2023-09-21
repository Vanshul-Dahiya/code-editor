import { useEffect, useState } from "react";

const PREFIX = "code-editor-";
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [val, setVal] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey);

    // return a value if there it is in localStorage
    if (jsonVal !== null) return JSON.parse(jsonVal);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // every single time it changes, save it
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(val));
  }, [prefixedKey, val]);
  return [val, setVal];
}

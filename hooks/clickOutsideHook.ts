import { useEffect, Dispatch, SetStateAction } from "react";

export default function useClickOutside<T>(
  ref: React.MutableRefObject<T>,
  set: () => void
) {
  useEffect(() => {
    document.addEventListener("mousedown", function () {
      if (ref.current !== null) {
        set();
      }
    });
  }, [ref]);
}

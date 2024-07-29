import { useEffect, Dispatch, SetStateAction } from "react";

export default function useClickOutside<T>(
  ref: React.MutableRefObject<T>,
  set: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    document.addEventListener("mousedown", function () {
      if (ref.current !== null) {
        set(false);
      }
    });
  }, [ref]);
}

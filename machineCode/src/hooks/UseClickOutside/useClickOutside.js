import useEventHander from "../UseEventHandler/useEventHander";

export default function useClickOutside(refs, cb) {
  useEventHander(
    "click",
    (e) => {
        if (refs.some(ref=>ref.current == null || ref.current.contains(e.target))) {
            console.log('inside if')
            return;
        }
        console.log('hit cb')
        cb(e);
    },
    document
  );
}

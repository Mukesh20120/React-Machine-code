import { useRef } from "react"
import useHover from "./useHover"
import useRenderCount from "../UseRenderCount/useRenderCount"

export default function HoverComponent() {
  const elementRef = useRef()
  const hovered = useHover(elementRef)
  const count = useRenderCount();
  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? "blue" : "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    >{count}</div>
  )
}
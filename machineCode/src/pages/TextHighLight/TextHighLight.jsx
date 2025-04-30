import React, { useRef } from "react";
import useSelectionText from "../../customHooks/useSelectionText";

function TextHighLight() {
  const ref = useRef();
  const data = useSelectionText({ref});
  console.log(data);
  return (
    <div>
      {data?.showTool && (
        <div style={{
            position: 'absolute',
            top: data.y,
            left: data.x + data.width/4,
            width: data.width
        }}>
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16"
            />
          </svg>
        </div>
      )}
      <div ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque! Ducimus similique vitae aliquam reiciendis accusantium, ea odit mollitia numquam veniam ratione perspiciatis, esse expedita ex distinctio iusto assumenda. Reprehenderit molestiae, quis delectus modi adipisci praesentium quidem odio dolores esse, voluptate, pariatur ullam. Illum delectus dignissimos perferendis autem molestias optio totam commodi alias earum voluptatibus, tenetur ab libero ea adipisci nesciunt aliquid vero, sapiente natus voluptatum nostrum nam, nemo repellendus. Obcaecati, aliquid! Tenetur ducimus minus error itaque iste, natus voluptatem dolores fugiat tempora dolor harum odit reiciendis voluptatibus labore molestiae numquam fugit at eveniet quidem nobis dicta veniam unde perferendis.
      </div>
    </div>
  );
}

export default TextHighLight;

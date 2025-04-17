import React, { Children } from 'react'

function SwitchCase({children,value}){
    const cases = [];
    const defaults = [];
   Children.forEach(children,(e)=>{
      if(e.type.name === 'CustomCase'){
           if(typeof e.props.value === 'function'){
               if(e.props.value(value)){
                 cases.push(e);
               }
           }
           else if(e.props.value === value){
            cases.push(e);
           }
      }else if(e.type.name === 'DefaultCase'){
        defaults.push(e);
      }
   });
   return cases.length > 0 ? cases : defaults;
}

function CustomCase({children}){
return <>{children}</>
}
function DefaultCase({children}){
 return <>{children}</>
}

function CustomSwitchCase() {
  return (
    <SwitchCase value={2}>
        <CustomCase value={(e)=>e < 10}>function props</CustomCase>
        <CustomCase value={2}>hello 20</CustomCase>
        <CustomCase value={30}>hello 30</CustomCase>
        <CustomCase value={40}>hello 40</CustomCase>
        <DefaultCase>defaultcase</DefaultCase>
    </SwitchCase>
  )
}

export default CustomSwitchCase

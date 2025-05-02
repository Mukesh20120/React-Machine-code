import React from "react";
import useStateWithValidation from "./useStateWithValidation";

export default function StateWithValidationComponent() {
  const initialState = {
    name: "",
    description: "",
    age: 0,
  };
  const [form, setForm, isValid] = useStateWithValidation((initialState) => {
    const { name, description, age } = initialState;
    if (
      !name ||
      !description ||
      !age ||
      name.lenght < 4 ||
      description.lenght < 4 ||
      age < 0 ||
      age > 150
    )
      return false;
    return true;
  },initialState);
  //generic input handler
  const handleInput=(e)=>{
    const {name,value} = e.target;
    setForm(prev=>({...prev,[name]: value}));
  }
  return <div>
    <h1>IsValide: {isValid.toString()}</h1>
    <p>{JSON.stringify(form)}</p>
    <input className="border py-2 px-4" type="text" placeholder="name" name="name" onChange={(e)=>handleInput(e)}/>
    <input className="border py-2 px-4" type="text" placeholder="description" name="description" onChange={(e)=>handleInput(e)}/>
    <input className="border py-2 px-4" type="number" placeholder="age" name="age" onChange={(e)=>handleInput(e)}/>
  </div>;
}

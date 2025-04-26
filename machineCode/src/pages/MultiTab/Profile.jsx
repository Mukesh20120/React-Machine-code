import React from "react";

const Profile = ({state,setState}) => {
    const handleOnChange=(e)=>{
        const {name,value} = e.target;
       setState(prev=>({...prev, profile: {...prev.profile,[name]: value}}))
    }
  return (
    <div className="flex flex-col w-1/3">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className=" border px-2 py-1 m-1 rounded-2xl"
          type="text"
          id="name"
          value={state.profile.name}
          name="name"
          required
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          className=" border px-2 py-1 m-1 rounded-2xl"
          type="number"
          id="age"
          value={state.profile.age}
          name="age"
          required
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className=" border px-2 py-1 m-1 rounded-2xl"
          type="email"
          id="email"
          value={state.profile.email}
          name="email"
          required
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Profile;

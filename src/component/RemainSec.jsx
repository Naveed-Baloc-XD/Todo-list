import { React, useRef } from "react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { IoIosCheckmarkCircleOutline, IoIosCopy } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const RemainSec = () => {
  const [todo, settodo] = useState("");
  const [Todos, setTodos] = useState([]);

  // ----------------------------------------
  const handleTextAdd = () => {
    setTodos([...Todos, { id: uuidv4(), todo }]);
    settodo("");
    console.log(Todos);
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  // -----------Completed Function--------------

  const taskId = uuidv4();

  const handleComplete = () => {
    console.log("handleComplete");
    const element = document.getElementById(taskId);
    if (element) {
      element.classList.toggle("line-through");
    }
  };

  return (
    <section className="container w-[600px] min-h-[100vh] bg-white">
      <div className="flex items-center  pt-5 gap-4 justify-center container ">
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          className="relative w-[75%] py-[3px] px-3 outline-none border  border-mcolor rounded-lg "
          placeholder="Text here ..."
          required
        />

        <button
          className="bg-green-600 h-[30px] hover:bg-green-700  hover:shadow-md hover:shadow-green-500 duration-500 active:scale-90
          px-3 font-bold rounded-lg text-center text-white"
          onClick={() => handleTextAdd()}
        >
          Save
        </button>
      </div>
      <div className=" container my-8 flex justify-between items-center w-[550px]">
        <h1 className=" text-xl font-bold text-green-700">Your TODOS</h1>
        <div className=" flex items-center gap-8">
          <button
            className="bg-green-700 h-[28px] hover:bg-green-800  hover:shadow-md  duration-500 active:scale-95
          px-2 font-semibold rounded-lg text-center text-white"
          >
            Select All
          </button>
          <button
            className="bg-green-700 h-[28px] hover:bg-green-800  hover:shadow-md  duration-500 active:scale-95
          px-2 font-semibold rounded-lg text-center text-white"
          >
            Delete
          </button>
        </div>
      </div>
      {Todos.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-[2px] bg-slate-200 w-[500px] flex items-center  gap-[150px] justify-center container border-black border-b-[1px]"
          >
            <div className="flex gap-5 items-center w-[50%]">
              <input type="checkbox" className="cursor-pointer" />
              <div id={taskId} className="mb-1">
                {item.todo}
              </div>
            </div>
            <div className="flex items-center justify-center gap-[5px] ">
              <BiEditAlt
                // onClick={(e) => handleEditClick(e, item.id)}
                className="w-[20px] h-[20px] cursor-pointer duration-500 active:scale-90"
              />
              <IoIosCopy
                // onClick={(e) =>
                className="w-[19px] h-[19px] cursor-pointer duration-500 active:scale-90 "
              />
              <IoIosCheckmarkCircleOutline
                onClick={handleComplete}
                className="w-[20px] h-[20px] cursor-pointer duration-500 active:scale-90 "
              />
              <TiDelete
                // onClick={(e) => handleDeleteClick(e, item.id)}
                className="w-[25px] h-[25px] cursor-pointer duration-500 active:scale-90 "
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RemainSec;

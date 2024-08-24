import React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const RemainSec = () => {
  const [todo, settodo] = useState("");
  const [Todos, setTodos] = useState([]);

  const handleTextAdd = () => {
    setTodos([...Todos, { id: uuidv4(), todo, iscompleted: false }]);
    settodo("");
    console.log(Todos);
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  // ---------------- CheckBox Function ---------------
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(`this is id ${id}`);
    let index = Todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(`indexxxx ${index}`);

    let newTodos = [...Todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;

    setTodos(newTodos);
  };

  return (
    <section className="container min-h-[100vh] bg-white">
      <div className="flex items-center pt-5 gap-4 justify-center">
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          className="relative w-[45%] py-[2px] px-3 outline-none border  border-mcolor rounded-lg "
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
      <h1 className="text-xl font-bold text-green-600 mt-8 ml-[20%]">
        Your Todos
      </h1>
      {Todos.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-8 w-[100%] flex items-center  gap-[50px] justify-center"
          >
            <div className="flex gap-5 items-center w-[50%]">
              <input
                onChange={handleCheckbox}
                name={item.id}
                type="checkbox"
                className="cursor-pointer"
                value={item.isCompleted}
              />
              <div
                // --- Class add nai ho rahi isCompleted ture hai ----------------------###########
                className={item.isCompleted ? "line-through" : ""}
              >
                {item.todo}
              </div>
            </div>
            <div className="flex items-center justify-center gap-[20px]">
              <FaEdit
                // onClick={(e) => handleEditClick(e, item.id)}
                className="w-[18px] h-[18px] cursor-pointer duration-500 active:scale-90"
              />
              <MdDeleteSweep
                // onClick={(e) => handleDeleteClick(e, item.id)}
                className="w-[21px] h-[21px] cursor-pointer duration-500 active:scale-90 "
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RemainSec;

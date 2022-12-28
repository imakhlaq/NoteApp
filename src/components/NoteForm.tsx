import React from "react";

const NoteForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-xl font-medium tracking-wide">
            Title
          </label>
          <input
            type="text"
            className="bg-slate-400 p-2 rounded-md focus:outline-none text-lg font-medium"
            id="title"
          />
        </div>
      </div>
    </form>
  );
};

export default NoteForm;

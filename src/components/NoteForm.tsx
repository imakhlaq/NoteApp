import React from "react";
//libray to crate selectebles
import CreatableReactSelect from "react-select/creatable";

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
            required
            className="bg-slate-400 p-2 rounded-md focus:outline-none text-lg font-medium"
            id="title"
          />
          <div>
            <label htmlFor="tages">Tags</label>
            <CreatableReactSelect isMulti />
          </div>
        </div>
        <div>
          <label htmlFor="story">Body</label>
          <textarea id="story" name="story" rows={15}>
            Enter Note
          </textarea>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;

import React from "react";
import { Link } from "react-router-dom";
//libray to crate selectebles
import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <form className="font-medium tracking-wide text-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-xl ">
            Title
          </label>
          <input
            type="text"
            required
            className=" p-2 rounded-md focus:outline-none "
            id="title"
            placeholder="Title"
          />
          <div>
            <label htmlFor="tages">Tags</label>
            <CreatableReactSelect isMulti />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="story">Body</label>
          <textarea
            id="story"
            name="story"
            rows={20}
            className="text-xl p-1 focus:outline-none rounded-md"
            placeholder="Enter Notes"
          >
            Enter Note
          </textarea>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-8 items-center">
        <button
          type="submit"
          className="bg-blue-600 py-1 px-6 rounded-md text-white"
        >
          Save
        </button>
        <Link to="..">
          <button
            type="button"
            className="bg-slate-600 py-1 px-6 rounded-md text-white"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default NoteForm;

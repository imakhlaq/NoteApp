import React, { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
//libray to crate selectebles
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";

type Note = {
  onSubmit: (data: NoteData) => void;
};

const NoteForm = ({ onSubmit }: Note) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const addNoteHandler = (event: FormEvent) => {
    event.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  };
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  return (
    <form
      className="font-medium tracking-wide text-lg"
      onSubmit={addNoteHandler}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-xl ">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            required
            className=" p-2 rounded-md focus:outline-none "
            id="title"
            placeholder="Title"
          />
          <div>
            <label htmlFor="tages">Tags</label>
            <CreatableReactSelect
              isMulti
              value={selectedTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setSelectedTags(
                  tags.map((tags) => {
                    return { label: tags.label, id: tags.value };
                  })
                );
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="story">Body</label>
          <textarea
            ref={markdownRef}
            id="story"
            name="story"
            rows={20}
            required
            className="text-xl p-1 focus:outline-none rounded-md"
            placeholder="Enter Notes"
          ></textarea>
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

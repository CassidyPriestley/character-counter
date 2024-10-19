import { useState } from "react";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  useTitle("Character Counter");
  const [characters, setCharacters] = useState("");
  const [words, setWords] = useState("");

  const handleInput = (e) => {
    const wordArr = e.target.value.split(" ");
    const newWordArr = wordArr.filter((value) => value);
    setWords(newWordArr);
    setCharacters(e.target.value);
  };

  const handleClear = () => {
    setCharacters("");
    setWords("");
  };

  return (
    <main>
      <div className="text-center mt-28 pb-8 dark:text-white">
        <h1 className="text-5xl font-bold">Word Counter</h1>
        <p>Free online character and word count tool.</p>
      </div>
      <form className="w-1/2">
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your text
            </label>
            <textarea
              onChange={handleInput}
              value={characters}
              id="comment"
              rows="4"
              className="w-full h-52 p-5 text-sm text-gray-900 bg-white border-0 focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Type or paste your text"
              required
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-between px-3 py-2 border-t md:flex-row dark:border-gray-600">
            {/* CHARACTER COUNT */}
            <div
              className="w-full lg:w-1/3 flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Characters:</span>{" "}
                {characters.length}
              </div>
            </div>
            {/* WORD COUNT */}
            <div
              className="w-full lg:w-1/3 flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Words:</span> {words.length}
              </div>
            </div>
          </div>
        </div>
      </form>
      <button
        type="button"
        onClick={handleClear}
        className={`w-1/3 py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
          characters ? "" : "cursor-not-allowed"
        }`}
        disabled={characters ? "" : "disabled"}
      >
        Clear
      </button>
    </main>
  );
};

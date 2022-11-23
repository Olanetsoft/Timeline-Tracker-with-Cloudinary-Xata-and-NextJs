import React, { useState } from "react";
import { useRouter } from "next/router";

const Upload = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleOnChange(changeEvent) {
    const reader = new FileReader(); // create new reader to read image file as a data URL
    reader.onload = function (onLoadEvent) {
      setFile(onLoadEvent.target.result); // save base64 encoded version of image
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Submitting form...");

    await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        timeline,
        image: file,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setError(data.error);
        } else {
          router.push("/");
        }
      });

    setLoading(false);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-10">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4 mt-6">
          Create Timeline
        </h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 mb-8"
            type="text"
            name="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="form-control block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 mb-8"
            type="text"
            name="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            className="form-control block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 mb-8"
            type="date"
            name="Date"
            placeholder="Date"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            required
          />

          <div className="mb-4">
            <input
              className="form-control block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 mb-8"
              type="file"
              name="file"
              onChange={handleOnChange}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Upload;

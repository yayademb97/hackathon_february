import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AllMemes = () => {
  const navigate = useNavigate();
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMemes(data.data.memes.slice(0, 9)); //* Take the first 6 memes
        }
      })
      .catch((error) => console.error("Error fetching memes:", error));
  }, [memes]);
  return (
    <div>
      <h1 className="text-3xl font-medium">All Tasks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {memes.map((meme) => (
          <div key={meme.id} className="border p-2 rounded shadow-sm text-center">
            <img src={meme.url} alt={meme.name} className="w-full h-[250px] rounded" />
            <p className="w-[94vw] text-center mt-2 text-sm font-medium text-secondary">Name: {meme.name}</p>
            <p className="w-[94vw] text-center mt-2 text-sm font-medium text-secondary">Box Count: {meme.box_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMemes;

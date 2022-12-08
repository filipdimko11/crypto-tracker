import React from "react";

const EditParameters = () => {
  return (
    <div className="">
      <div className="w-screen-[-4px] bg-[#272F36] mx-4 my-4 rounded-lg">
        <div
          className="text-left pl-4 py-4 text-2xl"
          style={{ fontWeight: "400" }}
        >
          Edit parameters:
          <div className="grid grid-cols-4 my-2">
            <div>
              <select className="bg-[#27362e] text-sm rounded-lg">
                <option className="text-sm">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditParameters;

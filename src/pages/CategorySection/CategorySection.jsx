import React from "react";
import mens from "../../assets/men.jpg";
import woman from "../../assets/woman.jpg";
import kids from "../../assets/kids.jpg";

const Categories = [
  {
    id: 1,
    image: mens,
    imageURL: "Mens",
  },
  {
    id: 2,
    image: woman,
    imageURL: "Womans",
  },
  {
    id: 3,
    image: kids,
    imageURL: "Kids",
  },
];
function CategorySection() {
  return (
    <>
      {/* Men Woman Kids */}
      <div className="w-11/12 mx-auto bg-white py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center ">
          {/* Men's Woman Kids */}
          {Categories.map((category, index) => (
            <div
              className="border border-black relative hover:scale-105 transform transition-transform duration-300 rounded-md cursor-pointer"
              key={index}
            >
              <div className="w-full h-full">
                <img src={category.image} alt="" className="w-full h-full" />
              </div>
              <div className="absolute top-14 left-10">
                <h1 className="text-xl font-bold cursor-pointer">
                  {category.imageURL}
                </h1>
                <h1 className="text-md cursor-pointer underline text-start text-gray-600">
                  View All
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      {/* <div className="w-11/12 mx-auto">
        <div className="flex text-center">
          <h2>Top products</h2>
        </div>
      </div> */}
    </>
  );
}

export default CategorySection;

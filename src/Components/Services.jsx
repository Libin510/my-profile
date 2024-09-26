import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually appealing and userfriendly web designs.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing robust server-side logic and databases",
    }, {
      id: 4,
      title: "Full-Stack Development",
      description: "Combining both frontend and backend development skills.",
    },
   
  ];
  return (
    <div className="bg-black text-white py-10 2xl:py-20 md:py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((items) => (
            <div
              key={items.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-400">
                {items.id}
              </div>
              <h3 className="mt-2  text-base md:text-xl 2xl:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">{items.title}</h3>
              <p className="mt-2 text-gray-300">{items.description} </p>
              {/* <a href="#" className="mt-4 inline-block text-violet-400 hove:text-blue-500">Read More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

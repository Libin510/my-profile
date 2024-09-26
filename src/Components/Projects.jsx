import React from "react";
import movieapp from "../Assets/movieapp.png"
import Keralawonder from "../Assets/Keralawonder.png"
import comon from "../Assets/comon.png"

function Projects() {
  const projects = [
    {
      id: 1,
      name: "MOVIE APP",
      technologies: "React J.S",
      image: movieapp,
      github: "https://snazzy-trifle-70ffbe.netlify.app",
    },
    {
      id: 2,
      name: "KERALAWONDERS",
      technologies: "React J.S",
      image: Keralawonder,
      github: "https://snazzy-hamster-a14319.netlify.app",
    },{
        id: 3,
        name: "SHOPPING CART",
        technologies: "React J.S",
        image: comon,
        github: "https://github.com/Libin510/ShoppingCart",
      }
   
  ];
  return (
    <div className="bg-black text-white py-10 2xl:py-20 md:py-20" id="Project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((pro) => (
            <div key={pro.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={pro.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-base md:text-xl 2xl:text-2xl font-bold mb-2">{pro.name} </h3>
              <p className="text-gray-400 mb-4">{pro.technologies}</p>
              <a href={pro.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-violet-400 to-blue-500 text-white px-4 py-2 rounded-full">Link</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

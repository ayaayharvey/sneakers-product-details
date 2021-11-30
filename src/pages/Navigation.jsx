import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const nav = [
    { title: "Collections", path: "/collections", active: false },
    { title: "Men", path: "/men", active: false },
    { title: "Women", path: "/women", active: false },
    { title: "About", path: "/about", active: false },
    { title: "Contact", path: "/contact", active: false },
  ];

  return (
    <div className="">
      <div className="bg-secondary-light">
        <ul className="flex">
          {nav.map((item, i) => (
            <Link to={item.path} key={i}>
              <li
                className={`
                 text-gray-500 border-b-4 border-transparent hover:border-primary-dark hover:text-dark px-4 pb-10 cursor-pointer transition-all
                  ${item.active ? "text-primary-dark" : "text-light"}
                  `}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

import { React, useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My blog title",
      body: "Lorem spfr kjlfdddf mkjmk....",
      auther: "Akil Mehar",
      id: 1,
    },
    {
      title: "One day you ",
      body: "Lorem spfr kjlfdddf mkjmk....",
      auther: "Adil Mehar",
      id: 2,
    },
    {
      title: "How can we earn online",
      body: "There is many way to make money online... ",
      auther: "Asad Mehar",
      id: 3,
    },
    {
      title: "How to become success in life ",
      body: "Lorem spfr kjlfdddf mkjmk....",
      auther: "Adil Mehar",
      id: 4,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
    console.log(blogs);
  });

  return (
    <div className="home">
      <div key={blogs.id}>
        <BlogList
          blogs={blogs}
          className="card"
          title="All blogs lists"
          handleDelete={handleDelete}
        />
        <BlogList
          blogs={blogs.filter((blog) => blog.auther === "Adil Mehar")}
          className="card"
          title="Adil's Blogs"
        />
      </div>
    </div>
  );
};

export default Home;

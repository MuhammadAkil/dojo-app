import React from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
  //   const { id, title, body, auther } = blog;

  return (
    <div className="blog-list">
      <h2 className="pb-3  fs-2 fw-semibold">{title}</h2>

      {blogs.map((blog) => (
        <div className="blog.preview p-3 bg-dark my-4 rounded-4" key={blog.id}>
          <button
            className=" btn btn-close btn-close-white btn-btn-outline-dark btn-lg float-end"
            onClick={() => handleDelete(blog.id)}
          ></button>

          <h2 className="text-light fs-2">{blog.title}</h2>
          <p className="text-white fs-5">{blog.body}</p>
          <h6 className="text-white">
            Written by <cite className="text-white"> {blog.auther}</cite>
          </h6>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

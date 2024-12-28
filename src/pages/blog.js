// src/components/Blog.js
import React from "react";

const Blog = () => {
  // Sample blog data
  const blogPosts = [
    {
      title: "How to Build a Portfolio Website",
      date: "January 1, 2024",
      content:
        "In this blog post, I will show you how to create a portfolio website using React. It's simple, fast, and looks great.",
      link: "/portfolio-website",
    },
    {
      title: "Understanding JavaScript Closures",
      date: "December 15, 2023",
      content:
        "JavaScript closures can be tricky to understand. Let's break down how they work and how you can use them effectively.",
      link: "/javascript-closures",
    },
    {
      title: "The Basics of React Hooks",
      date: "November 25, 2023",
      content:
        "React hooks are essential to modern React development. Learn how to use useState, useEffect, and other hooks in your projects.",
      link: "/react-hooks",
    },
  ];

  return (
    <section className="blog">
      <div className="container my-5">
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body">
            <h2 className="text-gradient d-inline">My Blog</h2>
            <div className="blog-list mt-4">
              {blogPosts.map((post, index) => (
                <div className="blog-post" key={index}>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-date">{post.date}</p>
                  <p className="post-excerpt">{post.content}</p>
                  <a href={post.link} className="read-more">
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

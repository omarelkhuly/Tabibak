// src/components/Blog/BlogCard.jsx
import React from "react";
import "./blog.css";

const BlogCard = ({ title, date, excerpt, image }) => {
    return (
        <div className="blog-card">
            <div className="blog-image">
                <img src={image} alt={title} />
            </div>
            <div className="blog-content">
                <h3>{title}</h3>
                <span className="blog-date">{date}</span>
                <p>{excerpt}</p>
            </div>
        </div>
    );
};

export default BlogCard;
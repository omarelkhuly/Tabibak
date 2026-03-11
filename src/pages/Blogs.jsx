// src/pages/Blogs.jsx
import React from "react";
import { useTranslation } from "react-i18next";

import BlogCard from "../components/Blog/BlogCard";
import "./blogPage.css";

import blogBanner from "../assets/BLOGSECTION.jpg";
import blog1 from "../assets/Blog1.jpg";
import blog2 from "../assets/Blog2.jpg";
import blog3 from "../assets/Blog3.jpg";

const Blog = () => {

    const { t } = useTranslation();

    const blogPosts = [
        {
            title: t("blog.post1Title"),
            date: "2026-03-06",
            excerpt: t("blog.post1Desc"),
            image: blog1,
        },
        {
            title: t("blog.post2Title"),
            date: "2026-02-25",
            excerpt: t("blog.post2Desc"),
            image: blog2,
        },
        {
            title: t("blog.post3Title"),
            date: "2026-02-10",
            excerpt: t("blog.post3Desc"),
            image: blog3,
        },
    ];

    return (
        <>
            {/* Hero */}
            <section
                className="blog-hero"
                style={{ backgroundImage: `url(${blogBanner})` }}
            >
                <div className="blog-hero-overlay">
                    <h1>{t("blog.title")}</h1>
                    <p>{t("blog.subtitle")}</p>
                </div>
            </section>

            {/* Posts */}
            <section className="blog-section">
                <div className="blog-container">

                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            title={post.title}
                            date={post.date}
                            excerpt={post.excerpt}
                            image={post.image}
                        />
                    ))}

                </div>
            </section>
        </>
    );
};

export default Blog;
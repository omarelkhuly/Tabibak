// src/pages/Blog.jsx
import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import "./blogPage.css";
import blogBanner from "../assets/BLOGSECTION.jpg";
import blog1 from "../assets/Blog1.jpg";
import blog2 from "../assets/Blog2.jpg";
import blog3 from "../assets/Blog3.jpg";

// مثال على بيانات البوستات
const blogPosts = [
    {
        title: "إدارة المواعيد الطبية بسهولة",
        date: "2026-03-06",
        excerpt: "طرق فعالة لتنظيم المواعيد في العيادات والمستشفيات...",
        image: blog1,
    },
    {
        title: "تحسين تجربة المرضى",
        date: "2026-02-25",
        excerpt: "أفضل الممارسات لجعل تجربة المرضى سلسة ومريحة...",
        image: blog2,
    },
    {
        title: "أمان البيانات الطبية",
        date: "2026-02-10",
        excerpt: "طرق حماية بيانات المرضى والمنشآت الطبية من الاختراق...",
        image: blog3,
    },
];

const Blog = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="blog-hero-overlay">
                    <h1>مدونة تابيبك</h1>
                    <p>اكتشف أهم المقالات والنصائح حول إدارة المنشآت الطبية والعيادات</p>
                </div>
            </section>

            {/* Blog Cards Section */}
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
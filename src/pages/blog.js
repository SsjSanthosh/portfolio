import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../Components/head"
import Layout from "../Components/layout"

import styles from "./blog.module.scss"
function BlogPage() {
  const blogs = useStaticQuery(graphql`
    query {
      allContentfulBlogs(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          title
          slug
          publishedAt
        }
      }
    }
  `).allContentfulBlogs.nodes
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog!</h1>
        <ol className={styles.posts}>
          {blogs.map(blog => {
            return (
              <li key={blog.title} className={styles.post}>
                <Link to={`/blog/${blog.slug}`}>
                  <h2>{blog.title}</h2>
                  <p>Created {blog.publishedAt.slice(0, 10)}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage

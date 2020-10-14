import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../Components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      content {
        json
      }
      publishedAt
    }
  }
`

export default function Blog(props) {
  console.log(props.data.contentfulBlogs.content.json)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            alt={node.data.target.fields.title["en-US"]}
            src={node.data.target.fields.file["en-US"].url}
          />
        )
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogs.title} />
      <h1>{props.data.contentfulBlogs.title}</h1>

      <p>Added {props.data.contentfulBlogs.publishedAt}</p>
      {documentToReactComponents(
        props.data.contentfulBlogs.content.json,
        options
      )}
      {/* <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div> */}
    </Layout>
  )
}

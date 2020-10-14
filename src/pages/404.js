import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/layout"
import Head from "../Components/head"
const NotFount = () => {
  return (
    <Layout>
      <Head title="Not Found" />

      <h1>Page not found!</h1>
      <Link to="/">Go home</Link>
    </Layout>
  )
}

export default NotFount

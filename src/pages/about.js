import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { FaCheckSquare } from "react-icons/fa"
const about = ({ data: { about } }) => {
  const { info, stack, title, image } = about

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title}></Title>
            <p>{info}</p>
            <div className="stack-container">
              {stack.map(item => {
                return (
                  <span key={item.id}>
                    <FaCheckSquare className="stack-icon"></FaCheckSquare>
                    {item.name}
                  </span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: strapiAbouts {
      info
      stack {
        id
        name
      }
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default about

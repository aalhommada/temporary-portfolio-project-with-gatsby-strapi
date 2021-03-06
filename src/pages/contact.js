import React from "react"
import Layout from "../components/Layout"
const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact

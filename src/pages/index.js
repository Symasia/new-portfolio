import React from "react"
import {
  FaPaperPlane,
  FaPaperclip,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Card from "../components/card"

const blogPosts = [
  {
    title: "Design Patterns in JS",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis finibus turpis, non varius metus.",
  },
  {
    title: "Design Patterns in TS",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis finibus turpis, non varius metus.",
  },
  {
    title: "Design Patterns in OOP",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis finibus turpis, non varius metus.",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="grid grid-cols-3 gap-8 container md:mx-auto px-3">
        <div className="md:col-span-2 col-span-3">
          <h2 className="text-lg my-0">Hello, I am</h2>
          <h1 className="text-5xl my-1 uppercase">Shenesh Perera</h1>
          <h2 className="text-xl">Application Developer & Technical Writer</h2>
          <p className="text-xl my-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            finibus turpis, non varius metus. Phasellus porta aliquet euismod.
            Etiam a ante felis. Etiam a nulla accumsan, ullamcorper ipsum a,
            venenatis ipsum. Sed in sapien varius, dignissim est a, mollis mi.
            Aliquam ornare imperdiet purus, cursus pretium libero porta ut.
          </p>

          <div className="flex">
            <Button link="#">
              <FaPaperclip />
              Check my Portfolio
            </Button>
            <Button link="#" alter>
              <FaPaperPlane />
              Contact me
            </Button>
          </div>
        </div>
        <div className="md:col-span-1 sm:hidden"></div>
      </div>
    </section>
    <section className="about">
      <div className="flex justify-between flex-wrap container md:mx-auto sm:px-6 px-6">
        <div className="lg:w-2/5 w-full">
          <h3 className="mb-2 text-sm text-white">About me</h3>
          <h2>
            I don't believe in talent. Effort and potential are the only real
            metrics in the modern world.
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            finibus turpis, non varius metus. Phasellus porta aliquet euismod.
            Etiam a ante felis. Etiam a nulla accumsan, ullamcorper ipsum a,
            venenatis ipsum. Sed in sapien varius, dignissim est a, mollis mi.
            Aliquam ornare imperdiet purus, cursus pretium libero porta ut.Sed
            quis finibus turpis, non varius metus.
          </p>

          <div className="flex">
            <p className="text-5xl font-bold">3+</p>
            <div className="flex flex-col font-semibold text-white ml-3 mt-4">
              <p className="my-0">Professional</p>
              <p>Years Of Experience</p>
            </div>
          </div>
        </div>


        <div className="lg:w-2/5">
          <h2 className="mt-8 lg:mt-0 xl:mt-0">Read my blog posts!</h2>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            finibus turpis, non varius metus.
          </p>
          <ul className="text-white ml-0">
            {blogPosts.map(post => (
              <li key={post.title}>
                <Card {...post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <section className="contact">
      <div className="container md:mx-auto md:px-0 md:px-6 px-4">
        <h2 className="text-4xl">Contact me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          finibus turpis, non varius metus. Phasellus porta aliquet euismod.
          Etiam a ante felis. Etiam a nulla accumsan, ullamcorper ipsum a,
          venenatis ipsum. Sed in sapien varius, dignissim est a, mollis mi.
          Aliquam ornare imperdiet purus, cursus pretium libero porta ut.
        </p>

        <div className="flex justify-between flex-wrap">
          <div className="lg:w-2/5">
            <h2>Follow me</h2>
            <div className="flex">
              <FaLinkedin className="text-6xl" />
              <div className="ml-2">
                <small>LinkedIn</small>
                <h3 className="my-0 text-3xl">Shenesh Perera</h3>
              </div>
            </div>
            <div className="flex mt-5">
              <FaGithub className="text-6xl" />
              <div className="ml-2">
                <small>Github</small>
                <h3 className="my-0 text-3xl">Symasia</h3>
              </div>
            </div>
            <div className="flex mt-5">
              <FaDiscord className="text-6xl" />
              <div className="ml-2">
                <small>Discord</small>
                <h3 className="my-0 text-3xl">Symasia#0154</h3>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full lg:mt-0 mt-12">
            <h3>Send me a message</h3>
            <form className="flex flex-col">
              <input className="mb-4 bg-black p-3 text-white" type="text" placeholder="Your name"></input>
              <input className="mb-4 bg-black p-3 text-white" type="text" placeholder="Subject of your message"></input>
              <textarea placeholder="Your message" className="bg-black p-3 mb-4 text-white"></textarea>
            </form>
            <Button link="#">Send</Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

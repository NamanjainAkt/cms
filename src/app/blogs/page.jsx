import Image from "next/image"

const blogConfig = [
  {
    "title": "React vs NextJS",
    "excerpt": "NextJS is the ultimate technology",
    "image": "/thumbnail/dreams.png",
    "url":"/blogs/react-vs-nextjs"
  },
  {
    "title": "Vue vs React",
    "excerpt": "Comparing the two most popular frontend frameworks",
    "image": "/thumbnail/react-v-next.png",
    "url":"/blogs/vue-vs-react"
  },
  {
    "title": "NodeJS Performance Tips",
    "excerpt": "Optimize your backend applications for maximum speed",
    "image": "/thumbnail/dreams.png",
    "url":"/blogs/nodejs-performance-tips"
  },
  {
    "title": "CSS Grid vs Flexbox",
    "excerpt": "When to use each layout system in modern web design",
    "image": "/thumbnail/become-backend-dev.png",
    "url":"/blogs/css-grid-vs-flexbox"
  },
  {
    "title": "TypeScript Benefits",
    "excerpt": "Why TypeScript is becoming essential for large projects",
    "image": "/thumbnail/react-v-next.png",
    "url":"/blogs/typescript-benefits"
  }
]

const page = () => {
  return (
    <section>
      {
        blogConfig.map((blog, index) => {
          return <blogcard key={index} title={blog.title} excerpt={blog.excerpt} image={blog.image} url={blog.url} />
        })
      }
    </section>
  )
}

export default page

const blogcard = ({ title, excerpt, image, url }) => {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={300} />
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <a href={url}>Read more</a>
    </div>
  )
}
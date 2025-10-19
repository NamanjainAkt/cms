import Image from "next/image"
import Link from "next/link"

const blogConfig = [
  {
    "title": "React vs NextJS",
    "excerpt": "NextJS is the ultimate technology",
    "image": "/thumbnail/dreams.png",
    "url":"/react-vs-nextjs"
  },
  {
    "title": "Vue vs React",
    "excerpt": "Comparing the two most popular frontend frameworks",
    "image": "/thumbnail/react-v-next.png",
    "url":"/vue-vs-react"
  },
  {
    "title": "NodeJS Performance Tips",
    "excerpt": "Optimize your backend applications for maximum speed",
    "image": "/thumbnail/dreams.png",
    "url":"/nodejs-performance-tips"
  },
  {
    "title": "CSS Grid vs Flexbox",
    "excerpt": "When to use each layout system in modern web design",
    "image": "/thumbnail/become-backend-dev.png",
    "url":"/css-grid-vs-flexbox"
  },
  {
    "title": "TypeScript Benefits",
    "excerpt": "Why TypeScript is becoming essential for large projects",
    "image": "/thumbnail/react-v-next.png",
    "url":"/typescript-benefits"
  }
]

const page = () => {
  return (
    <section className="grid gap-4 grid-cols-2 md:grid-cols-3 p-4">
      {
        blogConfig.map((blog, index) => {
          return <BlogCard key={index} title={blog.title} excerpt={blog.excerpt} image={blog.image} url={blog.url} />
        })
      }
    </section>
  )
}

export default page

const BlogCard = ({ title, excerpt, image, url }) => {
  return (
    <div className="bg-zinc-800/30 rounded-lg border border-zinc-700 p-4 flex flex-col gap-2 mx-2 my-2 hover:scale-102 transition-transform duration-200">
      <Image src={image} alt={title} width={500} height={300} className="rounded-lg shadow-card border border-zinc-700" />
      <h2 className="font-semibold text-lime-400">{title}</h2>
      <p className="text-xs font-medium text-emerald-700">{excerpt}</p>
      <Link href={`blog${url}`} className="p-2 bg-lime-500 w-30 text-center  rounded-md text-black font-semibold">Read more</Link>
    </div>
  )
}
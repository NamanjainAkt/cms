import dateFormat from "@/utils/dateFormat";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function SingleBlog() {

  const tags = ["Space exploration", "Technology", "Innovation"];
  return (
    <section>
      <div className="flex flex-col gap-4 items-center">
        <Image
          className="rounded-md border border-gray-500 w-[90%] md:w-[700px]"
          src="/thumbnail/dreams.png" alt="Blog Post Image" width={500} height={300} />
        <div className="meta-of-a-blog space-y-2">
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="text-gray-400 w-4 h-4 " />
            <p className="text-xs text-gray-400">Created on : {dateFormat(new Date())}</p>
          </div>

          <div className="text-xs flex items-center gap-2 mt-2">
            <p>Category : </p>
            <p className="badge bg-gray-400/30 border border-gray-700 w-fit px-2 py-1 rounded">Space exploration</p>
          </div>
          <div className="text-xs flex items-center gap-2 mt-2">
            <p>Tags : </p>
            {tags.map((tag, index) => (
              <p key={index} className="badge bg-gray-400/30 border border-gray-700 w-fit px-2 py-1 rounded">{tag}</p>
            ))}
          </div>
        </div>
        <div className="text-sm md:w-1/2 text-justify p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptas hic deserunt. Beatae, nam illo! Doloremque consequatur provident quia adipisci fuga architecto dolorum dolore recusandae corporis, porro est eius natus!
            Voluptate esse expedita quam, minus aut consectetur dicta incidunt, amet, corporis placeat earum rem provident commodi. Vitae quas expedita, nisi deleniti quae facilis explicabo veniam voluptate dolorum iusto porro nemo.
            Repellendus deleniti consectetur labore porro, inventore perferendis eum quibusdam placeat dolor velit totam alias explicabo neque illo, saepe repellat reiciendis debitis, rerum amet laborum sapiente sequi! Similique explicabo perspiciatis consequatur!
            Harum odio illo temporibus autem quod earum possimus quo! Qui aperiam tempora, veritatis, repellendus molestias nihil expedita minus cupiditate amet magnam dolores sunt tenetur beatae corrupti illum eaque ex reprehenderit?
            Reiciendis corporis odit adipisci, aut, cumque eos consectetur dolorem repellat hic necessitatibus aliquid debitis neque esse inventore. Magni quis facilis quisquam natus reiciendis provident consectetur explicabo velit atque. Cum, nesciunt?
          </p>
        </div>
      </div>
    </section>
  );
}

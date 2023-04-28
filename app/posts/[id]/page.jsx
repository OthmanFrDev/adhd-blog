import React from "react";
import Author from "../../components/_child/Author";
import Image from "next/image";
import Products from "@/app/components/shop/products/Products";

const page = () => {
  return (
    <section className="container mx-auto text-justify md:px-2 py-16 w-9/12 lg:w-1/2 md:w-1/2">
      <div className="flex justify-center">
        <Author />
      </div>
      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate eligendi accusantium expedita hic! Vero modi explicabo
          veniam tempore dicta earum saepe at beatae, voluptatum unde doloribus
          fuga, quo reprehenderit!
        </h1>
        <p className="text-gray-500 text-xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit
          quis officia cupiditate similique minus et nostrum. Odit harum qui
          dolorum repudiandae eaque. Ex nemo sed error. Quod, deserunt sapiente?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          eligendi. Sed, ab cum sit fugit ea autem excepturi soluta hic, nulla
          possimus quas numquam, harum sapiente temporibus magni veniam nam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          neque reiciendis voluptas qui. Nulla praesentium quidem illum, facere
          doloribus cum mollitia quis error est magni voluptatibus nesciunt,
          quos beatae. Quibusdam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos obcaecati adipisci dolore necessitatibus
          in. Dolorum enim, totam delectus eveniet dolores amet eius aliquid
          quam laudantium at neque, ipsam omnis recusandae? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Cum adipisci voluptate et
          ipsam? Temporibus quo expedita iste, et corrupti totam possimus quasi?
          Reiciendis quam esse pariatur doloremque voluptas autem ipsa?
        </p>
        <div className="py-10">
          <Image src={"/images/img1.jpg"} width={900} height={900} />
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veritatis adipisci, ratione soluta eum enim minima aliquam quia ut
            possimus quas. Nulla doloremque vero reprehenderit asperiores
            doloribus quia numquam repellendus!
          </p>
        </div>
      </div>

      <Products />
    </section>
  );
};

export default page;

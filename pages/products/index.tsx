import { NextPage } from "next";
import Head from "next/head";

const products: NextPage<any>= () => {

     return(<div className="">
        <Head>
            <title>Products</title>
        </Head>

        <main className="">
            <div id="content" className="p-20">
                <h1 className="text-6xl font-semibold">Products</h1>
            </div>
        </main>

     </div>)
}

export default products;
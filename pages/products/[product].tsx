import { NextPage } from "next";
import Head from "next/head";

const product: NextPage<any>= (props) => {

     return(<div className="">
        <Head>
            <title>Product</title>
        </Head>

        <main className="">
            <div id="content" className="p-20">
                <h1 className="text-6xl font-semibold">Product</h1>
            </div>
        </main>

     </div>)
}

export default product;


// EXEMPLARY CODE OF DYNAMIC ROUTING FOR OUR PRODUCT PAGE GENERATION 

// export async function getStaticPaths() {
//     return {
//       paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//       fallback: false, // can also be true or 'blocking'
//     }
//   }
  
//   // `getStaticPaths` requires using `getStaticProps`
//   export async function getStaticProps(context) {
//     return {
//       // Passed to the page component as props
//       props: { post: {} },
//     }
//   }
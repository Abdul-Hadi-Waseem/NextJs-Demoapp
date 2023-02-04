import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home ({ allPostsData }) { 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Front End Developer | Web 3.0 | AI | BU | Blockchain: Building Future Of Web]</p>
        <p>
  
        Navigate To The Next Page ! <Link href={"./posts/first-post"}>Click Here</Link>
        </p>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{title}</Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
      </section>
      
    </Layout>
  );
}
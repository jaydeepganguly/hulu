
import Head from 'next/head'
import Results from '../components/Results'
import Nav from '../components/Nav'
import Headers from '../components/Headers'
import requests from '../utils/requests'


export default function Home({results}) {


  return (
    <div >
      <Head>
        <title>hulu 2.0</title>
        {/* <Link  href='/favicon.ico'/> */}
      </Head>
     <Headers/>

     <Nav/>
     <Results results={results}/>
    </div>
  )
}


export async function getServerSideProps(context){
    const genre = context.query.genre;


    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url
     || requests.fetchTrending.url
    }`
    ).then(res => res.json());

    return {
      props:{
        results: request.results,
      }
    }
}
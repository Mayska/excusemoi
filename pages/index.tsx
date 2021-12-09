import type { NextPage } from 'next'
import Head from 'next/head'


export default function Index() {
  const injonction = ["Tu ne vas pas me croire mais, ", "Ha la la,", "Non mais attend,",
   "La boulette,", "Mardi dernier,","Tu sais quoi,"];
  const start = ["j'ai", "ma femme a", "mon chien a", "un homme a",
   "une méduse a", "un extraterrestre", "mon voisin a"];
  const verbe = ["perdu", "mangé", "vendu", "vérouillé", "volé"];
  const end = ["les documents", "le papier", "la signature", "la piscine", "la voiture", "la maison"];
  const excuse = injonction[random(injonction.length)] + " " + start[random(start.length)] + " " + verbe[random(verbe.length)] + " " + end[random(end.length)]
  const porps = {
    headtitre:"Excuse moi, mais...",
    titre:"Génarateur d’excuse.",
    finexcuse:", donc je ne peux pas t'augmenter.",
    promesse:"La prochaine fois c'est promis...",
    label:"Trouve vite une nouvelle excuse ici, vite, vite!!!  ",
    btntext:"Une autre",
    conclusion:"Toi aussi,  aide ton employeur a trouver des excuses pour ne pas t’augmenter.",
    signature:"By Maysk@"

  }
  return (
    <div className="container-xl">
      <Head>
        <title>{porps.headtitre}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <br />
        <br />
        <h1 className="text-center">{porps.titre}</h1>
        <h5 className='text-center text-muted'>{porps.conclusion}</h5>
        <div className="row">
    <div className="col">
    </div>
    <div className="col-8">  
    <br /> 
    <hr/>    
    <form action="/" method="GET">
          <p className='text-center fs-5'>{excuse}{porps.finexcuse}</p>
          <p className='text-center fs-5 fst-italic'>{porps.promesse}</p>
          <hr/>    
          <label>{porps.label}<button type="submit" className="btn btn-success">{porps.btntext}</button></label>
        </form>
        <hr/>
    </div>
    <div className="col"></div>
  </div>
      </main>
      <footer>
        <br />
        <br />
        <p className='text-end text-muted'>{porps.signature}</p>
      </footer>
      </div>
  )
}


function random(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
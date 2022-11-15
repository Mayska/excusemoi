import type { NextPage } from 'next'
import Head from 'next/head'
import { adberbList } from './data/adverb-list';
import { conteList } from './data/conte-list';
import { endList } from './data/end-list';
import { fableList } from './data/fable-list';
import { femaleList } from './data/female-list';
import { fourthParagraphList } from './data/fourthParagraph';
import { itemList } from './data/item-list';
import { livreList } from './data/livre-list';
import { maleList } from './data/male-list';
import { subjectList } from './data/subject-list';
import { tableauList } from './data/tableaux';
import { thirdParagraphPart1, thirdParagraphPart2 } from './data/thirdParagraph-list';


export default function Index() {
  let start: string[] = []
  const begin = subjectList[random(subjectList.length)];
  if (begin === subjectList[0]) {
    start = femaleList;
  } else {
    start = maleList;
  }
  const firstParagraph = begin + " " + start[random(start.length)] + " " + endList[random(endList.length)] + "."
  const item = itemList[random(itemList.length)];
  let secondParagraph = "C'est " + adberbList[random(adberbList.length)] + " " + item + ": ";
  if (item === item[0]) {
    secondParagraph = secondParagraph + tableauList[random(tableauList.length)] + "."
  } else if (item === item[1]) {
    secondParagraph = secondParagraph + fableList[random(fableList.length)] + "De Jean de La Fontaine."
  } else if (item === item[2]) {
    secondParagraph = secondParagraph + livreList[random(livreList.length)] + "."
  } else {
    conteList
    secondParagraph = secondParagraph + conteList[random(conteList.length)] + "."
  }

  const thirdParagraph = thirdParagraphPart1[random(thirdParagraphPart1.length)] + " " + thirdParagraphPart2[random(thirdParagraphPart2.length)]
  const fourthParagraph = "Comme le réalisateur le souligne: '" + fourthParagraphList[random(fourthParagraphList.length)] + "'"
  const porps = {
    headtitre: "Review generator",
    titre: "Générateur de critique évolué pour te la péter en société.",
    finexcuse: ", donc je ne peux pas t'augmenter.",
    promesse: "La prochaine fois c'est promis...",
    label: "Raconte-toi là encore => ",
    btntext: "ICI",
    conclusion: "Tu n'as pas vu le film, mais tu veux donner ton avis...",
    signature: "By Maysk@"

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
          <div className="col-10">
            <br />
            <hr />
            <form action="/" method="GET">
              <p className='text-center fs-5'>{firstParagraph}</p>
              <p className='text-center fs-5'>{secondParagraph}</p>
              <p className='text-center fs-5'>{thirdParagraph}</p>
              <p className='text-center fs-5 fst-italic'>{fourthParagraph}</p>
              <hr />
              <label>{porps.label}<button type="submit" className="btn btn-success">{porps.btntext}</button></label>
            </form>
            <hr />
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
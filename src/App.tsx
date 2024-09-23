import { useState } from 'react'
import './App.css'

function Br(){
  return <br />
}

function HeaderFirst() {
  return  <h1>Első szintű címsor</h1>
}

function HeaderSecond() {
  return <h2>Második szintű címsor</h2>
}

function ParagraphLorem() {
  return <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequatur molestiae quibusdam minima architecto, voluptatem natus neque velit sint ex possimus doloribus culpa vero officiis vitae cumque quia dolores ipsa.</p>
}

function RandomNumber() {
  let r = Math.floor(Math.random() * 10 + 1);
  return <p>{ r }</p>
}

function ParagraphWithLocalStyle() {
  return <p style={{
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'green',
    textDecoration: 'underline'
  }}>Ritka, mint árvaházban a szülői értekezlet.</p>
}

function App() {
  return (
    <div>
    {HeaderFirst()}
    {Br()}
    {HeaderSecond()}
    {Br()}
    {ParagraphLorem()}
    {Br()}
    {RandomNumber()}
    {Br()}
    {RandomNumber()}
    {Br()}
    {RandomNumber()}
    {Br()}
    {ParagraphWithLocalStyle()}
    </div>
  )
}
export default App
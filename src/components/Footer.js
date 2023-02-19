import React from 'react'
import Container from "react-bootstrap/Container";
import { useSelector } from 'react-redux';


export default function Footer() {
  const language = useSelector((state) => state.typer.language)
  return (
    <Container className='mt-3 text-center'>
        {!language && "Made with love by "}<a target="_blank" rel='noreferrer' href="https://github.com/doganfurkan">Furkan Doğan</a>{language && " tarafından sevgiyle hazırlandı."}
    </Container>
  )
}

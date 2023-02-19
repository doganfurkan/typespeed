import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

export default function Finished() {
  const rightWords = useSelector((state) => state.typer.rights);
  const wrongWords = useSelector((state) => state.typer.wrongs);
  const totalChar = useSelector((state) => state.typer.totalChar);
  const rightChar = useSelector((state) => state.typer.rightChar);
  const language = useSelector((state) => state.typer.language);
  return (
    <div id="finish">
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="py-2">{language ? "Süre Doldu" : "Time's Up"}</Card.Title>
          <Table bordered hover>
            <tbody>
              <tr>
                <td>{language ? "Toplam Kelime" : "Total Words"}</td>
                <td>{rightWords.length + wrongWords.length}</td>
              </tr>
              <tr>
                <td>{language ? "Doğru Kelime" : "Correct Words"}</td>
                <td>{rightWords.length}</td>
              </tr>
              <tr>
                <td>{language ? "Kelime Doğruluğu" : "Word Correction"}</td>
                <td>{(rightWords.length*100/(rightWords.length + wrongWords.length)).toFixed(2)}%</td>
              </tr>
              <tr>
                <td>{language ? "Toplam Karakter" : "Total Characters"}</td>
                <td>{totalChar}</td>
              </tr>
              <tr>
                <td>{language ? "Doğru Kelimelerin Karakterleri" : "Correct Words' Characters"}</td>
                <td>{rightChar}</td>
              </tr>
              <tr>
                <td>{language ? "Karakter Doğruluğu" : "Character Correction"}</td>
                <td>{(rightChar*100 / totalChar).toFixed(2)}%</td>
              </tr>
            </tbody>
          </Table>{" "}
          <Button href="/" variant="primary">{language ? "Sıfırla" : "Restart"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

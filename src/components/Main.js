import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { answerSet, answered, bringWords, setTime, startTyping } from "../redux/typingSlice";


export default function Main() {
  const theme = useSelector((state) => state.typer.theme);
  const answer = useSelector((state) => state.typer.answer);
  const wordsShown = useSelector((state) => state.typer.wordsShown);
  const lineAt = useSelector((state) => state.typer.lineAt);
  const eachTime = useSelector((state) => state.typer.eachTime);
  const started = useSelector((state) => state.typer.started);
  const time = useSelector((state) => state.typer.time);
  const finished = useSelector((state) => state.typer.finished);
  const language = useSelector((state) => state.typer.language);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(lineAt < (eachTime - 1)){
      dispatch(answered())
    }
    else{
      dispatch(answered())
      dispatch(bringWords())
    }
  }
  const handleChange = (e) => {
    if(!started){dispatch(startTyping()); setInterval(() => {dispatch(setTime())},1000)}
    if(e.target.value[e.target.value.length - 1] !== " "){dispatch(answerSet(e.target.value))}
    else{
      if(lineAt < (eachTime - 1)){
        dispatch(answered())
      }
      else{
        dispatch(answered())
        setTimeout(() => {dispatch(bringWords())},500)
      }
    }
  }

  return (
    <Container className="mt-3">
      <Card bg={theme ? "dark" : ""}>
        <Card.Body>
          <Card bg={theme ? "dark" : ""}>
            <Card.Body>
              {wordsShown.map((item,key) => {
                return <span key={key} id={`item${key}`} className={key === 0 ? "askedSpan working" : "askedSpan"}>{language ? item.turkish : item.english}</span>
              })}
            </Card.Body>
          </Card>
          <Row className="mt-3">
            <Col xs="12" sm>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control name="txt" disabled={finished} type="text" value={answer} onChange={handleChange} placeholder={language ? "Kelimeyi girin" : "Enter the word"} />
                </Form.Group>
              </Form>
            </Col>
            <Col className="text-center mt-3 mt-sm-0 d-grid" sm="auto" xs="6">
              <Button variant="warning" disabled>
                <b>{`${time} s`}</b>
              </Button>
            </Col>
            <Col className="text-end mt-3 mt-sm-0 d-grid" sm="auto" xs="6">
              <Button href="/" variant="primary">{language ? "Sıfırla" : "Restart"}</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

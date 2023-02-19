import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { themeChange, langChange } from "../redux/typingSlice";

export default function MyNavbar() {
  const theme = useSelector((state) => state.typer.theme);
  const language = useSelector((state) => state.typer.language);
  const started = useSelector((state) => state.typer.started);
  const dispatch = useDispatch();
  const onSwitchAction = () => {
    dispatch(themeChange());
    document.body.classList.toggle("dark");
  };
  const onLangAction = () => {
    dispatch(langChange());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg={theme ? "dark" : "light"} variant={theme ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="#home">{language ? "Yazma Hızı Uygulaması" : "Typespeed App"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex py-2 py-lg-0 gap-1 gap-lg-3">
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={`${language ? "Tr" : "En"}`}
                onChange={onLangAction}
                checked={language}
                text={theme ? "white" : "dark"}
                disabled={started}
              />
            </Form>{" "}
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={language ? `${theme ? "Koyu" : "Açık"} Tema` : `${theme ? "Dark" : "Light"} Theme`}
                onChange={onSwitchAction}
                checked={theme}
                text={theme ? "white" : "dark"}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

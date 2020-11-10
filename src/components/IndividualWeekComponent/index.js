import "./main.css";
import { useState } from "react";
import Collapsible from "react-collapsible";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function IndividualChallenge({ item, currentWeek, isOpen, index, makeOpen }) {
  const [input, setInput] = useState("");
  const [link, setLink] = useState([]);
  

  function addInput(text) {
    setInput(text);
  }

  function addLink() {
    setLink([...link, input]);
  }

  return (
    <div>
      <Collapsible
        trigger={item.title}
        className="Header"
        onOpen={() => {currentWeek(item.id); makeOpen(index)}}
        open = {isOpen}
      >
        <section className="content">
          <p>{item.description}</p>
          <p>{item.challenge}</p>
          <div>
            {link.map((item) => {
              return <p>{item}</p>;
            })}
            <input
              placeholder="Add all links to this week"
              onChange={(e) => {
                addInput(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addLink(input);
                  setInput((e.target.value = ""));
                }
              }}
            />
          </div>
        </section>
      </Collapsible>
    </div>
  );
}
export default IndividualChallenge;

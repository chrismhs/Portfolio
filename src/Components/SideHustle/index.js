import React, { useState } from "react";

import styled, { withTheme } from "styled-components";

import SideProject from "./SideProject";

const NextProject = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: rgb(${(props) => props.theme.link});
  padding: 0;
  margin: 40px 0 2px;
  font-weight: 600;
  border-bottom: 2px solid rgb(${(props) => props.theme.link});

  transition: 0.2s ease-in-out;

  :hover {
    filter: brightness(150%);
  }

  :focus {
    outline: 0;
  }
`;

const SideHustle = () => {
  const projects = [
    
    {
      description:
        "Check the size of things on Amazon, by putting them next to a person.",
      linktext: "www.nexttoaperson.com",
      linkurl: "https://www.nexttoaperson.com/",
      eventlabel: "ntap",
      contributors: ["João Martins"],
      contributorscontact: ["https://jvmartins.com/"],
    },
    {
      description:
        "A simple website and logo for a DJ. A fun project to explore WebGL. ",
      linktext: "Visit website",
      linkurl: "https://www.artemixdj.com/",
      eventlabel: "artemix",
      contributors: ["JP"],
      contributorscontact: ["https://byjp.me/"],
    },
    {
      description:
        "Bell-Air. An IoT physical bell that rings when a hotel guest messages on web-chat",
      linktext: "View on GitHub",
      linkurl: "https://github.com/chrismhs/bell-air",
      eventlabel: "bell-air",
      contributors: ["João Martins"],
      contributorscontact: ["https://jvmartins.com/"],
    },
    {
      description:
        "A tool that helps healthcare workers get a simple version of their work schedule. (WIP)",
      linktext: "View on GitHub",
      linkurl: "https://github.com/chrismhs/simplified-rota",
      eventlabel: "rota",
      contributors: [
        "Nick White",
        "Isabel Cooper",
        "Chloe Montgomery",
        "Tom Damant",
      ],
      contributorscontact: [
        "https://github.com/nawhi",
        "https://github.com/isabelcooper",
        "https://github.com/cjmontgom",
        "https://github.com/tdamant",
      ],
    },
    
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  function increaseProjectIndex() {
    if (projectIndex < projects.length - 1) {
      setProjectIndex(projectIndex + 1);
    } else {
      setProjectIndex(0);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-10 col-lg-7 offset-1">
          <div>
            <SideProject project={projects[projectIndex]} />
            <NextProject onClick={() => increaseProjectIndex()}>
              Next experiment
            </NextProject>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTheme(SideHustle);

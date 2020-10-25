import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/hopscotch.css";
const AboutMe = () => {
  const code = `import React from "react";

  const AboutMe = () => {

    const name = "Emin Aydın";
    const city = "Berlin";
    const email = "eminaydin93@gmx.de";
  
    
    const personalInformation = () => {
      return (
        <div>
          <p>
            Hey! It's {name} from {city}.
          </p>
        </div>
      );
    };

    const education = () => {
      return (
        <ul>
          <li>
            Digital Career Institute - 1 year intensive web development course in
            {city}. 2019/2020
          </li>
          <li>University of Szeged - Exchange student. 2018/2019</li>
          <li>Istanbul University - Masters in Medieval History. 2016/2018</li>
        </ul>
      );
    };

    const professionalSkills = () => {
      return (
        <ul>
          <li>
            HTML / CSS / SASS / Bootstrap / Materialize / Semantic-ui /
            Material-ui
          </li>
          <li>
            Javascript / jQuery / React / React Native / Dart / Flutter / Expo /
            Redux
          </li>
          <li>Node.js / Express.js / MongoDB / Jest / Webpack</li>
          <li>Git / Npm / Github / Gitlab</li>
        </ul>
      );
    };

    const workExperience = () => {
      return (
        <ul>
          <li>Famedly GmbH / Software Developer Intern. 07.2020 - Ongoing</li>
        </ul>
      );
    };
    const contact = () => {
        return (
        <div>
          <p>
          You can reach out to me at {email}.
          </p>      
        </div>
        );
    };
    return (
      <div>
        <h1>Personal Information</h1>
        {personalInformation()}
        <h1>Professional Skills</h1>
        {professionalSkills()}
        <h1>Education</h1>
        {education()}
        <h1>Work Experience</h1>
        {workExperience()}
        <h1>Contact</h1>
        {contact()}
      </div>
    );
  };
  
  export default AboutMe;
  `;

  return (
    <CodeMirror
      value={code}
      options={{
        theme: "hopscotch",
        keyMap: "sublime",
        mode: "jsx",
        scrollbarStyle: "null",
        lineWrapping: true,
        tabSize: 16,
      }}
      width="50%"
      height="100%"
    />
  );
};

export default AboutMe;

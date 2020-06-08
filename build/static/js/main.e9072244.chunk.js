(this["webpackJsonpportfolio-page"]=this["webpackJsonpportfolio-page"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(1),r=a.n(o),i=a(151),l=a(71),c=a(50);t.default=function(){var e=Object(o.useState)("home"),t=Object(n.a)(e,2),a=t[0],s=t[1],m=function(e,t){var a=t.name;s(a)},d=window.location.pathname;return Object(o.useEffect)((function(){return"/about"===d?s("about"):"/"===d?s("home"):"/contact"===d?s("contact"):"/portfolio"===d?s("portfolio"):void 0}),[d]),r.a.createElement(i.a,{inverted:!0,className:"navbar"},r.a.createElement(l.a,{inverted:!0,pointing:!0,secondary:!0},r.a.createElement(c.b,{to:"/"},"  ",r.a.createElement(l.a.Item,{name:"home",active:"home"===a,onClick:m})),r.a.createElement(c.b,{to:"/about"}," ",r.a.createElement(l.a.Item,{name:"about",active:"about"===a,onClick:m})),r.a.createElement(c.b,{to:"/portfolio"},"  ",r.a.createElement(l.a.Item,{name:"portfolio",active:"portfolio"===a,onClick:m})),r.a.createElement(c.b,{to:"/contact"}," ",r.a.createElement(l.a.Item,{name:"contact",active:"contact"===a,onClick:m}))))}},101:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(1),r=a.n(o),i=a(61),l=a(150),c=a(71),s=a(428),m=a(23),d=a(41),h={0:"<h1>The Project</h1><p> Form validation built from scratch by React. There are bunch of libraries that provides concrete solutions when it comes to validate the form. I wanted to create my very own form validation that I could later on implement in other projects if I've ever need to. After successful creation, success message will be displayed to user.</p><h1>Challenges </h1><p>In this project I've decided to display only one error message instead of display all of the errors. This was done by several if conditions. Regex is the main helper to check for matched results. If user wants to see the password has been typed, they can simply click on the icon and the password will be visible. </p>",1:"<h1>The Project</h1><p> This is the React version of the previously made project. I've been working on Github API for a while before I get to start with React. I've created several projects where I used fetch-post requests to create repositories and display user infos by using their API. In this project I wanted to implement same idea by using React which was a great exercise for myself.</p><p> Project consists of 5 components and app.js file. Basically on the home page there is a input field for user to search for Github usernames and also a navbar. In the navbar user can click on several programming languages and depending on the language most popular repositories of that language will be displayed.</p><p> If the search is done user is redirected to another page where information about searched user is displayed. Along with personal information detailed repository information are displayed too. On the column clicks I've made it possible to do sorting by the column. Assuming that description column is clicked, whole table will be sorted by description either ascending or descending depending on the click.</p><h1> Challenges</h1><p>To form up main structure was not really difficult for me. I'm used to play with API's and thus don't have that much trouble with it. But to handle bad requests was the tricky part. For example imagine a scenario where user types a valid username and has been directed to repository information page, if the second search is invalid than component would crash. I had to find a way to handle with these sort of small problems. As one can imagine those small ones could cause really big troubles. That's why I've tried my best to handle bad requests.</p>",2:"<h1>The Project</h1><p>This project has been the introduction to react-router to me. I've learned the basics of the router and how to use it in the project. Basically, the project consists of several routes which user can decide to scroll. There is two buttons one for the menu and the other one to always direct page to home page. On click of menu button, modal window with several route options will be opened and then user can navigate through the pages.</p><p>I have used react-semantic-ui for the styles. As the content didn't really matter in this project, I've faked react-semantic-ui's page sections which made it easy for me to have a fancy styles without too much work.</p><h1>Challenges</h1><p>This was a simple project and didn't really made any trouble to me. Learning fundamentals of react-router-dom is the essential skills that I've gained along this project.</p>",3:"<h1>The Project</h1> <p>This is the re-making of same project that has previously done by using Javascript by me. This time I switched the language to React to challenge myself. As I already knew a way to do exactly same thing in Javascript it was particularly challenging to step out of my comfort zone and use another language for the same purpose.</p><p> Main aim here was to generate random colors on each click of button. And I thought of a way to store colors in array and then display it on DOM as I wanted to display all the colors, not only a single one. So I stored the colors in array and removed them from there if user clicks the delete button</p><h1>Challenges</h1><p>It needs a specific logic to create a random color by using hex codes. I've invested some time on finding solution on that. Not so later I found the way of handling this specific problem. This struggle helped me quite a lot to understand the logic of HTML color codes and how they work.</p>",4:"<h1>The Project</h1><p>Single page React application to create a password generator. I personally like this project a lot because of the great performance of the UI experience. I've used materialize.css in this project and they have very large api where developers can choose their styles from.</p><p>One of the main things I liked most was the range component. I've attached a listener to range component so whenever user drags the range password length will be changed accordingly. You could also create very strong password by including mix case or special characters which are completely optional for users. If user would check either of the boxes, the choice will be applied to newly generated password and will immediately check out to new one.<h1>Challenges</h1><p>At the beginning I had a though time to decide how to solve this problem. But then came up with an idea to create strings for each of the option I would like to implement and then add them dynamically to the result. I was also unsure between using Regex or writing the strings on my own then I ended up creating on my own. I finished the project in almost an hour and wanted to add more features to it. Adding a range button and allowing user to create passwords by the length of range came to my mind. I've made my research and I was able to find a range component provided my Materialize.css which I implemented in this project. I couldn't get the value of range button with props, so I have used pure Javascript features to do so.</p>",5:"<h1>The Project</h1><p>React was a main framework that has been used to build user interface in this project. React-router has provided me to generate new url paths to display each product and also the navigation pages. Data is provided from separate json file and then rendered accordingly. On home page you can see first 4 highest priced products. On click of each item you will be directed to corresponding page of that individual product.</p><p>On Products page you can see whole list of products. There are buttons which enables user to sort the list of products by their price. There is also input field which provides a functionality of filtering products for user. You can simply type some keywords and then see if there are matching results from our product list.</p><h1>Challenges</h1><p> In this project I've mastered my skills on react-router. At the beginning it was a little bit tricky to generate specific url for each product but later on I figured out my own way and now its working perfectly fine. I also wanted to have next and previous buttons so user can navigate through products once they are in specific product page. To do so I came up with idea of using indexes of the products and that went perfectly well.</p>",6:"<h1>The Project</h1><p> This is the project which helped me to master my skills on React. I've faked a company and created a webpage about the team members. There is a json file with a fake dummy data for each person. Simply, every person in the team represented by a card with a possibility to reach their contact data directly from the links on the card. If user wants to get more data about specific member, by clicking on the card, modal window about that specific member will be displayed. Then user can access to more information about the member.</p> <p> I've challenged myself more by dedicating specific theme for each department and then to change the theme whenever user is on modal window. So the theme of the modal window will be changing dynamically according to the department of that team member belongs to. There is also two buttons allows user to scroll through team members back and forth. Once user is on the last team member, buttons will be disabled. At last, user can either click on close text to close the modal window or simply by clicking outside of the modal.</p><h1> Challenges </h1><p>I could use a library to create a modal with already defined css but I wanted to create it on my own. This took my time a bit but also helped me to improve myself on React. Thanks to that I discovered refs and got familiar with it. To have a functionality to let user go back and forth was also challenging. Then I came up with an idea to check for the index of clicked item and then change it accordingly.</p><p>All in all, I've learnt a lot from this exercise and developed my skills on React.</p>",7:"<h1>The Project </h1><p> This project has been created by using React along with Redux. Pretending that this is a e-commerce site, on landing page, there is dummy data fetched from JSON file displayed as blog posts. User is directed to specific page of the post on click of each item. Inside of details page dummy data displayed again. There is also a comment section where user can type in a name and the comment which will be added to page if submitted. Of course, user can delete the comments too.</p><p> After submit of a comment, if user goes back to homepage by clicking the icon on navigation bar, quantity of comments can be seen below specific blog details.</p><h2>Challenges </h2><p> Even though I could easily achieve the same result with React state too, I wanted to master my skills in Redux. This was already challenging to get out of my comfort zone and do something different. But I've managed to do it without too much of struggle thanks to my skills in React which helped me quite a lot along the way.</p><p> My main struggle was about how to communicate with reducer. To know which properties to spread was challenging until I figured out my own way. Another challenge was to delete the comments. It wasn't hard at all to add comments, but to delete them I had to find my way through spreading properties which was tricky.</p><p> All in all, I have learned a lot in this project. Mainly how to use Redux store and the communication among reducer and the store. Apart from that I've developed the habit of using Redux dev tools which made my life easier as well.</p>",8:"<h1>The Project</h1><p>Simple weather app made by using React. As it is originally designed for mobile devices, its better to resize your window to have better UI experience. Basically, there is a single input field and as user types a city name, weather forecast of that place in that specific date will be fetched and displayed to user. I've decided to not overload the screen with too much data, that's why only the basic information about the forecast will be visible.</p><p>I've also implemented dynamically changing background. Depending on the weather, if its cold or warm or even cloudy, background image will be changed to something represents that weather.</p><h1>Challenges</h1><p>I didn't had a struggle in this project as this was a single page, basic structured application. I particularly liked the idea of changing the background image according to weather to have some dynamism in the app.</p>"};a(109),t.default=function(e){var t=Object(o.useState)(!0),a=Object(n.a)(t,2),u=a[0],p=a[1],g=Object(o.useState)(e.index),f=Object(n.a)(g,2),b=f[0],y=f[1];return e.parentCallback(u),r.a.createElement(i.a,{textAlign:"center"},r.a.createElement(l.a,{open:u,onClose:function(){p(!1)}},r.a.createElement(c.a,null,r.a.createElement(c.a.Item,null,r.a.createElement(s.a,{animated:!0,basic:!0,onClick:function(){return y(b-1)},disabled:b<=0},r.a.createElement(s.a.Content,{visible:!0},"Previous"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(m.a,{name:"arrow left"})))),r.a.createElement(c.a.Item,{position:"right"},r.a.createElement(s.a,{animated:!0,basic:!0,onClick:function(){return y(b+1)},disabled:b>=8},r.a.createElement(s.a.Content,{visible:!0},"Next"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(m.a,{name:"arrow right"}))))),r.a.createElement(l.a.Header,null,d[b].name),r.a.createElement(l.a.Content,{scrolling:!0},r.a.createElement(l.a.Description,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:h[b]}}))),r.a.createElement(l.a.Actions,null,r.a.createElement(s.a,{animated:!0,basic:!0,compact:!0,className:"modal-btn",floated:"left",href:d[b].html_url,target:"_blank"},r.a.createElement(s.a.Content,{visible:!0},"Check the code "),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(m.a,{name:"chevron left"}))),r.a.createElement(s.a,{animated:!0,basic:!0,compact:!0,className:"modal-btn",floated:"right",href:d[b].homepage,target:"_blank"},r.a.createElement(s.a.Content,{visible:!0},"Go to live version "),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(m.a,{name:"chevron right"}))))))}},109:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t),a.d(t,"images",(function(){return n}));var n={0:"./FormValidation.png",1:"./GithubUserFinder.png",2:"./ReactRouter.png",3:"./ColorGenerator.png",4:"./PasswordGenerator.png",5:"./ProductList.png",6:"./Modal.png",7:"./BlogComments.png",8:"./WeatherApp.png"}},243:function(e,t,a){e.exports=a(426)},248:function(e,t,a){},41:function(e){e.exports=JSON.parse('[{"id":261168136,"name":"Form Validation","html_url":"https://github.com/eminaydin/Form-validation","description":"React form validation","created_at":"2020-05-04T12:22:52Z","homepage":"https://react-form-validate.netlify.app/"},{"id":260023771,"name":"Github User Finder","html_url":"https://github.com/eminaydin/github-user-finder","description":"Github user finder app created by React","created_at":"2020-04-29T19:32:09Z","homepage":"https://react-github-userfinder.netlify.app/"},{"id":262181582,"name":"React Router","html_url":"https://github.com/eminaydin/react-router","description":"React router project","created_at":"2020-05-07T23:40:50Z","homepage":"https://reactrouterapp.netlify.app/"},{"id":261169427,"name":"React Color Generator","html_url":"https://github.com/eminaydin/React-colorGenerator","description":"Simple random color generated created by using React","created_at":"2020-05-04T12:28:49Z","homepage":"https://react-color-generator.netlify.app/"},{"id":260885623,"name":"React Password Generator","html_url":"https://github.com/eminaydin/React-Password-Generator","description":"Password generator","created_at":"2020-05-03T10:44:24Z","homepage":"https://react-password-generate.netlify.app/ "},{"id":266332768,"name":"React Product List","html_url":"https://github.com/eminaydin/react-productlist","description":"Product list website created by using React","created_at":"2020-05-23T12:32:58Z","homepage":"https://react-product-list.netlify.app/"},{"id":255659095,"name":"Staff List Modal","html_url":"https://github.com/eminaydin/spa-modal","description":"Company staff information page with modal window","created_at":"2020-04-14T16:12:50Z","homepage":"https://spa-modal.now.sh"},{"id":269022909,"name":"Blog Comments","html_url":"https://github.com/eminaydin/spa-store-blog-comments-eminaydin","description":"Blog page with comment section created by using React","created_at":"2020-06-03T07:44:22Z","homepage":"https://react-blog-store.netlify.app/"},{"id":258657256,"name":"Weather App","html_url":"https://github.com/eminaydin/Weather-App","description":"Weather app for mobile devices.","created_at":"2020-04-25T00:53:32Z","homepage":"https://eminaydin.github.io/Weather-App/"}]')},414:function(e,t,a){var n={"./About":94,"./About.js":94,"./BlogComments.png":415,"./ColorGenerator.png":416,"./Contact":97,"./Contact.js":97,"./FormValidation.png":417,"./GithubUserFinder.png":418,"./Home":93,"./Home.js":93,"./Images":137,"./Images.js":137,"./Message":99,"./Message.js":99,"./Modal.png":419,"./Navbar":100,"./Navbar.js":100,"./PasswordGenerator.png":421,"./PortfolioCards":98,"./PortfolioCards.js":98,"./PortfolioModal":101,"./PortfolioModal.js":101,"./ProductList.png":422,"./ReactRouter.png":423,"./UserDescriber.png":424,"./WeatherApp.png":425};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=414},415:function(e,t,a){e.exports=a.p+"static/media/BlogComments.226fc6a8.png"},416:function(e,t,a){e.exports=a.p+"static/media/ColorGenerator.9cc09ca7.png"},417:function(e,t,a){e.exports=a.p+"static/media/FormValidation.809a841c.png"},418:function(e,t,a){e.exports=a.p+"static/media/GithubUserFinder.fade7538.png"},419:function(e,t,a){e.exports=a.p+"static/media/Modal.1cdf48ca.png"},421:function(e,t,a){e.exports=a.p+"static/media/PasswordGenerator.5f54bd72.png"},422:function(e,t,a){e.exports=a.p+"static/media/ProductList.d2ae53f9.png"},423:function(e,t,a){e.exports=a.p+"static/media/ReactRouter.4ef00158.png"},424:function(e,t,a){e.exports=a.p+"static/media/UserDescriber.ea8f0983.png"},425:function(e,t,a){e.exports=a.p+"static/media/WeatherApp.a10e45ef.png"},426:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(49),i=a.n(r),l=(a(248),a(249),a(109),a(50)),c=a(16),s=a(93),m=a(94),d=a(97),h=(a(340),a(98)),u=a(100),p=a(24),g=function(){var e={initial:{opacity:0},in:{opacity:1},out:{opacity:0}};return o.a.createElement(l.a,null,o.a.createElement(u.default,null),o.a.createElement(p.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",render:function(){return o.a.createElement(s.default,{animate:e})}}),o.a.createElement(c.a,{path:"/about",render:function(){return o.a.createElement(m.default,{animate:e})}}),o.a.createElement(c.a,{path:"/contact",render:function(){return o.a.createElement(d.default,{animate:e})}}),o.a.createElement(c.a,{path:"/portfolio",render:function(){return o.a.createElement(h.default,{animate:e})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(141),i=a.n(r),l=(a(250),a(24));t.default=function(e){return console.log(e),o.a.createElement(l.b.div,{className:"homeWrapper",initial:"initial",animate:"in",exit:"out",variants:e.animate},o.a.createElement(i.a,{cursor:!0,startDelay:2e3},o.a.createElement("span",null,"Hello, my name is Emin Ayd\u0131n. I'm a frontend devel"),o.a.createElement(i.a.Backspace,{count:14,delay:500}),o.a.createElement("span",null,"cat lover and frontend developer."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null,"Jump to portfolio page to see my projects."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null,"Or drop me a message."),o.a.createElement("br",null),o.a.createElement("br",null)))}},94:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(61),i=a(149),l=a(62),c=a(23),s=a(151),m=a(19),d=a(144),h=a(145),u=a(34),p=a(24);t.default=function(e){return o.a.createElement(p.b.div,{className:"aboutWrapper",initial:"initial",animate:"in",exit:"out",transition:{duration:2},variants:e.animate},o.a.createElement(r.a,{textAlign:"center"},o.a.createElement(i.a,{horizontal:!0},o.a.createElement(l.a,{as:"h4",inverted:!0},o.a.createElement(c.a,{name:"tag"}),"About me")),o.a.createElement(l.a,{as:"h2",textAlign:"center",style:{color:"#cacaca",lineHeight:"2"}},"I'm Berlin based Frontend developer. Relocating to Berlin was a major step to have an opportunity to satisfy my curiosity in web development. For almost one year now, I have been trained according to MERN-stack in",o.a.createElement("a",{href:"https://digitalcareerinstitute.org/",target:"_blank",rel:"noopener noreferrer"}," DCI "),"  where I've  also witnessed the joy of creating applications along with pursuing projects on my own. As I'm coming to the end of my studies, I'm not only excited but ready to contribute to a company with my skills while benefiting from their experience."),o.a.createElement(i.a,{horizontal:!0},o.a.createElement(l.a,{as:"h4",inverted:!0},o.a.createElement(c.a,{name:"bar chart"}),"Tech-Stack")),o.a.createElement(s.a,{inverted:!0,textAlign:"center"},o.a.createElement(r.a,null,o.a.createElement(m.a.Group,{size:"tiny"},o.a.createElement(m.a,null,o.a.createElement(d.b,null),o.a.createElement("span",null,"Html")),o.a.createElement(m.a,null,o.a.createElement(u.b,null),o.a.createElement("span",null,"CSS")),o.a.createElement(m.a,null,o.a.createElement(u.i,null),o.a.createElement("span",null,"SASS")),o.a.createElement(m.a,null,o.a.createElement(h.a,null),o.a.createElement("span",null,"Less.css")," "),o.a.createElement(m.a,null,o.a.createElement(u.e,null)," ",o.a.createElement("span",null,"Materialize.css")),o.a.createElement(m.a,null,o.a.createElement(u.a,null),o.a.createElement("span",null,"Bootstrap")))),o.a.createElement(r.a,{textAlign:"center"},o.a.createElement(m.a.Group,{size:"tiny",verticalAlign:"middle",fluid:!0},o.a.createElement(m.a,null,o.a.createElement(u.h,null)," ",o.a.createElement("span",null,"React")),o.a.createElement(m.a,null,o.a.createElement(u.c,null),o.a.createElement("span",null,"Javascript")),o.a.createElement(m.a,null,o.a.createElement(u.d,null),o.a.createElement("span",null,"Jquery")),o.a.createElement(m.a,null," ",o.a.createElement(h.b,null)," ",o.a.createElement("span",null,"Node.Js")),o.a.createElement(m.a,null,o.a.createElement(u.f,null),o.a.createElement("span",null,"MongoDB")),o.a.createElement(m.a,null,o.a.createElement(d.a,null),o.a.createElement("span",null,"Github")),o.a.createElement(m.a,null,o.a.createElement(u.g,null),o.a.createElement("span",null,"Npm")))))))}},97:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(61),i=a(151),l=a(23),c=a(62),s=(a(109),a(24));t.default=function(e){return console.log(e),o.a.createElement(s.b.div,{initial:"initial",animate:"in",exit:"out",transition:{duration:2},variants:e.animate},o.a.createElement(r.a,{className:"contactWrapper"},o.a.createElement(r.a,{textAlign:"center",className:"contactInfo"},o.a.createElement(s.b.div,null,o.a.createElement("h1",{className:"contactHeader"}," Contact me"),o.a.createElement("h1",{className:"mailAdress"},"You can contact me directly at eminaydin93@gmx.de"))),o.a.createElement(i.a,{inverted:!0,textAlign:"center",className:"socialIcons"},o.a.createElement("a",{href:"mailto:eminaydin93@gmx.de",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(l.a,{name:"mail",size:"huge",as:"i"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/emin-aydin/",target:"_blank",rel:"noopener noreferrer"}," ",o.a.createElement(l.a,{name:"linkedin",size:"huge"})),o.a.createElement("a",{href:"https://github.com/eminaydin",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(l.a,{name:"github",size:"huge"})),o.a.createElement(c.a,{className:"author"},"Copyright Emin Ayd\u0131n 2020"))))}},98:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(1),r=a.n(o),i=a(61),l=a(149),c=a(62),s=a(23),m=a(52),d=a(19),h=a(41),u=a(101),p=(a(137),a(231)),g=a.n(p),f=a(232),b=a(99),y=a(24);t.default=function(e){var t=Object(o.useState)(1),p=Object(n.a)(t,2),w=p[0],E=p[1],v=Object(o.useState)(!1),I=Object(n.a)(v,2),k=I[0],j=I[1],x=Object(o.useState)(3),C=Object(n.a)(x,2),T=C[0],R=C[1],A=Object(o.useState)(!1),O=Object(n.a)(A,2),P=O[0],_=O[1],S=Object(f.a)();return Object(o.useEffect)((function(){return S.width<=414?R(1):S.width<=768?R(2):S.width>768?R(3):void 0}),[S]),setTimeout((function(){_(!0)}),5e3),r.a.createElement(y.b.div,{initial:"initial",animate:"in",exit:"out",variants:e.animate},r.a.createElement(i.a,{textAlign:"center"},P&&r.a.createElement(b.default,null),r.a.createElement(l.a,{horizontal:!0},r.a.createElement(c.a,{as:"h4",inverted:!0},r.a.createElement(s.a,{name:"code"}),"Some of my work")),r.a.createElement(m.a.Group,{itemsPerRow:T,centered:!0},h.map((function(e){var t=e.created_at,n=h.indexOf(e);return r.a.createElement(m.a,{raised:!0},r.a.createElement(d.a,{src:a(414)("".concat(images[n])),wrapped:!0,size:"large",ui:!1,onClick:function(){!function(e){E(e),j(!k)}(h.indexOf(e))}}),r.a.createElement(m.a.Content,null,r.a.createElement(m.a.Header,null),r.a.createElement(m.a.Meta,null,r.a.createElement("span",{className:"date"},e.name)),r.a.createElement(m.a.Description,null,e.description)),r.a.createElement(m.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(s.a,{name:"calendar alternate outline"}),"Created: ",r.a.createElement(g.a,{date:t,fromNow:!0}))))})),k?r.a.createElement(u.default,{index:w,parentCallback:function(e){j(e)}}):null)))}},99:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(1),r=a.n(o),i=a(150),l=a(62),c=a(428),s=a(23),m=a(24);t.default=function(){var e=Object(o.useState)(!0),t=Object(n.a)(e,2),a=t[0],d=t[1];return r.a.createElement(i.a,{open:a,basic:!0,size:"small"},r.a.createElement(m.b.div,{initial:"initial",animate:"in",exit:"out",variants:{initial:{x:100},in:{x:0},out:{x:100}}},r.a.createElement(l.a,{icon:"hand point down outline",content:"Sorry to interrupt but since you are already here...",inverted:!0}),r.a.createElement(i.a.Content,null,r.a.createElement("h3",{style:{lineHeight:"1.7"}},"You may want to check out my contribution to React.js. As I'm truly a huge fan of React, I'm very happy to had a chance on helping this community to grow even further. I'm one of the translators of React.js official website in Turkish! You can check the github ",r.a.createElement("a",{href:"https://github.com/reactjs/tr.reactjs.org/issues/1",target:"_blank",rel:"noopener noreferrer",style:{color:"#d03f3f"}}," repository")," or the ",r.a.createElement("a",{href:"https://tr.reactjs.org/docs/release-channels.html",target:"_blank",rel:"noopener noreferrer",style:{color:"grey"}}," page ")," I've translated.")),r.a.createElement(i.a.Actions,null,r.a.createElement(c.a,{color:"green",onClick:function(){d(!1)},inverted:!0,floated:"right",style:{margin:"30px"}},r.a.createElement(s.a,{name:"checkmark"})," Got it"))))}}},[[243,1,2]]]);
//# sourceMappingURL=main.e9072244.chunk.js.map
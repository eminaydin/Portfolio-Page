import React from 'react';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css"


const Home = (props) => {
    console.log(props);

    return (


        <div class="info">
            <Typist cursor><span>Hello, my name is Emin Aydın.  I'm a full-stack developer who likes cats.</span><br /><br />
                <span>Check out my latest works at my portfolio page.</span><br /><br />
                <span>Feel free to contact me through eminaydin93@yahoo.com or from my contact page.</span><br /><br />
            </Typist >

        </div>

    );
}

export default Home;


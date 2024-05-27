import React from 'react';
import Container from '@components/Container';

const cardsHoverEffect = () => {
   return (
        <>
            <section id="layout">
                <header>
                    Header
                </header>
                <nav>
                    Navigation
                </nav>
                <main>
                    Main
                </main>
                <footer>
                    Footer
                </footer>
            </section>
            <style jsx>
                {`
#layout {
    display: grid;
    height: 100vh;
    grid-template-areas: "header header header" "navigation main main" "navigation footer footer";
    grid-template-rows: 60px 1fr 60px;
    grid-template-columns: 150px 1fr;
}

#layout > header {
    display: grid;
    place-items: center;
    grid-area: header;
    background-color: #FF9950;
}


#layout > nav {
    display: grid;
    place-items: center;
    grid-area: navigation;
    background-color: #AAEC8A;
}

#layout > main {
    display: grid;
    place-items: center;
    grid-area: main;
    background-color: #B881FF;
}

#layout > footer {
    display: grid;
    place-items: center;
    grid-area: footer;
    background-color: #FF9950;
}

@media (max-width: 600px) {
    #layout {
        grid-template-areas: "header" "navigation" "main" "footer";
        grid-template-rows: 60px 40px 1fr 60px;
        grid-template-columns: 1fr;
    }
}

                `}
            </style>
        </>
   ) 

}

export default cardsHoverEffect;
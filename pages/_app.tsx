import "../styles/globals.css";
import type {AppProps} from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {config} from "@fortawesome/fontawesome-svg-core";

import {ThemeProvider} from "styled-components";
import {theme} from "../src/styles/Theme.styled";
import {GlobalStyle} from "../src/styles/Global.styled";


config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
                <Component {...pageProps} />;
        </ThemeProvider>
    )
}

export default MyApp;

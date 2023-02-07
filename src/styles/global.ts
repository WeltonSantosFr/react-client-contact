import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    overflow: scroll;
    
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
:root {
    font-family: 'Inter';
    --font-size-title1: 16px;
    --font-weight-title1: bold;
    --font-size-title2: 16px;
    --font-weight-title2: bold;
    
    --font-size-title3: 16px;
    --font-weight-title3: bold;
    
    --font-size-headline: 12px;
    --font-weight-headline: normal;
    
    --font-size-headlineBold: 12px;
    --font-weight-headlineBold: bold;
    
    --font-size-headlineItalic: 12px;
    --font-weight-headlineItalic: bold;
    --font-color-white: #F8F9FA;
    --font-color-grey: #868E96;
    --font-color-blue: #03254E;
    --color-primary: #03254E;
    --color-primary-focus: #011C27;
    --color-primary-negative: #90C2E7;
    --color-grey4: #121214;
    --color-grey3: #212529;
    --color-grey2: #343B41;
    --color-grey1: #868E96;
    --color-grey0: #F8F9FA;
    --color-success: #00A9A5;
    --color-failure: #622D27;
}
`;

export default GlobalStyle;

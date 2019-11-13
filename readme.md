# Web Project Starter


Web Project Starter is a template for creating any web project. It has all the basics for getting any site up and running.

Not meant to be a "do-it-this-way" or anything of that sort. I've just built myself a nice starter so I don't spend so much time getting things going when starting a new project.

## Installation

```git
git clone https://github.com/codywilliamson/web-project-starter.git
```
or

click the "use this template" button in the repo.

## Utilities

Includes a basic CSS reset that covers only the necessities:
```css
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
html, body {
  height: 100%;
  width: 100;
}
a {
  text-decoration: none;
  color: inherit;
}
```
Some utility classes such as:
```css
.flex, .flex-center, etc...
```
A couple of SASS mixins:
```scss
// box-shadow
@mixin box-shadow($top, $left, $blur, $spread, $color) {
    -webkit-box-shadow: $top $left $blur $spread $color;
    -moz-box-shadow: $top $left $blur $spread $color;
    box-shadow: $top $left $blur $spread $color;
}

// border-radius
@mixin border-radius($radius: .5rem) {
    -webkit-border-radius: $radius; 
  -moz-border-radius: $radius;
  border-radius: $radius;
}
```
## File Structure
This file structure isn't meant to be restrictive in any way. This is how I usually start my projects, but they will evolve as they grow. Use this as a foundation to get started.
```bash
web-project-starter
 ┣ src
 ┃ ┣ js
 ┃ ┃ ┗ main.js
 ┃ ┣ sass
 ┃ ┃ ┣ partials
 ┃ ┃ ┃ ┗ _utils.scss
 ┃ ┃ ┗ style.scss
 ┃ ┣ style.css
 ┃ ┗ style.css.map
 ┣ .gitignore
 ┣ index.html
 ┗ readme.md
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
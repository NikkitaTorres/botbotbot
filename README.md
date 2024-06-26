# botbotbot
by [Nikkita Torres](nikkitatorres@yahoo.com).

### Description
This is a project created as a test for a future capstone project. Currently, the project is able to open a chromium browser, and navigates to "amazon.com". The project should be able to inspect elements and return the title, price, and image URL of the product card in the terminal.

### Setup/Installation Requirements

1. Clone this project [here](https://github.com/NikkitaTorres/botbotbot.git)
2. Run the command "npm install" to download dependencies for the project. 
3. Run the command "npm i puppeteer --save" to install puppeteer. *Be warned* Puppeteer installs and runs on Chromium, an open-source browser project.
4. In the terminal, run the command "node \index.js" to launch the program and have it open the url entered in the index.js file. Program will automatically collect the titles, price and image URL's of all items listed in the electronics and return them in the terminal.

### Built With

* [Puppeteer](https://pptr.dev/)
* Javascript
* Node.js

### Known Issues/Bugs

First result in terminal is displaying as "Null Null Null".
### License

MIT License

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
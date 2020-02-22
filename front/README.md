# CheeseTerminal 🧀 	
## CheeseTerminal is a web-based Terminal-like component written in TypeScript.

![alt text](https://raw.githubusercontent.com/alaabenfatma/CheeseTerminal/master/docs/echo.png?token=ACE34TAOQXVOVW5G2TL4YP26COVHY)

### Installation & Usage 📚 
CheeseTerminal has been written in TypeScript. Hence, you have to compile the TS code into JS.

1. Add the TypeScript & CSS files to your project's directory
2. Compile the __cheeseterminal.ts__ into __cheeseterminal.js__ using the following command:

```tsc cheeseterminal.ts```

3. Add these two lines of code to your HTML file:
```
<script src="{path->cheeseterminal.js}"></script>
<link  rel="stylesheet" type="text/css" href="{path->cheeseterminal.css}"/>
```
  
4. Add a container to the body of the HTML in which the JS script will generate the terminal. The script will actually look for a specific div that is called **CheeseTerminal**

```<div id="CheeseTerminal" ></div>```

### Limitations 📉

The terminal is still in its first stages of development; that said, it does not support a lot of features, such as interactive behaviours, etc.

### DEMO 🕹️ 

_The screenshot included above is an implementation of an extended version of the Terminal._
basic demo : [https://cheeseterminal.now.sh/](https://cheeseterminal.now.sh/)

## Contributing 💡

Pull requests are welcome!

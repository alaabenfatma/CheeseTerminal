/*
    MIT License

Copyright (c) 2019 Alaa Ben Fatma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
let path: String;
let number_of_cmds: number = 0;
let username: String = "user" + random(1, 999);
console.log("Hi, here is your username@hotsname = "+username+"@cheese")

let table: HTMLTableElement;

function random(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
window.onload = function () {
    CheeseTerminal = new Terminal();
}

class Command {

    input_cmd: HTMLInputElement;

    getElement() {
        return this.input_cmd;
    }
    exec() {
        let reflected_msg: string = this.input_cmd.value;
        let output: HTMLParagraphElement = document.createElement('p');
        output.classList.add("consolas");
        output.innerText = reflected_msg;
        document.body.appendChild(output);
        this.input_cmd.disabled = true;

    }
    constructor() {
        this.input_cmd = document.createElement('input');
        this.input_cmd.classList.add('terminal_input');
        this.input_cmd.id = 'cmd' + number_of_cmds.toString();
        this.input_cmd.type = "text";
        this.input_cmd.addEventListener('keypress', (e: KeyboardEvent) => {
            if (e.keyCode == 13) {
                this.exec();
                CheeseTerminal = new Terminal();
                 }

        })
        
    }

}
class Terminal {
    constructor() {
        number_of_cmds++;
        table = document.createElement('table');
        table.style.cssText = 'color: aliceblue; width:fit-contents;';
        table.cellSpacing = "0";
        table.setAttribute("id", "terminal_line" + number_of_cmds.toString());
        document.body.appendChild(table);
        var row = table.insertRow(0);
        var user_host_cell = row.insertCell(row.cells.length);
        let user_host = '<td >user@cheese:</td>';
        user_host_cell.innerHTML = user_host;
        user_host_cell.classList.add("td_user_host_dollar")

        var path_cell = row.insertCell(row.cells.length);
        let path_html = '<td>~</td>';
        path_cell.innerHTML = path_html;
        path_cell.classList.add("td_path")

        var dollar_cell = row.insertCell(row.cells.length);
        let dollar_host = '<td>🧀 </td>';
        dollar_cell.innerHTML = dollar_host;

        var cmd_cell = row.insertCell(row.cells.length);
        let cmd_host = '<td style="width: fit-contents;"></td>';
        cmd_cell.width = "fit-contents";
        cmd_cell.innerHTML = cmd_host;
        var cmd = new Command().getElement();
        cmd_cell.appendChild(cmd);
        (document.getElementById('cmd' + (number_of_cmds).toString()) as HTMLInputElement).focus();
           

    }
}

//Cheese Terminal 
let CheeseTerminal: Terminal;


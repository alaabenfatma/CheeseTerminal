
function random(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
let path: String;
let number_of_cmds: number = -1;
let username: String = "user" + random(1, 30);
let table: HTMLTableElement;

class  Command{
   
    input_cmd: HTMLInputElement;
    constructor(){
        this.input_cmd = document.createElement('input');
        this.input_cmd.classList.add('terminal_input');
        this.input_cmd.id='cmd' + number_of_cmds.toString();
        this.input_cmd.type = "text";
        this.input_cmd.autofocus = true;
        this.input_cmd.addEventListener('keypress', (e: KeyboardEvent) =>{
            //You have yout key code here
             if(e.keyCode == 13){
                 CT.insertLine();
             }
        
         })
    }
    
    getElement(){
        return this.input_cmd; 
    }
}
class Terminal {

    constructor() {
        number_of_cmds++;
        table = document.createElement('table');
        table.style.cssText = 'color: aliceblue; width:fit-contents;';
        table.cellSpacing = "0";
        table.setAttribute("id", "Terminal");
        document.body.appendChild(table);
        var row = table.insertRow(number_of_cmds);
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
        cmd_cell.appendChild(new Command().getElement())
    }
    insertLine() {
        number_of_cmds++;
        var row = table.insertRow(number_of_cmds);
        var user_host_cell = row.insertCell(row.cells.length);
        let user_host = '<td>user@cheese:</td>';
        user_host_cell.innerHTML = user_host;
        user_host_cell.classList.add("td_user_host_dollar")

        var path_cell = row.insertCell(row.cells.length);
        let path = '<td>~</td>';
        path_cell.innerHTML = path;
        path_cell.classList.add("td_path")

        var dollar_cell = row.insertCell(row.cells.length);
        let dollar_host = '<td>🧀 </td>';
        dollar_cell.innerHTML = dollar_host;

        var cmd_cell = row.insertCell(row.cells.length);
        let cmd_host = '<td style="width: fit-contents;"></td>';
        cmd_cell.width = "fit-contents";
        cmd_cell.innerHTML = cmd_host;
        cmd_cell.appendChild(new Command().getElement())

    }
}

//Cheese Terminal 
let CT: Terminal;
window.onload = function () {
    CT = new Terminal();
}

function addNewCmd() {
    CT.insertLine();
}
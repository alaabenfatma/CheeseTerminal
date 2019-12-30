let path: String;
let number_of_cmds: number = 0;
let username: String = "user" + random(1, 30);
let table: HTMLTableElement;

function random(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
window.onload = function () {
    CT = new Terminal();
}

class  Command{
   
    input_cmd: HTMLInputElement;

    getElement(){
        return this.input_cmd; 
    }
    exec(){
        let reflected_msg: string = this.input_cmd.value;
        let output: HTMLParagraphElement = document.createElement('p');
        output.classList.add("consolas");
        output.innerText = reflected_msg;
        var row = table.insertRow(1);
        let output_container = row.insertCell(0);
        output_container.innerHTML = '<td ></td>';
        output_container.appendChild(output);
        this.input_cmd.disabled = true;
        
        }
    constructor(){
        this.input_cmd = document.createElement('input');
        this.input_cmd.classList.add('terminal_input');
        this.input_cmd.id='cmd' + number_of_cmds.toString();
        this.input_cmd.type = "text";
        this.input_cmd.autofocus = true;
        this.input_cmd.addEventListener('keypress', (e: KeyboardEvent) =>{
             if(e.keyCode == 13){
                 this.exec();
                 
                 CT = new Terminal();
                 (document.getElementById('cmd' + (number_of_cmds).toString()) as HTMLInputElement).focus();
             }
        
         })
         this.input_cmd.focus();
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
        cmd_cell.appendChild(new Command().getElement())


    }
}

//Cheese Terminal 
let CT: Terminal;


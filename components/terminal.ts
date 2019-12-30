
function random(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
let number_of_cmds: number = -1;
let username: String = "user" + random(1, 30);
let table : HTMLTableElement;
class Terminal {
    

    constructor() {
        number_of_cmds++;
        table =  document.createElement('table');
        table.style.cssText = 'color: aliceblue;';
        table.cellSpacing = "0";
        table.setAttribute("id","Terminal");
        document.body.appendChild(table);
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
        let cmd_host = '<td><input id="cmd'+number_of_cmds.toString()+'" type="text" class="terminal_input" autofocus ></td>';
        cmd_cell.innerHTML = cmd_host;
    }
    insertLine() {
       

    }
}



window.onload = function() {
    new Terminal();
   }
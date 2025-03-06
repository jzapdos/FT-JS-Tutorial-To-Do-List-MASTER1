const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");

const CHECK ="fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo( toDo ,id,done , trash ){

if( trash ){ return;}

const DONE = done ? CHECK : UNCHECK;
const LINE = done ? LINE_THROUGH : "";

    const text = `<li class="item">
                     <i class="fa ${DONE}  complete" job="complete" id="${id}"></i>
                     <p class="text ${LINE}">${toDo}</p>
                     <i class="de fa fa-trash-o" job="delete"></i>
                </li>`;

const position = "beforeend";
list.insertAdjacentHTML(position ,text);
}

const input = document.getElementById("input");

document.addEventListener("keyup",function(event){
            if( event.keyCode == 13){
                const toDo = input.ariaValueMax;
                if(toDo){
                    addToDo(toDo,id, false, false);
                    list.push(
                        {
                            name: toDo,
                            id: id,
                            done: false,
                            trash:false
                        }
                    );
                    input.value = "";
                    id++;
                }
                input.value = "";
            }
    });       

    function completeToDo(element){
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
        LIST[element.id].done = LIST[element.id].done ? false :true 
    }

    function removeToDo(element){
        element.parentNode.removeChild(element.parentNode);
        LIST[element.id].trash = true;
    }
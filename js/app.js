const list = document.getElementById("list");

function addToDo( toDo ){
    const text = <li class="item">
                     <i class="co fa fa-circle-thin" job="complete"></i>
                     <p class="text ">${toDo}</p>
                     <i class="de fa fa-trash-o" job="delete"></i>
                </li>

const position = "beforeend";
list.insertAdjacentHTML(position,text );
}

const input = document.getElementById("input");

document.addEventListener("keyup",function(event){
            if( event.keyCode == 13){
                const toDo = input.ariaValueMax;
                if(toDo){
                    addToDo(toDo);
                }
                input.value = "";
            }
    });
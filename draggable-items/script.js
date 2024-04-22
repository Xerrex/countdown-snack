const draggables =  document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');


// Draggable
draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', ()=>{
        draggable.classList.remove('dragging');
    });
});


//Container
containers.forEach((container) => {
    container.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const afterElem  =  getElementAfterDropPos(container, e.clientY)
        const beingDragged = document.querySelector('.dragging');

        if(afterElem == null){
            container.appendChild(beingDragged);
        }else{
            container.insertBefore(beingDragged, afterElem)
        }
    })
});


//oder of elements
const getElementAfterDropPos = (container, mouseY)=>{
    const containerElems = container.querySelectorAll('.draggable:not(.dragging)');
    const contElemsArray = [...containerElems];

    return contElemsArray.reduce((closet, child)=>{
        const box = child.getBoundingClientRect();
        const offset = mouseY - box.top - box.height / 2;

        if(offset < 0 && offset > closet.offset){
            //we are on top of element
            return {offset: offset, element:child}
        } else{
            return closet
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
}

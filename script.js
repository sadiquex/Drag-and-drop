const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

function dragStart() {
    this.className += ' hold';
    // a function to hide picture after it is being dragged
    setTimeout(() =>  this.className = '', 0)
}

function dragEnd() {
    this.className = 'fill'

}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'

}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop(e) {
    e.preventDefault();
    this.className = 'empty'
    // add the fill class to box in which it is dropped on
    this.append(fill)

}




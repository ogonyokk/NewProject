function changeShape() {
    var shapeSelector = document.getElementById('shapeSelector');
    var shape = document.getElementById('shape');

    switch (shapeSelector.value) {
        case 'square':
            shape.style.borderRadius = '0';
            shape.classList.remove('triangle');
            break;
        case 'circle':
            shape.style.borderRadius = '50%';
            shape.classList.remove('triangle');
            break;
        case 'triangle':
            shape.style.borderRadius = '0';
            shape.classList.add('triangle');
            break;
        default:
            break;
    }
}

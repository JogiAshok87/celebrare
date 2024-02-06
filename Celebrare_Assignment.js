const textArea = document.getElementById('text-area');
const fontFamily = document.getElementById('font-family');
const fontSize = document.getElementById('font-size');
const fontColor = document.getElementById('font-color');
const backgroundColor = document.getElementById('background-color');
const addTextButton = document.getElementById('add-text-button');
const undoButton = document.getElementById('undo-button');
const redoButton = document.getElementById('redo-button');




addTextButton.addEventListener('click', () => {
    const newText = prompt('Enter new text:');
    textArea.value += newText;

});

undoButton.addEventListener('click', () => {
    textArea.value = textArea.value.slice(0, textArea.value);
});



redoButton.addEventListener('click', () => {
    textArea.value += textArea.value.slice(-1);
});

fontFamily.addEventListener('change', () => {
    textArea.style.fontFamily = fontFamily.value;
});

fontSize.addEventListener('change', () => {
    textArea.style.fontSize = fontSize.value + 'px';
});

fontColor.addEventListener('change', () => {
    textArea.style.color = fontColor.value;
});

backgroundColor.addEventListener('change', () => {
    textArea.style.backgroundColor = backgroundColor.value;
})
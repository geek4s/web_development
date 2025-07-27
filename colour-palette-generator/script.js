function generateColor() {
    const hex= Math.floor(Math.random() * 0xffffff).toString(16);
    return '#' + hex.padStart(6, '0');
}
function generatePalette() {
    const paletteDiv= document.getElementById('palette');
    paletteDiv.innerHTML='';
    for(let i=0; i<5; i++) {
        const color=generateColor();
        const colorBox= document.createElement('div');
        colorBox.className='color-box';
        colorBox.style.backgroundColor=color;
        
        const code=document.createElement('div');
        code.className='color-code';
        code.innerText=color;
        colorBox.appendChild(code);
        paletteDiv.appendChild(colorBox);
        colorBox.addEventListener('click',()=> {
            navigator.clipboard.writeText(color);
            alert(`${color} copied to clipboard!`);
        });
    }
}

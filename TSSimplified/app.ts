const btn: HTMLButtonElement = document.createElement('button')

btn.addEventListener('click', handleClick)

function handleClick(e: MouseEvent): void {
    console.log(e.target)
}

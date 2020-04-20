const f3 = () => console.log(this === window)
undefined
f3()

undefined
document.getElementsByTagName('body')[0].onclick = f3
console.log(this === window)
f3()
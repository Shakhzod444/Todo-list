
let mod = document.querySelector('.modal')
let mod2 = document.querySelector('.modal_bg')
let input = document.querySelector('.input')
let save = document.querySelector('button[data-save]')
let cancel = document.querySelector('.cancel')


let form = document.forms.todo
let container = document.querySelector('.container')
let todos = [
    {
        id: 1,
        task: "Убить кого нибудь ",
        isDone: false,
        time: "10:34"
    },
    {
        id: 2,
        task: "купить луну",
        isDone: false   ,
        time: "09:34"
    },
    {
        id: 3,
        task: "поиграть в csgo",
        isDone: true,
        time: "12:34"
    },
    {
        id: 4,
        task: "xочу спать ",
        isDone: false,
        time: "2:44 am"
    },
    {
        id: 5,
        task: "завтра школа дз не сделал ",
        isDone:false,
        time: "2:56"
    }

]

const reload = (arr) => {
    container.innerHTML = ""

    for (let item of arr) {
        let div = document.createElement('div')
        let topDiv = document.createElement('div')
        let img = document.createElement('img')
        let changeBtn = document.createElement('img')
        let span = document.createElement('span')
        let time = document.createElement('time')
        let ii = document.createElement('div')

        if (item.isDone === true) {
            div.classList.add('done')
        }
        div.classList.add('item')
        topDiv.classList.add('top')

        span.innerHTML = item.task
        time.innerHTML = item.time
        changeBtn.classList.add('changeBtn')
        ii.classList.add('ii')
        img.src = "./assets/icons/Group 14.svg"
        changeBtn.src = "./assets/icons/edit (2).svg"

        ii.append(changeBtn, img)
        topDiv.append(span, ii)
        div.append(topDiv, time)
        container.append(div)

        img.onclick = () => {
            todos = todos.filter(elem => elem.id !== item.id)
            reload(todos)
        }
        span.onclick = () => {
            item.isDone = !item.isDone

            console.log(reload(todos));
        }


        changeBtn.onclick = () => {
            mod.style.display = 'block'
            mod.style.opacity = '0.2'
            mod2.style.display = 'block'
            mod2.style.opacity = '0.2'

            setTimeout(() => {
                mod.style.opacity = '1'
                mod2.style.opacity = '1'
            }, "100")


            
            
            save.onclick = () => {
            item.task = input.value

            console.log(item.task);
            console.log(input.value);
            
                mod2.style.display = 'none',
                    mod.style.display = 'none'

                setTimeout(() => {
                    mod.style.opacity = '0.1'
                    mod2.style.opacity = '0.1'

                }, "100")

                reload(todos)
            }

        }

        


        cancel.onclick = () => {
            mod.style.opacity = '0.1'
            mod2.style.opacity = '0.1'

            setTimeout(() => {
                mod2.style.display = 'none',
                    mod.style.display = 'none'

            }, "100")
        }

    }

}

form.onsubmit = (e) => {
    e.preventDefault()

    let task = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    todos.push(task)




    reload(todos)

}


reload(todos)





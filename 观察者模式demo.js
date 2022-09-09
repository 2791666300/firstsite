
class Studend{
    constructor(name){
        this.name = name
    }

    notive(mes){
        console.log(`我是${this.name},我接收到了消息: ${mes}`)
    }
}

class Teacher{
    constructor(){
        this.observer = []
    }
    addServer(ob){
        this.observer.push(ob)
        return this
    }

    sedMes(msg){
        this.observer.forEach(el => {
            el.notive(msg)
        })
    }


}


const Misli = new Teacher()

const Zhangsan = new Studend('张三')
const Chebo = new Studend('车博')

Misli.addServer(Zhangsan).addServer(Chebo)
Misli.sedMes('交作业了')
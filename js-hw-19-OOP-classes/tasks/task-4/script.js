class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
    }

    init() {
        // метод должен создать тег img
        const imgElement = document.createElement('img')
        // вложить в него src картинки (this.imgUrl)
        imgElement.src = this.imgUrl
        // и записать в this.html
        this.html = imgElement
        // + дергаем render
        this.render()
        // + странице должен залится фон черным
        document.body.style.backgroundColor = 'black'
    }

    render() {
        // метод должен отрисовать изображение (this.html) на странице
        document.body.appendChild(this.html)
        // применить фиксированное позиционирование
        this.html.style.position = 'fixed'
        // использовать this.top и this.left для указания позиции
        this.html.style.top = this.top + 'px'
        this.html.style.left = this.left + 'px'
        // использовать this.width для указания ширины
        this.html.width = this.width
    }

    moveUp() {
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся ВЫШЕ
        // на 20px
        this.top -= 20
        // + дергаем render
        this.render()
    }
    moveDown() {
        // метод должен изменять top нашего объекта так
        // чтобы элемент передвинулся НИЖЕ
        // на 20px
        this.top += 20
        // + дергаем render
        this.render()
    }
    moveLeft() {
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ЛЕВЕЕ
        // на 20px
        this.left -= 20
        // + дергаем render
        this.render()
    }
    moveRight() {
        // метод должен изменять left нашего объекта так
        // чтобы элемент передвинулся ПРАВЕЕ
        // на 20px
        this.left += 20
        // + дергаем render
        this.render()
    }
}

class Circle extends Logo {
    constructor(size, color) {
        super("")
        this.size = size;
        this.color = color;
        this.html = null;
    }

    init() {
        const circle = document.createElement('div')
        circle.style.backgroundColor = this.color
        circle.style.width = this.size + 'px'
        circle.style.height = this.size + 'px'
        circle.style.borderRadius = '50%'
        this.html = circle
        this.render()
    }

    render() {
        super.render()
    }
}

const imgUrl = 'https://static.tildacdn.biz/tild6263-6266-4662-b335-363930323834/LOGO.svg';
const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

const myCircle = new Circle(110, 'yellow')
// запускаем наше микро-приложение

myCircle.init()

mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();





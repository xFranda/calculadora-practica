class Display {
constructor(displayValorAnterior, displayValorActual){
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculadora = new Calculadora();
    this.tipoOperacion = '';
    this.valorActual = '';
    this.valorAnterio = '';
    this.signos = {
        sumar: '+',
        restar: '-',
        dividir: '/',
        multiplicar:'x',
        }
    }
    borrarNumero(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual='';
        this.valorAnterio='';
        this.tipoOperacion='';
        this.imprimirValores();

    }
    agregarNumero(numero){
        if (numero == '.' && this.valorActual.includes('.')) return;
        this.valorActual += numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent =`${this.valorAnterio}${this.signos[this.tipoOperacion] || ''}`;
        

    }
    calcular(){
        const valorAnterio = parseFloat(this.valorAnterio);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterio)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterio, valorActual);
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterio = this.valorActual || this.valorAnterio;
        this.valorActual = '';
        this.imprimirValores();

    }
}
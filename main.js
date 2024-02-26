var enter = document.getElementById('input')
        var button = document.getElementById('btn')
        var clearbtn = document.getElementById('btn-clear')
        button.addEventListener('click', clicar)
        enter.addEventListener("keydown", tecla)
        clearbtn.addEventListener('click', function () {
            var divclear = document.getElementsByClassName('tarefas')[0]
            divclear.innerHTML = ''
        })

        function clicar() {
            var paragrafo, newp, marcador = true
            var txt, valor
            txt = document.getElementById('input')
            valor = txt.value
            paragrafo = document.getElementsByClassName('tarefas')[0] 
            newp = document.createElement('p')
            newp.textContent = `- ${valor}`
            var newp5 = newp
            
            if (valor > "") {
                paragrafo.appendChild(newp5)
                newp5.style.textAlign = "center"
                newp5.style.cursor = "pointer"
            }
            
            newp.addEventListener('click', function marcando() {
                if (marcador) {
                    this.addEventListener("mouseover", function () {
                        newp5.style.color = "#90ee90"
                    })
                    newp5.style.textDecoration = 'line-through'
                    marcador = false
                } else {
                    this.addEventListener("mouseleave", function () {
                        newp5.style.color = ""
                    })
                    newp5.style.textDecoration = ''
                    marcador = true
                }
            })

            newp.addEventListener('dblclick', function remover(){
                paragrafo.removeChild(newp5)
            })

            newp.addEventListener("mouseover", function () {
                newp5.style.color = "red"
            })

            newp.addEventListener("mouseleave", function () {
                newp5.style.color = ""
            })

            var clear = document.getElementById('input')
            clear.value = ""
        }

        
        

        function tecla() {
            if (event.key === "Enter") {
                var paragrafo, newp, marcador = true
                var txt, valor
                txt = document.getElementById('input')
                valor = txt.value
                paragrafo = document.getElementsByClassName('tarefas')[0]
                newp = document.createElement('p')
                newp.textContent = `- ${valor}`
                var newp5 = newp
                if (valor > "") {
                    paragrafo.appendChild(newp5)
                    newp.style.textAlign = "center"
                    newp.style.cursor = "pointer"
                    
                }

                newp.addEventListener('click', function marcando() {
                    
                    if (marcador) {
                        this.addEventListener("mouseover", function () {
                            newp5.style.color = "#90ee90"
                        })
                        newp5.style.textDecoration = 'line-through'
                        marcador = false  
                    } else {
                        this.addEventListener("mouseleave", function () {
                            newp5.style.color = ""
                        })
                        newp5.style.textDecoration = ''
                        marcador = true
                    }
                    
                    newp.addEventListener("dblclick", function remover(){
                        paragrafo.removeChild(newp5)
                    })
                })

                newp.addEventListener("mouseover", function () {
                    newp5.style.color = "red"
                })
    
                newp.addEventListener("mouseleave", function () {
                    newp5.style.color = ""
                })

                var clear = document.getElementById('input')
                clear.value = ""
            }
        }
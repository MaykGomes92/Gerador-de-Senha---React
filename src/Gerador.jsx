import React from 'react'

const Gerador = () => {


    const pegarInp = React.useRef()

    const [check1, setCheck1] = React.useState(false)    
    const [check2, setCheck2] = React.useState(false)    
    const [check3, setCheck3] = React.useState(false)    

    const [input, setInput] = React.useState()
    const [senha, setSenha] = React.useState([])
   
    let letrasMinus = 'abcdefghijklmnopqrstuvwxyz'
    let letrasMaius = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
    let numeros = '1234567890'

    function rand(max){
      return Math.floor(Math.random() * (max - 0) + 0)
    }
   
    let passWord = '';

    function gerarSenha(){
      
      if(input === 0){
        alert('Por favor, digite a quantidade de caracteres para sua senha!')
      }
      
      if(!check1 && !check2 && !check3){
        alert('Por favor, selecione pelo menos 1 opção para sua senha!')
      }
      
        for(let i = 0; i < input; i++){
          check1 && (
            passWord += letrasMaius[rand(letrasMaius.length)]
            )
            check2 && (
              passWord += letrasMinus[rand(letrasMinus.length)]
              )
              check3 && (
                passWord += numeros[rand(numeros.length)]
                )
  
  
          }
          setSenha(passWord.slice(0,input))
          pegarInp.current.focus()
          setInput('')
    }

  return (
    <>
    <main>

    <section>
    <div>
    <span>Letra maiúsculas: </span>
    <input type='checkbox' onChange={(e) => setCheck1(!check1)}/>
    </div>

    <div>
    <span>Letra minúsculas: </span>
    <input type='checkbox' onChange={(e) => setCheck2(!check2)}/>
    </div>   

    <div>
    <span>Números : </span>
    <input type='checkbox' onChange={(e) => setCheck3(!check3)}/>
    </div>
    </section>

    <section className='section2'>
        <input type='number'
        value={input}
        ref={pegarInp}
         onChange={(e) => setInput(e.target.value)}
         placeholder='Quantos caracteres deseja gerar ?'/>
        <button onClick={gerarSenha}>Gerar senha</button>
    </section>

      {senha.length !== 0 && (
        <h2 id='resultado'>{senha}</h2>
      )}
    </main>
    </>
  )
}

export default Gerador
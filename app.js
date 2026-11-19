const btnTheme = document
  .querySelector('.btn-theme')
  .addEventListener('click', () => {
    const html = document.documentElement
    const theme = html.getAttribute('data-theme')
    const textBtnTheme = document.querySelector('.btn-theme span')
    const imgBtnTheme = document.querySelector('.btn-theme img')
    const imgHero = document.querySelector('.hero__illustration img')

    if (theme === 'light') {
      html.setAttribute('data-theme', 'dark')
      textBtnTheme.textContent = 'Modo Claro'
      imgBtnTheme.src = 'assets/icones/modo-claro-sol.svg'
      imgHero.src = 'assets/hero-rua-dark.svg'
    } else {
      html.setAttribute('data-theme', 'light')
      textBtnTheme.textContent = 'Modo Escuro'
      imgBtnTheme.src = 'assets/icones/modo-escuro-lua.svg'
      imgHero.src = 'assets/hero-rua-light.svg'
    }
  })

const simuladorBanner = () => {
  const inputValueSimulado = Number(
    document.querySelector('#water-level').value,
  )

  const banner = document.querySelector('.alert-panel')
  const titulo = document.querySelector('#alert-title')
  const descricao = document.querySelector('#alert-description')
  const icone = banner.querySelector('img')

  if (inputValueSimulado < 5) {
    titulo.innerHTML = 'Normal'
    descricao.innerHTML = 'Rua sem alagamento no momento.'
    icone.src = 'assets/icones/normal-check.svg'
    icone.alt = 'Símbolo de situação normal'
    banner.className = 'alert-panel alert-panel--normal'
  } else if (inputValueSimulado < 15) {
    titulo.innerHTML = 'Atenção'
    descricao.innerHTML =
      'Água acumulando. Evite a rua e tire o carro de perto do bueiro.'
    icone.src = 'assets/icones/gota-marrom.svg'
    icone.alt = 'Símbolo de atenção'
    banner.className = 'alert-panel alert-panel--attention'
  } else if (inputValueSimulado < 30) {
    titulo.innerHTML = 'Alerta'
    descricao.innerHTML =
      'Não atravesse a pé. A correnteza pode derrubar uma pessoa.'
    icone.src = 'assets/icones/alerta-triangulo.svg'
    icone.alt = 'Símbolo de alerta'
    banner.className = 'alert-panel alert-panel--alert'
  } else {
    titulo.innerHTML = 'Perigo'
    descricao.innerHTML =
      'Não saia de casa nem tente passar de carro. Fique longe de postes e fios.'
    icone.src = 'assets/icones/perigo-octogono.svg'
    icone.alt = 'Símbolo de perigo'
    banner.className = 'alert-panel alert-panel--danger'
  }
}

import React from 'react'
import AboutInfo from '../../Shared/AboutInfo/AboutInfo'

const text =
  'AgroMiś znajduje się w malowniczej miejscowości - Dobra. Na rynku prosperujemy od 2020 roku. Jesteśmy firmą rodzinną, działającą w branży związanej z pielęgnacją i utrzymaniem terenów zielonych. Specjalizujemy się w wycince drzew i krzewów oraz ich formowaniem. Przygotowujemy teren pod trawnik: zakładamy, a także dbamy o jego piękny wygląd. Zajmujemy się również karczowaniem działek, jak też koszeniem łąk i nieużytków kosiarką bijakową. Dysponujemy mulczerem typu ciężkiego. Świadczymy usługi glebogryzarką służącą do mechanicznego przekopywania, rozdrabniania i spulchniania podłoża. Dodatkowo posiadamy rębak do drewna, którym to zrębkujemy oraz rozdrabniamy odpady drzewne, drewnopochodne, a także drewno pochodzenia leśnego. Zachęcamy do skorzystania z naszych usług!'
const AboutAgro = () => {
  return (
    <AboutInfo text={text} dividerSrc="/divider-green.svg" src="/tractor.png" />
  )
}

export default AboutAgro

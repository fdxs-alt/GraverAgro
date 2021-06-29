import React from 'react'
import AboutServices from '../../Graver/Services/AboutServices'

const services = [
  {
    title: 'MULCZOWANIE',
    text: `Wykonujemy usługi koszenia łąk, nieużytków oraz zarośli. Nasza firma dysponuje
    kosiarką bijakową typu ciężkiego tj. Muthing MU-H 220 o szerokości roboczej 220cm, która w
    połączeniu z ciągnikiem John Deere 6210, o mocy 90KM poradzi sobie z kilkuletnią zarośniętą
    powierzchnią. Kosiarka pozostawia po sobie zmielony materiał, którego nie trzeba zbierać.`,
    icon: '/lawn-mower.svg',
  },
  {
    title: 'ZRĘBKOWANIE GAŁĘZI',
    text: `Posiadamy w swojej ofercie profesjonalny rębak do drewna. Powstały w wyniku
    zrębokowania materiał drzewny może być wykorzystany do celów opałowych, a także do ozdabiania terenów zielonych, skutecznie zastępując korę drzewną. Jesteśmy w stanie przetransportować zrębkę
    we wskazane miejsce przez klienta.`,
    icon: '/tree-branch.svg',
  },
  {
    title: 'SPULCHNIANIE GLEB',
    text: `Świadczymy usługi glebogryzarką separacyjną, które pozwala na odpowiednie przygotowanie podłoża do zakładania trawników, ogródków warzywnych a także do
    sadzenia roślin. Maszyna rozdrabnia ziemię, przesiewa ją, zakopując kamienie oraz starą darń. Na wierzchu ukazuje się sypka ziemia, która jest odpowiednio zagęszczona. Tak uzyskana powierzchnia zapewnia odpowiedni wzrost roślin.`,
    icon: '/land.svg',
  },
  {
    title: 'WYCINKA DRZEW',
    text: `Zajmujemy się profesjonalną oraz kompleksową usługą z zakresu wycinki drzew.
    Usuwamy drzewa, zniszczone na skutek silnych wiatrów, oraz te, które stanowią realne zagrożenie życia bądź mienia. Wycinki drzew wykonujemy również na wysokościach za pomocą podnośników koszowych. Potrafimy usunąć, wyciąć lub przyciąć każde drzewo niezależnie od jego położenia. Realizujemy usługi w trudno dostępnych miejscach tj. blisko budynków czy sieci energetycznych.`,
    icon: '/log.svg',
  },
  {
    title: 'FORMOWANIE DRZEW I KRZEWÓW',
    text: `Oferujemy usługi z zakresu formowania drzew i krzewów. Nasza
    firma wykonuje wszelkiego rodzaju zabiegi pielęgnacyjne w obrębie korony drzew, które polegają między innymi na obcięciu połamanych i obumarłych gałęzi, które są zainfekowane przez choroby czy pasożyty. Posiadamy odpowiedni sprzęt pozwalający nam na wykonanie usług z zakresu
    kształtowania krzewów i żywopłotów.`,
    icon: '/bush.svg',
  },
  {
    title: 'PIELĘGNACJA TRAWNIKÓW',
    text: `Wychodzimy z propozycją kompleksowej i fachowej obsługi z zakresu zakładania oraz pielęgnacji ogrodów i innych terenów zielonych. Korzystając z naszej wiedzy i
    doświadczenia realizujemy usługi pozwalające spełnić Państwa oczekiwania. Nasze prace z zakresu pielęgnacji zieleni obejmują przede wszystkim: pielęgnację trawników (aeracja, wertykulacja), koszenie trawy i zarośli, zbieranie pokosu, jak również mulczowanie. Usuwamy chwasty oraz zwalczamy choroby grzybowe znajdujące się na roślinach. Wykonujemy wszystkie prace porządkowe w ogrodzie – wykopywanie i sadzenie roślin, przycinanie drzew owocowych, krzewów oraz usuwamy samosiejki.`,
    icon: '/grass.svg',
  },
]

const AgroServices = () => {
  return <AboutServices services={services} />
}

export default AgroServices

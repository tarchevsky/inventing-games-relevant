import Plyr from 'plyr'

const player = new Plyr('#player')
const players = Array.from(document.querySelectorAll('#player')).map((p) => new Plyr(p));
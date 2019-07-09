interface Player {
  cp?: string,
  id?: string,
  lvl?: string,
  platform?: string,
  pseudo?: string,
  region?: string,
  role?: string
}

export interface Players {
  [key: string]: Player
}

export default Player

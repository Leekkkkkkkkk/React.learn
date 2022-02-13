declare let count: number
declare let songName: string
declare let position: { x: number; y: number }
declare function add(x: number, y: number): number
type Direction = 'top' | 'left' | 'bottom' | 'right'
declare function changeDirection(direction: Direction): void
declare function fomartPoint(point: number): void
export { count, songName, position, add, changeDirection, fomartPoint }

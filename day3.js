const trajectory  = [
  "....#...#####..##.#..##..#....#",
  "..##.#.#.........#.#......##...",
  "#.#.#.##.##...#.......#...#..#.",
  "..##.............#.#.##.....#..",
  "##......#.............#....#...",
  ".....##..#.....##.#.......##..#",
  ".##.....#........##...##.#....#",
  ".##......#.#......#.....#..##.#",
  "##....#..#...#...#...##.#...##.",
  "##........##.#...##......#.#.#.",
  "..#.#........#...##.....#.....#",
  "..#.......####.#....#..#####...",
  ".##..#..#..##.#.....###.#..#...",
  "......###..##.....#.#.#..###.#.",
  "..#.#...#..##.....#....#.#.....",
  ".....#.#...#.###.#..#..........",
  "##.....#...#.#....#..#.#.......",
  "..#...#...#.........##......#..",
  "......#.#...#...#..#...##.#...#",
  "....#.................##.##....",
  "...#......#.............#....##",
  "##..#..#..........#...##.#.#...",
  "....#...##....#..#.#...........",
  "##.#.#.#...#....#........#..#.#",
  "...###..........#...#...#..##.#",
  "..##.......###.#......##.##....",
  "...........#.#....#.....#.#...#",
  "..#......##.#...##.#.#......#.#",
  "..........#.#....#.#..#....#...",
  "##..##...##.......#.#....#.#.##",
  ".##..#.#..#...........#.#...#.#",
  "#......##......#....####.#....#",
  "..###......##...#...#.#.......#",
  ".#.##.##....##..#..##...#......",
  ".#....#..#........#..#.##.#.#..",
  "..#.........#.#.###....###.#...",
  "..#..#.#.#..#..#.##.##...####..",
  "#..#..#......#..#.#....#.#.#.##",
  "..#.........#...#..#.#.#..#...#",
  "#..#......###.....##....##.....",
  "#..#.....#.#.#.##.....##...#.#.",
  "##..#.#...#.........#.#........",
  "#....#.......#.....#..#..#.#...",
  "...###.##.###.###.#####..#...#.",
  ".....#..#.#..##...............#",
  "..#.....###.###.#.....#.#....##",
  "###.#.........#..#.#.#..#.#..#.",
  ".##.........#..#..##....#.#...#",
  ".#...#........#...#.....#....#.",
  "####..........###....#.#.#....#",
  "....##..###....#....#.#...#....",
  "..............##......##..#.###",
  ".#...........###.#.#....#......",
  "###.#..#..#...#.........##.....",
  "..#.....##...#.#.....##...#.##.",
  ".###.#........#..#.#...#.#..##.",
  ".......##....##.........##.#..#",
  "#....#...#...##...#.#..#..#..##",
  "...#...##..#...#...#.#....#.#.#",
  "#.#......#.#...##......#.#...##",
  ".#.###..#.###.#.....#.##.##.#.#",
  "#...#............#...#.##..##..",
  "....#..###.......#.....##....#.",
  ".#####..#.....#.....#...#.....#",
  "..##..#..###.......##.#........",
  ".#...##.##.....#.##...##...#..#",
  "......###...#....#....#........",
  "....#...#.#....#...#.#.#......#",
  "....#..##...##.#..#....###.....",
  "...#...#..#.#...#....#.#..#####",
  "####....#.....#.........#.#....",
  "...###.#.#..#.#..##............",
  ".##..#####..#...#..#..#.......#",
  ".###......#.#.#..#....#.....#..",
  "#....##.##..#.#...............#",
  "...#.#..#........#......#....#.",
  "#.....#....###....#..#.#.#.....",
  ".#..#....#...#.#.....##....#...",
  "..#.##.#.##.#..#.##.#.....#.#..",
  ".......#.......###..###..#...#.",
  ".#.......#..#........#.#.......",
  ".#.#...#.....#.##..##.....#....",
  "#.......##....#......#.....##..",
  ".#.....#...##...#..##.....#....",
  "....#..#.#.......#.#.#.........",
  "..#....#....##.##..#..##.##.#..",
  ".#...#....##...#........#....#.",
  "#.#......#...#....#...........#",
  ".#....#..#..###.#.....#..#.....",
  "..#..................#.....#...",
  "..#...###..#..####.#..#.#.#.#..",
  "...#........##...##..##..#....#",
  "...#.....#........##..#.....#.#",
  "#....#.....##.##......#...##...",
  "...#####....#..##..##...#.#....",
  "###.........#.#..#..#..##.#...#",
  "##...#..##...#.##.#........#...",
  ".#....#.#...#..#...#..#.#......",
  ".#......##.#...#...#..#....#...",
  "#..#.#.#......##.##.####..#....",
  ".#...#.#.##...##.#...#...#.....",
  "####.#.........#...##..##....##",
  ".....###........###.##...#.#...",
  ".##.....#.....#....##.....##...",
  ".#.#...#####....##...##.....#..",
  "....###..........#......##..#.#",
  "..#.....#....#..#...#.....##..#",
  "...##.##.#.######....#.#....##.",
  "...#.#.#...#..#....##.........#",
  ".#.#...##...#....#.#....##.....",
  "...#..#.....#.....#.##.....#...",
  ".#.#.#.....#.##.#....#.#....##.",
  "#...#......###...#..###...#....",
  "...##.#.#..#........##.......#.",
  ".####.####......#........#.....",
  "....#..#####....#......####....",
  "#...##.#..#..#####.#...#......#",
  "#.#....#..#.........###........",
  ".##.........#....#......#.#....",
  "...###.........####.#........##",
  "..#..#........#.#..##......#..#",
  ".##..#....#...##.####.#...#....",
  "......#.......#..#..#.#.##.#...",
  ".###....#.#...#.#.......##..#.#",
  "#...#....#............#####....",
  "...#.##......#####..#........#.",
  "..#...##.....#...#..#.#........",
  "...#.#...#...##...#..#....#....",
  "..#..##.....#....#.#.###.......",
  ".......##..#...#.............##",
  ".....#.....#..##.##.....#......",
  ".....##...#......#..##....#.###",
  ".#...#.#.#.#.##.....##..###..#.",
  "....##..........#.....###......",
  "....#...#.#.#..#.......#....#..",
  "..###...#...........##..###....",
  "...#.##.......#....#....#.#....",
  "##...#..##..#.##..........##..#",
  ".##.....#..#......##..####.#.##",
  "....##..#.#.###......#..#...#..",
  "####..#.#....#...#....###.#.#..",
  "###......#...##.##..#.##..#..#.",
  "..#.#..#.#.#.....#...#..#.####.",
  ".###.#...##...##....##......#.#",
  "..#............#.##..#....#..#.",
  "###.......#......###..#........",
  "....##......###.....#.#..###...",
  "..#...##...#......#..#.........",
  "#..####.#....#.....###....#.#..",
  ".#.#.#.......##....###.........",
  ".......#.##.#####....#.#...####",
  ".#...#....#....#.###..#.....#..",
  ".###.#.#.###.###.#..####.##.#..",
  "....#.........#.#.......##.....",
  "#..#..#.#...........#.#.##..#.#",
  ".#.....#..#...#.....#.##......#",
  "..###.#............#.....####..",
  "#.....##..##...#....####....#..",
  "...#.....#..................#..",
  "....#.###.#..#..#..##..#..##...",
  "...##.#........#......#...##...",
  "#................##....#...#...",
  "..##......##.#.##..#....#.....#",
  ".#..#.....#..........##.#.#....",
  ".....#...####....#..#......#...",
  "..#......###.#.#.#.#.......#..#",
  ".##......#.......#....###.#....",
  "#..#.#.#..#...#.#.##..##..#....",
  "....#...##..#.#......#.##...#..",
  "...###...#.##..#...#....#......",
  "##......#.#...#.#.#.........#..",
  "..#..........#...###.#.##....#.",
  "...##.....#.....#...###..#.....",
  "..####.#.....#.#.....#..#.#....",
  ".#.....##...##.##.#.....#.####.",
  ".......#.....#...##..........#.",
  ".#...#.#....#####....###.#..#.#",
  ".##.##....##...##.#.....#......",
  "#......#.##..#..##.#.#.......#.",
  ".#..#....###..#........##...#..",
  "..#......##.......###..##...#..",
  ".#..........#.#.......##.....#.",
  "....##.....##.#.#.##........##.",
  "..#.#..###..#..##...#.##...#...",
  ".......#.....#..#...#...#.....#",
  "##.#...#.#.#.##........#......#",
  "..###.....##..#....#.......##..",
  "#####..####...#.#..##.#...#..#.",
  "#...####....#........#....#....",
  ".#.#.#..#...##....#.......#.#..",
  "...#....##..##..#..#..#####.###",
  "...#......#.#..#......#...####.",
  ".##.....##.##.#.####.#..##...#.",
  "....#..#..##..##....#....#...##",
  "##.###........#...##....#.....#",
  "..#.#.#.......#....#..#....#...",
  "......##.....##....#...#.....#.",
  "#.#..#.#.......#....#.#.#......",
  ".....###..#...#.....#..##..#...",
  "......###.....#.#.#...#...##..#",
  ".#..#.#....##...#...#........#.",
  "#..###.#...####.#...#..........",
  ".#.##.#..#..##..#..###..##...#.",
  ".......#.#..........#.........#",
  "#......###..##..#....###.......",
  "..#............#.#........#...#",
  "..##.#.............#......#..##",
  ".#....#..#.#..#....###..#...#..",
  "....##....#..##...###....#....#",
  ".#....###.............#........",
  "#..#...#..#....#.##.#.....##...",
  "...........#.....#....#....#...",
  ".##.##.#...#....##......##..##.",
  "......#.#.##.#..##........#...#",
  "....##...##...#...#...#.#......",
  ".#...#....#...#......#.#...#..#",
  "........##.....#.#..#...##..##.",
  "##...#.....#.....####...#..#...",
  ".#.#..##.##......#...#.#...#...",
  "##...##.#......#....#.######.#.",
  "##.....####.###......#.##.#....",
  ".#.##....##........#...#..####.",
  ".......#..#....##...#.#...#..#.",
  "...##..........#..#........#..#",
  ".##.....#...#...#.##.###.......",
  ".##....#...#.#..#.....#...#....",
  "..#...#.....#.####.#.........#.",
  "#...#.##...#.#..#.#..#.###.#..#",
  ".##..#.#.##.........####....###",
  ".#..##........#..#.......#.....",
  "......#.#####.#.........#.#...#",
  "......#....#.#####...........#.",
  "..##....##..#.#..#....#......##",
  "#.#......#.##.#.##....#....#.#.",
  "..#..##.#...#.......##.........",
  ".....##.#...#..........#.......",
  "...#........#..#...#.....##.###",
  "....##.........#...#.#.....#...",
  ".......#.#....#...#.......#...#",
  ".#..#...##....#..#...........#.",
  ".#....##.##.#..#..####.#.#.....",
  ".##........#.....#..#......##..",
  ".#..##......#......#..##..#....",
  "###.....##.......#..##.#.......",
  ".....##......#.#...##...##.....",
  ".##....##..#..#####...#...#.##.",
  "##...##.#....##.#.#.#....##....",
  ".#.....#...#......#......##....",
  "##.#............#...#....#.....",
  "#..#.....#.....##.##.##..#..##.",
  "......#..............#..#...#.#",
  "....#.#....##......#..#...#....",
  ".#...#..#...#......#..##....#.#",
  ".....#......#..##...#.#....#...",
  "#...............#.##..#......#.",
  ".....#..##.#..#.#...###.....#..",
  "...#..#..#...#....#..#..##.#...",
  ".#...#...#..#......##...#......",
  "....###............#.#.#....#..",
  "#.#...#..#..#.#....#........#..",
  "....#.#.#..#..#....#..#...##.#.",
  ".#....#.#...#....#......#.#...#",
  "##..#.#.#..#.....#...###....#.#",
  ".##.....#.#...#..........#..#.#",
  "#....#......#....#.#.#...#.....",
  "#.#.....#.###.......#..#..#.#..",
  "#.....##..#.###...#...##...#.##",
  ".#.##....#.#.....##......###...",
  ".#.......##................#...",
  ".........#........####......#..",
  "...##.###..#.....#.#.....##.#..",
  "..#....#.#.#.##..........#.....",
  "#..##.....#.............##.....",
  ".##...#..#.......#.......#..#..",
  "...#.................#......##.",
  "....#....#.....#..###.#....###.",
  "..#.#..#...#..#.....###....#.#.",
  ".....###...#....#....#.#.##..##",
  "...#...#.........####........#.",
  ".......#..##.........#.........",
  ".#......##.....#.#####...##....",
  "....#.###...#.#....##..#......#",
  ".##..#....#.#....#..#.###.....#",
  "..#...#.#...#.##.....#.#....##.",
  "#.#.#.#.....##...#.#..##..#....",
  ".#............#.#.#..#...#...#.",
  "...##.#..#..####.#.###..##.....",
  ".##.....#.......#..##.#...##.#.",
  "#.#...#..#.##...##...####..#..#",
  "...##.......#.#.#.#.#.#...#..##",
  "...#.#.##..##..............###.",
  ".....#...#........#...#......#.",
  "..#..#..##....#..##.#.....#....",
  "#.....##........#.........##.#.",
  "###..#....#.##..##.............",
  ".#..#...#.#......#..#..##.....#",
  "...#.#.#............##........#",
  "..#.#....#..#....##....#...##.#",
  "...##...#...#..........##.#####",
  "....#..#.#.......##....#.#.###.",
  "##..#..#..#...###.#.....#......",
  "....###.#.#.#.##..##.#...#.....",
  ".....####..#.#..#.#......#.#.#.",
  "#.....#...#..#.#.........#..#..",
  ".##....#.#.####......##..#..##.",
  "......#.##.#.#..#..#....#.#....",
  ".#..#...#...#...#..#.....#.....",
  "..##.#..............#......#...",
  ".....###.##.......#.....#..#...",
  "..#.#..#..#.......#...##.##..#.",
  "##.###......#......#.#..#..##..",
  "..##.....#..#..#......#..#.....",
  "...##.......#.#..#.........#.#.",
  "......##.##.#.......#..#.#.....",
  "#......#........##..#.......#.#",
  "###....#...#...#.#...#..#..#...",
  "#..###....#....####..#...#.....",
  "....##..#.##.#....#..##...#.#..",
  "#.##..#....##..#...#..#.#.#..#.",
  "#.........#.....#...#.......#..",
  "...#.....#.#.....#........##...",
  "..#.##..#......#...#.....##.#..",
  "...###....#.....#...#..#.##..#."
]


const example = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#"
]

const TREE = '#';
const totalRows = trajectory.length;


function treeCount(horizontalJump, verticalJump ) {
  let treeHits = 0;
  let rowPosition = 0;
  let nextRow = 0;
  let rowsAvailable = true;

  while (rowsAvailable) {
    nextRow = nextRow + verticalJump;
    rowPosition = rowPosition + horizontalJump;
    
    const terrain = trajectory[nextRow].split('');
    
    if (rowPosition >= terrain.length) {
      rowPosition = rowPosition - terrain.length;
    }
    
    if(terrain[rowPosition] === TREE) {
      treeHits++;
    }
    
    if(nextRow + verticalJump >= totalRows) {
      rowsAvailable = false;
    }
  }
  return treeHits;
}

const product = treeCount(1, 1) *  treeCount(3, 1) * treeCount(5, 1) * treeCount(7, 1) * treeCount(1, 2)
console.log("🚀 ~ file: day3.js ~ line 374 ~ product", product)
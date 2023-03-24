//This function rounds an input to closest 2.5

export function r2p5( float: number ) {
  return (Math.floor( ( float + 1.25 ) * 0.4 ) / 0.4)
}
/**
 * Price formatting.
 *
 * South African rand are quoted in whole units in this catalogue and grouped
 * with a thin space, so R1 250 reads correctly and R1250 does not. One helper,
 * so a price can never appear in two styles on the same screen.
 */
export const rand = (n: number): string =>
  `R${Math.round(n).toLocaleString('en-ZA').replace(/[,\s]/g, ' ').trim()}`;

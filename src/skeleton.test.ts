/*
const destinations = [["e", "n", "e", "e", "n"], ["w", "n", "w", "n", "w", "w", "n"]];
reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations) // should return true

reachesAnyDestination(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"], destinations) // should return false

reachesAnyDestination(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"], destinations) //should return true

reachesAnyDestination(["n", "s"], [["e"]]) //should return false
reachesAnyDestination(["n", "s"], [[]]) //should return true.
*/

import reachesAnyDestination from "./skeleton";
const destinations = [["e", "n", "e", "e", "n"], ["w", "n", "w", "n", "w", "w", "n"]];

test("reaches any destination", () => {
  expect(reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations)).toBe(true);
});

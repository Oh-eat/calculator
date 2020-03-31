export default function(number) {
  const target = number.toString();
  if (!target.includes(".")) return target;
  const index = target.indexOf(".");
  const count = target.length - 1 - index;
  return count > 5 ? number.toFixed(5) : number.toFixed(count);
}

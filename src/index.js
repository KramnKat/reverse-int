module.exports = function reverse(n) {

   let string = String(Math.abs(n));
   let result = ''
   for (let i = 0; i < string.length; i++) {
      result = `${string[i]}${result}`
   }

   return +result;
}

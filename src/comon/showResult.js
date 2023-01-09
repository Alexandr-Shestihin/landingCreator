export const showResult = (data, language, fn) => {
   const lan = language.toUpperCase();

   for (let i = 0; i < data.length; i++) {
      if (data[i][lan]) {
         fn(data[i][lan]);
      }
   }

}
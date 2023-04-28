const date = new Date();
const hour = date.getHours();

if (hour >= 0 && hour < 6) {
  document.body.style.background = "#1c2331"; /* cor para madrugada */
} else if (hour >= 6 && hour < 12) {
  document.body.style.background = "#e4cbb2"; /* cor para manhã */
} else if (hour >= 12 && hour < 18) {
  document.body.style.background = "#f5b971"; /* cor para tarde */
} else {
  document.body.style.background = "#2b2d42"; /* cor para noite */
}
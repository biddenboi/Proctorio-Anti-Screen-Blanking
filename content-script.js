/**
 * Heres the reference where I learned about content-scripts and injecting files into web pages:
 * https://medium.com/@fullstackmatt/injecting-content-scripts-in-chrome-extensions-statically-vs-programmatically-763ba90e6fc3
 * For this method I took a static approach to injecting
 */


const screen_blanker = document.querySelector("#screen_blanker")

screen_blanker.remove()
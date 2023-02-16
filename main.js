let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#795871;">Ingeniera química aprendiendo sobre desarrollo de sitios web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

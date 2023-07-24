const container = document.querySelector('.container');
const numberOfText = _number_of_text;
const multNumText = _mult_num_text;
const numberOfParticle = _number_of_particle;
const multNumParticle = _mult_num_particle;

for (let i = 0; i <= numberOfText; i++) {
  const frame = document.createElement('div');
  frame.classList.add('frame', `frame${i}`);
  frame.style.left = `-${(numberOfText / 2 - i) * _width + (_width / 2)}px`;
  frame.style.top = '0';
  frame.style.animation = `frame-animation${i} 1s ease-in-out ${i * 200}ms 1 normal forwards`;
  frame.style.backgroundColor = `hsl(${i * multNumText}, 80%, 60%)`;
  
  container.appendChild(frame);
}

for (let i = 0; i <= numberOfText; i++) {
   for (let j = 0; j <= numberOfParticle; j++) {
      const particle = document.createElement('div');
      particle.classList.add('particle', `particle${i}${j}`);
      particle.style.left = `-${(numberOfText /2 -i)*_width + (_width /2)}px`;
      particle.style.opacity ='0'; 
      particle.style.backgroundColor=`hsl(${i * multNumText},80%,60%)`; 
      particle.style.animation=`particle-animation${i}${j}1s ease-in-out ${1 + (i *200)}ms
   }
}
// document.addEventListener('keydown', press);
const inputs = document.querySelectorAll('.inbox input[type="checkbox"]');

inputs.forEach(check => check.addEventListener('click', handleCheck));

let lastChecked;

function handleCheck(event){

  let inBetween = false;

  if(event.shiftKey && this.checked){
    inputs.forEach(box => {
      // console.log(box)
      if(box === this || box === lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        box.checked = true;
      }
    });
  };

  lastChecked = this;
};
// const items = document.querySelectorAll('.item');
//
// const checkboxArray = Array.from(items);
//
// console.log(checkboxArray);
//
// function press(event){
//   //keyCode = 16;
//   checkboxArray.map(item => {
//
//   });
//   console.log(event.keyCode);
// };

const lablevaluefild=document.querySelector('#lablevalue');
const form=document.querySelector('#form');
const inputType=document.querySelector('#inputType');

lablevaluefild.addEventListener('keyup',(event)=>{
   const keypressed=event.key
   console.log(keypressed)

   if(keypressed=='Enter'){
      const type=inputType.value
      const lable=lablevaluefild.value
      const lableInput=document.createElement('label');
      const div=document.createElement('div');
      if(type === 'textarea'){
        Input=document.createElement('textarea');
      }
      else{
        Input=document.createElement('Input');
      }
      
      lableInput.innerHTML=lable;
      Input.type=type;
      Input.classList.add('form-control');
      lableInput.classList.add("form-lable");
      div.classList.add("mb-3");
       
      if(type!= 'submit'){
        div.appendChild(lableInput);
      }
      if(type == 'submit'){
        Input.classList.add("btn");
        Input.classList.add("btn-success");
        Input.value=lable
      }
       
      div.appendChild(Input);
      form.appendChild(div);
      console.log(type);
   }
})

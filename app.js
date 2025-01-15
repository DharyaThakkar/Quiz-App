const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];//form.q1.value will look for those input fields which are checked and we will give us the value of those input fields.

    // check answers
    userAnswers.forEach((answer, index) => {
           if(answer === correctAnswers[index]) {
               score += 25;
           }
    });

    
     //show result in page
     scrollTo(0,0);//window object which takes two argument - x coordinate and y coordinate.we have specified it as 0,0 because we want to take it to the very top of the website after they had clicked on the submit button.
     result.classList.remove('d-none');
     
     //creating a little animation for displaying the result on the website.
     let output = 0;

     const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer); //now it will be stopped and will not execute again after 10 milli-second.
        }else {
            output++;
        }
     }, 10);


});

//window(global object) object :-

// console.log('hello');

// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

//alert('hello');
// window.alert('hello');

// setTimeout(()=>{
//     alert('hello, ninjas');
// }, 3000);//This method is also present inside the window object.

//This method takes a callback function as its first argument and a time interval as its second argument and it fires the callback function after the time interval specified in the argument.The time interval is in milli-second

// let i = 0;
// const timer = setInterval(()=> {
//     console.log('hello');
//     i++;
//     if(i === 5) { //stopping the setInterval function.
//         clearInterval(timer);
//     }
// }, 1000);

//setInterval method is also stored on the window object and it is very similar to the setTimeout method.
//setTimeout function is going to fire the callback() function after the time interval which is specified to it in the second argument only once.

//But setInterval is gonna to fire the callback function each time after each particular time interval specified to it in the argument.

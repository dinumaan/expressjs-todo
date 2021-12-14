$( () => {
    // console.log('page is loaded');

    let newtodoBox = $('#newtodo');
    let addtodoBtn = $('#addtodo');
    let todolist = $('#todolist');

    addtodoBtn.click( () => {
        // console.log("button was clicked");
        let newtodo = newtodoBox.val();
        // console.log(newtodo);
        $.post(
            '/todos/',
            {task: newtodo},
            (data) => {
                console.log(data);
            } 
        )
    })  

})

// console.log('some stuff');
/*adding card*/
let orderNumber = 0;
$('.add-button').on('click', function addCard() {
    $html = '<div class="card skeleton"></div>';
    $($html).appendTo('.card-container');
    setTimeout(function() {
        $('.skeleton').remove()
        const randomText = new Array();
        randomText[0] = "Lorem ipsum dolor sit amet consectetur adipiscing elit class natoque penatibus commodo quis, consequat quam torquent tristique sed mauris interdum morbi ultricies eleifend suspendisse.";
        randomText[1] = "Felis eleifend quis et commodo consequat dictumst semper neque sit, ut suspendisse volutpat libero diam lectus nisi ornare, convallis mattis tristique vestibulum ac efficitur hac sapien.";
        randomText[2] = "Penatibus ipsum orci sodales faucibus quam eu mattis amet, maximus curabitur sagittis et mus vel etiam, donec non potenti nullam dapibus iaculis nunc. Ridiculus porttitor etiam lacinia enim per...";
        randomText[3] = "Conubia netus erat porta per vel montes consectetur ridiculus, arcu class potenti aenean nibh faucibus senectus, natoque pulvinar fringilla neque inceptos eleifend viverra.";
        randomText[4] = "Dictum aliquet eget sapien justo donec duis mi litora, quisque eros orci lectus montes pulvinar vitae dictumst, volutpat lobortis sem purus platea sed arcu.";
        randomText[5] = "Quis vulputate mi tempor venenatis netus augue vivamus, facilisi montes parturient auctor eleifend consectetur maximus, posuere suscipit cubilia curabitur accumsan duis. ";


        const randomTitle = new Array()
        randomTitle[0] = "Title"
        randomTitle[1] = "Not title"
        randomTitle[2] = "Bla bla bla title"
        randomTitle[3] = "Super title"

        const randomModalText = new Array()
        randomModalText[0] = "Title"
        randomModalText[1] = "Not title"
        randomModalText[2] = "Bla bla bla title"
        randomModalText[3] = "Super title"

        function runRandomNum() {
            let rand = randomText[Math.floor(Math.random() * randomText.length)];
            let randTitle = randomTitle[Math.floor(Math.random() * randomTitle.length)]
            let randMod = randomModalText[Math.floor(Math.random() * randomModalText.length)];
            $('.text-here').innerText = rand;
            $('.title-here').innerText = randTitle;
            $('.modal-text').innerText = randMod;

            ++orderNumber;

            ol = 0
            ul = 1
        
            $html = '<div class="card">' +
                '<div class="card-text">'+
                    '<h2 class="title-here">' + randTitle + '</h2>' +
                    '<p class="text-here">' + rand + '</p>' +
                '</div>' +
                '<div class="card-buttons">' +
                    '<button type="button" class="modal-bla-bla" id=' + orderNumber + '>' + 'Open bla-bla</button>' +
                    '<button type="button" class="delete-card">Delete</button>' +
                    '</div>' +
                    '<div class="modal" id=' + orderNumber + '-' + [ul++] + '>' +
                        '<button type="button" class="close-modal">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle table-cancel"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>' +
                        '</button>' +
                        '<p class="modal-text">' + randMod + '</p>' +
                    '</div>' +
                    '<div class="overlay"></div>';
                '</div>';

                console.log(randMod)
        }
        runRandomNum()

        

        $($html).appendTo('.card-container');

        /*modal button*/
        
        $('.modal-bla-bla').on('click', function() {
            $(this).parent().next().addClass('active')
            $('.overlay').addClass('active') 
        })
        
        $('.close-modal').on('click', function() {
            $('.modal').removeClass('active')
            $('.overlay').removeClass('active')
        })

        $(document).mouseup(function (e) {
            let container = $(".modal");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.modal').removeClass('active')
                $('.overlay').removeClass('active')
            } 
        });

        /*delete card*/

        $('.delete-card').on('click', function() {
            $(this).parents('.card').remove()
        })
    }, 3000)
    
}) 



/*remove last child*/

$('.delete-button').on('click', function() {
    $('.card-container').children().last().remove();
})


/*remove all except first*/

$('.remove-button').on('click', function() {
    $('.card-container').children().slice(1).remove();
    $('.switch ').prop("disabled", true);
    $('.onoffbtn').removeClass('active')
})

/*fill button*/

$('.onoffbtn').on('click', function(){
    if($(this).children().is(':checked')){
        $(this).addClass('active');

            /*height and width of card-container*/


        let offsetHeight = document.getElementsByClassName('card-container')[0].offsetHeight;
        console.log('Высота:', offsetHeight);
        let offsetWidth = document.getElementsByClassName('card-container')[0].clientWidth;
        console.log('Ширина:', offsetWidth);

        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
                const randomText = new Array();
                randomText[0] = "Lorem ipsum dolor sit amet consectetur adipiscing elit class natoque penatibus commodo quis, consequat quam torquent tristique sed mauris interdum morbi ultricies eleifend suspendisse.";
                randomText[1] = "Felis eleifend quis et commodo consequat dictumst semper neque sit, ut suspendisse volutpat libero diam lectus nisi ornare, convallis mattis tristique vestibulum ac efficitur hac sapien.";
                randomText[2] = "Penatibus ipsum orci sodales faucibus quam eu mattis amet, maximus curabitur sagittis et mus vel etiam, donec non potenti nullam dapibus iaculis nunc. Ridiculus porttitor etiam lacinia enim per...";
                randomText[3] = "Conubia netus erat porta per vel montes consectetur ridiculus, arcu class potenti aenean nibh faucibus senectus, natoque pulvinar fringilla neque inceptos eleifend viverra.";
                randomText[4] = "Dictum aliquet eget sapien justo donec duis mi litora, quisque eros orci lectus montes pulvinar vitae dictumst, volutpat lobortis sem purus platea sed arcu.";
                randomText[5] = "Quis vulputate mi tempor venenatis netus augue vivamus, facilisi montes parturient auctor eleifend consectetur maximus, posuere suscipit cubilia curabitur accumsan duis. ";


                const randomTitle = new Array()
                randomTitle[0] = "Title"
                randomTitle[1] = "Not title"
                randomTitle[2] = "Bla bla bla title"
                randomTitle[3] = "Super title"

                const randomModalText = new Array()
                randomModalText[0] = "Title"
                randomModalText[1] = "Not title"
                randomModalText[2] = "Bla bla bla title"
                randomModalText[3] = "Super title"

                function runRandomNum() {
                    let rand = randomText[Math.floor(Math.random() * randomText.length)];
                    let randTitle = randomTitle[Math.floor(Math.random() * randomTitle.length)]
                    let randMod = randomModalText[Math.floor(Math.random() * randomModalText.length)];
                    $('.text-here').innerText = rand;
                    $('.title-here').innerText = randTitle;
                    $('.modal-text').innerText = randMod;

                    ++orderNumber;

                    ol = 0
                    ul = 1
                
                    $html = '<div class="card">' +
                        '<div class="card-text">'+
                            '<h2 class="title-here">' + randTitle + '</h2>' +
                            '<p class="text-here">' + rand + '</p>' +
                        '</div>' +
                        '<div class="card-buttons">' +
                            '<button type="button" class="modal-bla-bla" id=' + orderNumber + '>' + 'Open bla-bla</button>' +
                            '<button type="button" class="delete-card">Delete</button>' +
                            '</div>' +
                            '<div class="modal" id=' + orderNumber + '-' + [ul++] + '>' +
                                '<button type="button" class="close-modal">' +
                                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle table-cancel"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>' +
                                '</button>' +
                                '<p class="modal-text">' + randMod + '</p>' +
                            '</div>' +
                            '<div class="overlay"></div>';
                        '</div>';

                        console.log(randMod)
                }
                runRandomNum()

                

                $($html).appendTo('.card-container');

                /*modal button*/
                
                $('.modal-bla-bla').on('click', function() {
                    $(this).parent().next().addClass('active')
                    $('.overlay').addClass('active') 
                })
                
                $('.close-modal').on('click', function() {
                    $('.modal').removeClass('active')
                    $('.overlay').removeClass('active')
                })

                $(document).mouseup(function (e) {
                    let container = $(".modal");

                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        $('.modal').removeClass('active')
                        $('.overlay').removeClass('active')
                    } 
                });

                /*delete card*/

                $('.delete-card').on('click', function() {
                    $(this).parents('.card').remove()
                })
            }
         });
    }
    else{
      $(this).removeClass('active')
    }
});



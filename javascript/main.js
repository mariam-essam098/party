
// --------scroll smoothing--------
$('.navBar').click(function (eInfo) {
    let selected = $(eInfo.target).attr("href");
    let sectionTop = $(selected).offset().top;
    $("html", "body").animate({ scrollTop: sectionTop }, 3000);
})

//navBar 

$('.openNav').click(function () {

    if ($('.navBar').css('width') == '250px') {

        $('.navBar').animate({ width: '0px' }, 20);
        $('#home-tittle').animate({ marginLeft: '0px' }, 20);

    }
    else {
        $('.navBar').animate({ width: '250px' }, 20);
        $('#home-tittle').animate({ marginLeft: '250px' }, 20);
    }
})


$('.closebtn').click(function () {

    $('.navBar').animate({ width: '0px' }, 20);
    $('#home-tittle').animate({ marginLeft: '0px' }, 20);

})


// start-singers-section

$('.toggle').click(function () {
    $('.innerText').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);


})



//start-counter-section 
let countDownDate = new Date("June 26, 2024 13:25:19 ").getTime();

let counter = setInterval(() => {
    // get date now 
    let dateNow = new Date().getTime();

    // get differance Date( now --> countDown)
    let dateDiff = countDownDate - dateNow;

    //  get Time ------
    // days  hours   minutes   seconds
    let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hour = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minute = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor(dateDiff % (1000 * 60) / (1000));

    document.getElementById("days").innerHTML = `${day} D`;
    document.getElementById("hours").innerHTML = `${hour} H`;
    document.getElementById("minutes").innerHTML = `${minute} M`;
    document.getElementById("seconds").innerHTML = `${second} S`;

}, 1000)


// start-contact-textarea-section

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var character = maxLength - length;
    if (character <= 0) {
        $("#char").text("your available character finished");

    } else {

        $("#char").text(character);
    }
});


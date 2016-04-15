console.log('my script has loaded');

$('button').click(swap_picture);

function swap_picture() {
    console.log("just been clicked");
    $('img').toggle(2000);
}

$(document).ready(function () {
    const name = $('input[name="name"]');
    const email = $('input[name="email"]');

    $('#submit').on('click', function (event) {
        if (name.val().length === 0 || !validEmail(email.val())) {
            event.preventDefault();
            alert('Некорректная заявка!');
        } else {
            alert('Ваша заявка принята!');
        }
    });
});

function validEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return re.test(String(email).toLowerCase());
}
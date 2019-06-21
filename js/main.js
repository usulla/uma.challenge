
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

var formURL = "/";
var formElement = document.querySelector(".form");
var formData = new FormData(formElement);
const sendBtn = document.querySelector('.buttonsend');

sendBtn.onclick = function () {
    sendDataForm(formURL, formData);
};

function sendDataForm(url, data) {
    console.log(99)
    fetch(url, {
        method: 'post',
        body: data
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(
                    'Looks like there was a problem. Status Code: ' +
                    response.status
                );
                return;
            }
            return response.json()
        }).then(function (data) {
            console.log(JSON.stringify(data))
        });
}

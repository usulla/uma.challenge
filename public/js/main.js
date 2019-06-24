var formURL = "/";
const sendBtn = document.querySelector(".buttonsend");
const formElement = document.querySelector("#form");

formElement.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = new FormData(formElement);
    sendDataForm(data, formURL);
});

document.querySelector(".button.ok").addEventListener("click", function() {
    toggleShowPopup();
});

const responseContent = {
    success: {
        title: "Спасибо!<br> твоя заявка принята",
        body:
            "Информацию о сроках и деталях Uma.Challenge ты получишь на указанный e-mail в конце лета"
    },
    error: {
        title: "Ошибка",
        body: ""
    },
    fatalError: {
        title: "Ошибка",
        body: "Попробуйте отправить вашу заявку позже"
    }
};

function sendDataForm(data, url) {
    const popupTitle = document.querySelector(".popup-title");
    const popupBody = document.querySelector(".popup-content");

    fetch(url, {
        method: "post",
        body: data
    })
        .then(function(response) {
            if (response.status !== 200) {
                popupTitle.innerHTML = responseContent.fatalError.title;
                popupBody.innerHTML = responseContent.fatalError.body;
                console.log(
                    "Looks like there was a problem. Status Code: " +
                        response.status
                );
                toggleShowPopup();
                return;
            }
            toggleShowPopup();
            return response.json();
        })
        .then(function(data) {
            if (data.status == "error") {
                responseContent.error.body = data.error;
                popupTitle.innerHTML = responseContent.error.title;
                popupBody.innerHTML = responseContent.error.body;
                return;
            }
            popupTitle.innerHTML = responseContent.success.title;
            popupBody.innerHTML = responseContent.success.body;
        })
        .catch(err => console.error(err));
}

function toggleShowPopup() {
    document.body.classList.toggle("popup");
    document.documentElement.classList.toggle("popup");
    document.querySelector(".popup-back").classList.toggle("show");
}

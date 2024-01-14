const scriptURL = 'https://script.google.com/macros/s/AKfycbzYndKj6-jxMDJjUbB5N8FNqzgO5VQd9TDopHc_xkd5_PygasN36SCQ612GHzw8_9Ts/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("buttons").textContent = "Please wait...";
    document.getElementById("buttons").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(buttons => {
            document.getElementById("buttons").textContent = "Send Succesfuly🤩"
            setTimeout(() => {
                document.getElementById("name-field").value = "";
                document.getElementById("email-field").value = "";
                document.getElementById("message-field").value = "";
                document.getElementById("buttons").textContent = "Send";
                document.getElementById("buttons").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("buttons").textContent = "Please Try Again😘";
            document.getElementById("buttons").disabled = false;
        });
});

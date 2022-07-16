function logout() {
    $.removeCookie('token', {path: '/'});
    $('#logout-alert').prop('hidden', false);
    setTimeout(function () {
        $('#logout-alert').prop('hidden', true);
        window.location.href = "/";
    }, 2000);
}

function social_logout() {
    $.removeCookie('token', {path: '/'});
    window.location.replace('/oauth/logout');
}

function set_logout_button() {
    console.log("DD")
    let token = localStorage.getItem("Authorization")
    let payload = parseJwt(token.split(" ")[1]);
    let login_type = payload["type"];

    if(login_type === "GENERAL") {
        $('#social').prop('hidden', true);
        return "true";
    } else {
        // let general = document.getElementById("general");
        // general.prop('hidden', true);
        $('#general').prop('hidden', true);
    }
}

function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
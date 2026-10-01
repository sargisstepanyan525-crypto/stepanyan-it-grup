const recipient =
    "marktsai44@gmail.com";

const subject =
    encodeURIComponent(
        "STEPANYAN IT GROUP — New Project Request"
    );

const body =
    encodeURIComponent(

        `Name: ${name}

Email: ${email}

Service: ${service}

Message:

${message}

--------------------------------
STEPANYAN IT GROUP
`
    );

window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;

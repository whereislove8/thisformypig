const textConfig = {
    text1: "Hé luu bạn heo đáng iu &#129325;",
    text2: "Tui có điều này muốn nói với heo nà, mà khoan nghe nhạc chút xíu cái đã, heo bấm OK đi nà ^^",
    text3: "Cảm ơn heo vì đã cho tui cơ hội để bước 1 chân vào cuộc sống của bạn &#128538;",
    text4: "Cũng một khoảng thời gian dài tui không muốn mở lòng với ai...",
    text5: "...Và cho tới khi gặp được heo",
    text6: "Tui cũng không biết là có quá vội vàng hay không nhưng...",
    text7: "...tui lỡ thích bạn mất ròi",
    text8: "Không biết heo có thể cho tui một cơ hội để bước chân còn lại vào cuộc sống của heo,...",
    text9: "...được đường đường chính chính ở cạnh heo, không còn phải đắn đo suy nghĩ mỗi khi ai đó hỏi chúng ta là gì của nhau",
    yes: "Heo sẽ cho tui 1 cơ hội &#128151;",
    no: "Chúc tui may mắn lần sau &#128547;",
    titleForm: "Tui biết mà ^^ Yêu heo 3000 &#128151;",
    confirmText: "Xong ròi thì hãy bấm vào đây để gửi đến tui nha ^^",
    titleDlg: "Cảm ơn heo rất nhiều vì thơi gian qua đã cho tui được iu thương &#128151;",
    decription: "Ngày mai tui qua rước heo, mình đi chơi nhé ^^",
    toProfile: "Bấm vào đây heo sẽ thấy chân dung người iu sắp tới của heo nà ^^",
};

$(document).ready(function () {
    var textToSubmit = "";
    // process bar
    setTimeout(function () {
        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);

    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#text5").html(textConfig.text5);
    $("#text6").html(textConfig.text6);
    $("#text7").html(textConfig.text7);
    $("#text8").html(textConfig.text8);
    $("#text9").html(textConfig.text9);
    $("#no").html(textConfig.no);
    $("#yes").html(textConfig.yes);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text1,
            text: textConfig.text2,
            imageUrl: "img/heocute.jpg",
            imageWidth: 300,
            imageHeight: 300,
            background: '#fff url("img/iput-bg.jpg")',
            imageAlt: "Custom image",
        }).then(function () {
            var audio = new Audio("sound/love.mp3");
            audio.play();
            $(".content").show(1)
        });
    }

    // switch button position
    function switchButton() {
        var audio = new Audio("sound/duck.mp3");
        audio.play();
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
        var audio = new Audio("sound/Swish1.mp3");
        audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function () {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });

    // generate text in input
    function textGenerate() {
        textToSubmit = $("#txtReason").val();
    }

    // show popup
    $("#yes").click(function () {
        var audio = new Audio("sound/tick.mp3");
        audio.play();
        Swal.fire({
            title: textConfig.titleForm,
            html: true,
            width: 900,
            padding: "3em",
            html: "<input type='text' class='form-control' id='txtReason'  placeholder='heo có điều gì muốn nói với tui hông thì viết vào đây nhé ^^'>",
            background: '#fff url("img/iput-bg.jpg")',
            backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonColor: "#fe8a71",
            cancelButtonColor: "#f6cd61",
            confirmButtonText: textConfig.confirmText,
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    width: 900,
                    confirmButtonText: textConfig.toProfile,
                    background: '#fff url("img/iput-bg.jpg")',
                    title: textConfig.titleDlg,
                    text: textConfig.decription,
                    confirmButtonColor: "#83d0c9",
                    onClose: () => {
                        if (textToSubmit != "") {
                            $("#message").val(textToSubmit);
                            $("#my-form").submit();
                        }
                        window.open("https://facebook.com/anhtus.1711/", "_blank");
                    },
                });
            }
        });

        $("#txtReason").focus(function () {
            var handleWriteText = setInterval(function () {
                textGenerate();
            }, 10);
            $("#txtReason").blur(function () {
                clearInterval(handleWriteText);
            });
        });
    });
});

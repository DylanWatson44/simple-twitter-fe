// const bubbleWidthFullPercent = 27;
// const bubbleInnerWidthPercent = 20;

// let bubble = new Image();
// bubble.src = "assets/redvsbluebubble.svg";

// let bubbleReversed = new Image();
// bubbleReversed.src = "assets/bubblereversed.svg";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let backgroundImage = new Image();
backgroundImage.src = "assets/redvsbluebackground.svg";

backgroundImage.width = window.innerWidth;
backgroundImage.height = window.innerHeight;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawElements();
}

window.addEventListener("resize", resizeCanvas, false);
resizeCanvas();

backgroundImage.onload = function () {
    drawElements();
};

function drawElements() {
    context.drawImage(
        backgroundImage,
        0 - 5,
        0 - 5,
        canvas.width + 10,
        canvas.height + 10
    );

    // context.drawImage(bubble, ...getBubbleSpecs("left"));
    // context.drawImage(bubbleReversed, ...getBubbleSpecs("right"));

    // context.font = 0.021 * window.innerWidth + "px Arial";

    // context.textAlign = "center";

    // context.fillText("Red Team", ...getTeamTitleTextPos("left"));

    // context.fillText("Blue Team", ...getTeamTitleTextPos("right"));

    // let innerBubbleWidth = (bubbleInnerWidthPercent / 100) * canvas.width;

    // context.font = 0.012 * window.innerWidth + "px Arial";

    // context.textAlign = "left";

    // let lineHeight = context.measureText("Prop").fontBoundingBoxAscent;
    // let lineHeightPct = (lineHeight / canvas.height) * 100 + 0.3;

    // let testText =
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 2345";
    // let lines = getLines(context, testText, innerBubbleWidth);
    // lines.forEach((line, index) => {
    //     context.fillText(
    //         line,
    //         ...getTweetLinePos(lineHeightPct, index, "left"),
    //         innerBubbleWidth
    //     );
    // });

    // lines.forEach((line, index) => {
    //     context.fillText(
    //         line,
    //         ...getTweetLinePos(lineHeightPct, index, "right"),
    //         innerBubbleWidth
    //     );
    // });
}

// function getTweetLinePos(lineHeightPct, lineNumber, leftOrRight) {
//     let y = 47.5;
//     y += lineNumber * lineHeightPct;

//     let x = leftOrRight === "left" ? 12 : 68;
//     return [(x / 100) * canvas.width, (y / 100) * canvas.height];
// }

// function getTeamTitleTextPos(leftOrRight) {
//     let x = leftOrRight === "left" ? 19 : 80;
//     return [(x / 100) * canvas.width, (11.5 / 100) * canvas.height];
// }

// function getBubbleSpecs(leftOrRight) {
//     let x = leftOrRight === "left" ? 7.5 : 65;

//     return [
//         (x / 100) * canvas.width,
//         (42 / 100) * canvas.height,
//         (bubbleWidthFullPercent / 100) * canvas.width,
//         (31 / 100) * canvas.height,
//     ];
// }

// function getLines(context, text, maxWidth) {
//     var words = text.split(" ");
//     var lines = [];
//     var currentLine = words[0];

//     for (var i = 1; i < words.length; i++) {
//         var word = words[i];
//         var width = context.measureText(currentLine + " " + word).width;
//         if (width < maxWidth) {
//             currentLine += " " + word;
//         } else {
//             lines.push(currentLine);
//             currentLine = word;
//         }
//     }
//     lines.push(currentLine);
//     return lines;
// }

console.log("canvas script loaded");

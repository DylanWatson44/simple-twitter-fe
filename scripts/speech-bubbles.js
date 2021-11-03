import socketIOClient from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

let socket = socketIOClient("http://localhost:3001/", {
    withCredentials: true,
});

window.addEventListener("load", (event) => {
    let redTweet = document.querySelector("p.red-team");
    let blueTweet = document.querySelector("p.blue-team");

    redTweet.addEventListener("text-change", changeBubbleText);
    blueTweet.addEventListener("text-change", changeBubbleText);

    socket.on("connected", () => {
        console.log("connected event");
    });
    socket.on("tweet", (json) => {
        console.log("tweet event");
        if (json.data) {
            let isRedTweet = json.matching_rules.find((rule) => {
                return rule.tag === "red-team";
            });
            if (isRedTweet) {
                redTweet.dispatchEvent(
                    new CustomEvent("text-change", {
                        detail: formatBubble(json),
                    })
                );
            } else {
                blueTweet.dispatchEvent(
                    new CustomEvent("text-change", {
                        detail: formatBubble(json),
                    })
                );
            }
        }
    });
    socket.on("error", (data) => {
        console.log("error event");
        console.log("data =>", data);
    });
});

function changeBubbleText(event) {
    console.log("changeing bubble");
    this.innerHTML = event.detail;
}

function formatBubble(tweetData) {
    let formattedBubble = "";

    let authorId = tweetData.data.author_id;
    let author = tweetData.includes.users.find((user) => {
        return user.id == authorId;
    });
    formattedBubble += `<b>${author.name}</b><br><sub>@${author.username}</sub><br>`;

    let regexForMentions = /@\S+/g;
    let tweetText = tweetData.data.text;

    let mentions = tweetText.match(regexForMentions) || [];
    let count = mentions.length;
    console.log(count);
    if (count > 0) {
        formattedBubble += "<sub>";
        if (count === 1) {
            formattedBubble += `Replying to ${mentions[0]}`;
        } else if (count === 2) {
            formattedBubble += `Replying to ${mentions[0]} and ${mentions[1]}`;
        } else {
            formattedBubble += `Replying to ${mentions[0]} and ${
                mentions[1]
            } and ${count - 2} others`;
        }
        formattedBubble += "</sub><br>";
    }
    formattedBubble += "<br>";

    tweetText = tweetText.replace(regexForMentions, "");
    formattedBubble += tweetText;

    formattedBubble += `<img src="${author.profile_image_url}"/>`;

    return formattedBubble;
}

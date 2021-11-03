let redTweet;
let blueTweet;
window.addEventListener("load", (event) => {
    redTweet = document.querySelector("p.red-team");
    blueTweet = document.querySelector("p.blue-team");

    let inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
        element.addEventListener("focusout", submitTeamChange);

        element.addEventListener("keyup", handleEnter);
    });
});

async function handleEnter(event) {
    if (!document.activeElement === this || event.key !== "Enter") {
        return;
    }
    let boundedFunc = submitTeamChange.bind(this);
    boundedFunc();
    event.preventDefault();
}

async function submitTeamChange() {
    let team = this.className.includes("red-team") ? "red-team" : "blue-team";
    const payload = { add: [{ value: this.value, tag: team }] };
    if (team === "red-team") {
        redTweet.dispatchEvent(
            new CustomEvent("text-change", {
                detail: `Waiting for for tweets with the tag ${this.value}...`,
            })
        );
    } else {
        blueTweet.dispatchEvent(
            new CustomEvent("text-change", {
                detail: `Waiting for for tweets with the tag ${this.value}...`,
            })
        );
    }

    await deleteCurrentTeam(this);
    const response = await axios.post(
        "http://localhost:3001/api/rules",
        payload
    );
}

async function deleteCurrentTeam(context) {
    let team = context.className.includes("red-team")
        ? "red-team"
        : "blue-team";
    console.log("team", team);
    const response = await axios.delete(
        `http://localhost:3001/api/rules/${team}`
    );
}

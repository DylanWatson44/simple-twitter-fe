function forceTag(element) {
    element.value = element.value.replace(/[^a-zA-Z0-9]+/g, ""); //replace all special characters and space with empty string
    element.value = "#" + element.value; 
}

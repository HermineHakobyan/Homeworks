const formData = new FormData(SomeFormElement).entries();
let jsonObject = {};

for (const [key, value]  of formData) {
    jsonObject[key] = value;
}

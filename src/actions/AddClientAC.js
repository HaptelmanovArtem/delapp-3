export const HandleChange = (newText, tName) => ({
    type: "HANDLE_CHANGE",
    payload: newText,
    tName
});
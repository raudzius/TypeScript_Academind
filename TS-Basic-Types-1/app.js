var userInput;
var userName;
userInput = 5;
userInput = 'Mykolas';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('An error occurred!', 500);

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Mykolas';
if (typeof userInput === 'string') {
    userName = userInput;
}

const generateError = (message: string, code: number) => {
    throw { message: message, errorCode: code };
    // while (true) { }
};

generateError('An error occurred!', 500);
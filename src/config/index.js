class Config {
    static getWordsJSON() {
        return process.env.REACT_WORDS_JSON || "words.json";
    }

    static getToken() {
        return process.env.REACT_APP_TOKEN_NAME || "token";
    }
}

export default Config;
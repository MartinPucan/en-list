class Config {
    static getWordsJSON() {
        return process.env.REACT_WORDS_JSON || "./Words.js";
    }
}

export default Config;
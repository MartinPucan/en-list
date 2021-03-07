class Config {
    static getHost() {
        return process.env.REACT_APP_API_HOST || "/";
    }

    static getToken() {
        return process.env.REACT_APP_TOKEN_NAME || "token";
    }
}

export default Config;
module.exports = {
    webpack: (config, { isServer }) => {
        console.log("isServer: " + isServer)
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }
        return config;
    }
}

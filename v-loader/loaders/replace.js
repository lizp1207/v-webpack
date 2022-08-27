module.exports = function (source) {
    const query = this.query || {}
    const {
        name
    } = query
    // 异步回调
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace('monday', name);
        callback(null, result);
    }, 8000)
}
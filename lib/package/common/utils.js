const delay = (delayTime = 25) => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, delayTime);
});
export default {
    delay,
};
//# sourceMappingURL=utils.js.map
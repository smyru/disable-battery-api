(function() {
    try {
        var script = document.createElement('script');
        script.text = `
    if (navigator.getBattery) {
        delete navigator.__proto__.getBattery;
    }
`;
        (document.head || document.documentElement).appendChild(script);
        script.onload = function() {
            script.parentNode.removeChild(script);
        };
    } catch (e) {}
})();

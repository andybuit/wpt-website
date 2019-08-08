export const isMobile = () => {
    let isMobile = false;

    try {
        isMobile = !!((window.navigator && (window.navigator as any).standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match(/mobile/i));
    } catch (ex) {
        // continue regardless of error
    }

    return isMobile;
};
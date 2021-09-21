function registerServiceWorker(){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('Service worker registered');
            }).catch(registrationError => {
                console.log('Service worker registration failed', registrationError);
            });
        });
    }
}

export default registerServiceWorker;

const helper = {
    cambiarThema: thema => {
        const minor = thema === 'black' ? '#ffffff' : '#212121';
        const major = thema === 'black' ? '#212121' : '#ffffff';

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 100%, #888 100%, ${major} 100%)`;
            let color_minor = `linear-gradient(0deg, ${major} 100%, #888 100%, ${minor} 100%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 20);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 90%, #888 95%, ${major} 100%)`;
            let color_minor = `linear-gradient(0deg, ${major} 90%, #888 95%, ${minor} 100%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 40);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 80%, #888 90%, ${major} 100%)`;
            let color_minor = `linear-gradient(0deg, ${major} 80%, #888 90%, ${minor} 100%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 60);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 70%, #888 85%, ${major} 100%)`;
            let color_minor = `linear-gradient(0deg, ${major} 70%, #888 85%, ${minor} 100%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 80);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 60%, #888 80%, ${major} 100%)`;
            let color_minor = `linear-gradient(0deg, ${major} 60%, #888 80%, ${minor} 100%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 100);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 50%, #888 70%, ${major} 90%)`;
            let color_minor = `linear-gradient(0deg, ${major} 50%, #888 70%, ${minor} 90%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 120);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 40%, #888 60%, ${major} 80%)`;
            let color_minor = `linear-gradient(0deg, ${major} 40%, #888 60%, ${minor} 80%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 140);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 30%, #888 50%, ${major} 70%)`;
            let color_minor = `linear-gradient(0deg, ${major} 30%, #888 50%, ${minor} 70%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 160);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 20%, #888 40%, ${major} 60%)`;
            let color_minor = `linear-gradient(0deg, ${major} 20%, #888 40%, ${minor} 60%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 180);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 10%, #888 30%, ${major} 50%)`;
            let color_minor = `linear-gradient(0deg, ${major} 10%, #888 30%, ${minor} 50%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 200);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 0%, #888 20%, ${major} 40%)`;
            let color_minor = `linear-gradient(0deg, ${major} 0%, #888 20%, ${minor} 40%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 220);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 0%, #888 15%, ${major} 30%)`;
            let color_minor = `linear-gradient(0deg, ${major} 0%, #888 15%, ${minor} 30%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 240);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 0%, #888 10%, ${major} 20%)`;
            let color_minor = `linear-gradient(0deg, ${major} 0%, #888 10%, ${minor} 20%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 260);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 0%, #888 5%, ${major} 10%)`;
            let color_minor = `linear-gradient(0deg, ${major} 0%, #888 5%, ${minor} 10%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 280);

        setTimeout(() => {
            let color_major = `linear-gradient(0deg, ${minor} 0%, #888 0%, ${major} 0%)`;
            let color_minor = `linear-gradient(0deg, ${major} 0%, #888 0%, ${minor} 0%)`;
            document.documentElement.style.setProperty('--my-minor', color_minor);
            document.documentElement.style.setProperty('--my-major', color_major);
        }, 300);

        setTimeout(() => {
            document.documentElement.style.setProperty('--my-minor', minor);
            document.documentElement.style.setProperty('--my-major', major);
        }, 300);
    }
}

export { helper };
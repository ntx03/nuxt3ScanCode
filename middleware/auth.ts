export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth();
    if (to.path === "/") {
        if (auth.value === true) {
            navigateTo("/");
        }
    }
    if (to.path === "/recipient") {
        if (auth.value === true) {
            navigateTo("/recipient");
        }
    }
    if (to.path === "/deliverynote") {
        if (auth.value === true) {
            navigateTo("/deliverynote");
        }
    }
    if (to.path === "/information") {
        if (auth.value === true) {
            navigateTo("/information");
        }
    }
    navigateTo("/login");
});

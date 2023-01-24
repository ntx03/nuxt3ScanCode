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
    if (to.path === "/search") {
        if (auth.value === true) {
            navigateTo("/search");
        }
    }
    if (to.path === "/error") {
        if (auth.value === true) {
            navigateTo("/error");
        }
    }
    if (to.path === "/successful") {
        if (auth.value === true) {
            navigateTo("/successful");
        }
    }
    if (to.path === "/nosearch") {
        if (auth.value === true) {
            navigateTo("/nosearch");
        }
    }
    navigateTo("/login");
});

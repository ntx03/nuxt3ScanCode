export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth();
    if (to.path === "/") {
        if (auth.value === true) {
            navigateTo("/");
        }
    }
    navigateTo("/login");
});

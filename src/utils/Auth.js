export const isAuthenticated = () => {
    return !!localStorage.getItem('pddonline');
};
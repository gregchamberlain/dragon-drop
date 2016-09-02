export const login = (user, success, error) => ({
    method: 'POST',
    url: 'api/session',
    data: {user}
});

export const signup = (user, success, error) => ({
    method: 'POST',
    url: 'api/users',
    data: {user}
});

export const logout = (success, error) => ({
    method: 'DELETE',
    url: 'api/session'
});

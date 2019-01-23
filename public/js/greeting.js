let formatName = (user) => {
    return user.first_name + ' ' + user.last_name;
};

let user = {
    first_name: 'John',
    last_name: 'Doe'
};

let element = <h1>Hi, {formatName(user)}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

export function handleActive(queries: string | string[], option='toggle') {
    const queryArray = typeof queries !== 'string' ? [ ...queries ] : [ queries ];

    for (let query of queryArray) {
        const element = document.querySelector(query);

        switch (option) {
            case 'toggle':
                element?.classList.toggle('active');
                break;
            case 'add':
                element?.classList.add('active');
                break;
            case 'remove':
                element?.classList.remove('active');
                break;
        }
    }
}
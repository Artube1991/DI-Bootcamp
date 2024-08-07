export const ADDING = "add";
export const TOGGLING = "toggle";
export const REMOVING = "remove";

export const adding = () => {
    return {
        type: ADDING,
    };
};

export const toggling = () => {
    return {
        type: TOGGLING,
    };
};

export const removing = () => {
    return {
        type: REMOVING,
    };
};
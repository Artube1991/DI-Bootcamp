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
        type: toggle,
    };
};

export const removing = () => {
    return {
        type: remove,
    };
};
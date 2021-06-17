export const Container = {
    hidden: {x: 0},
    show: {x: 0,
        transition: {
            duration: 2,
            staggerChildren: 0.5,
            when: "afterChildren"
        }}
}
export const title = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2
        }
    }
}
export const title1 = {
    hidden: {
        opacity: 0,
        scale: 1.5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2
        }
    }
}


export const title2 = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 2,
        transition: {
            duration: 3
        }
    }
}

export const title3 = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 2,
        scale: 1,
        transition: {
            duration: 2
        }
    }
}
export const title4 = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        y: -15
    },
    show: {
        opacity: 2,
        scale: 1,
        y: 0,
        transition: {
            duration: 2
        }
    }
}

export const AnimationBorder = {
    hidden: {
        opacity: 1,
        x: -1600
    },
    show: {
        opacity: 3,
        x: 0,
        transition: {
            duration: 3
        }
    }
}
export const AnimationBorderB = {
    hidden: {
        opacity: 1,
        x: -128
    },
    show: {
        opacity: 3,
        x: 0,
        transition: {
            duration: 3
        }
    }
}
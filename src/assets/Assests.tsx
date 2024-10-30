interface Asset {
    name: string
    path: string
    alt : string | undefined
}

const hero: Asset = {name: "hero",  path : "hero.png", alt :  "Find your Ideal Insurance Provider"}
const logo: Asset = {name: "logo",  path : "logo.png", alt :  "Tozon Logo"}


export const assets = {
    hero,
    logo
}
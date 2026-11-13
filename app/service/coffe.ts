import { cache, TTL } from "./cache"

export interface Coffee {
    title: string
    description: string
    id: number
    ingredients?: string[]
    image?: string
}

const getCoffees = async () => {
    try {
        const cachedCoffes = await cache.get('coffes')

        if(cachedCoffes) {
            console.log('has cache')
            return JSON.parse(cachedCoffes) as Coffee[] 
        }

        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        const json = await resp.json();

        await cache.set('coffes', JSON.stringify(json)) 
        await cache.expire('coffes', TTL)
        console.log('cache is miss')

        
        return json as Coffee[]
    } catch (err) {
        console.error(err)
        return [] as Coffee[]
    }
}

const getUniqueCoffee = async ({ id }: { id: number }) => {
    try {
        const cachedCoffes = await cache.get(`coffe:${id}`)

        if(cachedCoffes) {
            console.log('has cache')
            return JSON.parse(cachedCoffes) as Coffee 
        }


        const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
        const json = await resp.json();

        await cache.set(`coffe:${id}`, JSON.stringify(json)) 
        await cache.expire(`coffe:${id}`, TTL)
        console.log('cache is miss')
        
        return json as Coffee
    } catch (err) {
        console.error(err)
        return {} as Coffee
    }
}

export {
    getCoffees,
    getUniqueCoffee
}

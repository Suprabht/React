

const ServiceClient = {
    async get(url:string){
        return await fetch(url);

    },

    async post(url:string, body:any){
        return await fetch(url,{
            method:'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type':'applicaton/json'
            }
        });

    },
}

export default ServiceClient
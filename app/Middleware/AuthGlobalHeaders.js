class AuthGlobalHeaders {
    async handle ( {request, }, next) {
     
        
        // const user = await auth.getUser();
       
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzNzY0NzkxN30.Nk8_HsFM5nd_2lV1jYNmcUx92uAvNGxPnELxGKNKakc';
        request.header('Authorization', `Bearer ${token}`);
        console.log('xxx', request.header('aaaa','aaa'))
        await next()
    }
}

module.exports = AuthGlobalHeaders;
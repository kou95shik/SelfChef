1. RUN THE SERVER -->> "npm run server"
2. (mongoDB COMPASS) -->> "mongodb+srv://username:password@cluster1.da3i7.mongodb.net" <<--- COPY AND DPASTE IT IN mongoDB AND CONNECT. //MONGODB USER & PASSWORD
3. (POSTMAN) http://localhost:8080/api/v1/auth/register <<-- PASTE IT ON POSTMAN
4. SEND REGISTRATION DETAILS IN THE FOLLOWING FORMAT -->>
{
    "name": "Koushik",
    "email": "test@test.com",
    "password": "123456",
    "phone": "12367890",
    "address": "Kolkata India"
}


 export class Users{

accessToken="Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Il9OVEFod1BnZldzS2QzYkk1V1dOWSJ9.eyJodHRwczovL3N0YXZ2eS1hdXRoMC5jb20vdXNlcl9hdXRob3JpemF0aW9uIjp7InJvbGVzIjpbIk1lZXRpbmdBZG1pbiJdLCJ1c2VyX21ldGFkYXRhIjp7InZlbmRvcklkIjozMDMsInJvbGVzIjpbIk1lZXRpbmdBZG1pbiJdLCJub3RhcnkiOmZhbHNlLCJqb2JUaXRsZSI6IlRlc3QgRW5naW5lZXIiLCJwcmVmZXJyZWRUaW1lem9uZSI6IlBhY2lmaWMvSG9ub2x1bHUiLCJzaWdudXBTdGF0ZSI6ImNvbXBsZXRlZCJ9LCJlbWFpbCI6Im1hbmFzYS5saW5nYWxhQHF1YWxpdGxhYnMuY29tIiwibmFtZSI6Im1hbmFzYSBrYWx5YW5pIGxpbmdhbGEiLCJjcmVhdGVkX2F0IjoiMjAyMS0xMC0wNVQxODoyMjoxNS4zMzZaIiwiaWRlbnRpdGllcyI6W3sidXNlcl9pZCI6IjYxNWM5N2Q3MDdhNTllMDA3N2M3ZDg4ZiIsInByb3ZpZGVyIjoiYXV0aDAiLCJjb25uZWN0aW9uIjoic2FuZGJveC1zdGF2dnktY29ubmVjdCIsImlzU29jaWFsIjpmYWxzZX1dfSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zYW5kYm94LnN0YXZ2eS5jb20vIiwic3ViIjoiYXV0aDB8NjE1Yzk3ZDcwN2E1OWUwMDc3YzdkODhmIiwiYXVkIjpbImh0dHBzOi8vc2FuZGJveC1zdGF2dnkudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL3NhbmRib3gtc3RhdnZ5LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NDU2ODUyNjIsImV4cCI6MTY0NTc3MTY2MiwiYXpwIjoiNHdhWFltcmZERktJTFF0MEtjNjAxdkdsYlVobXUxWlUiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.HL7xeuRuRCx2ns9-2GJmJiwprBWT8W88V-QL9p9j5dnzz4NH-GKvOEsd5tpCmJ_QVCnAyCIu05EelKwcc8aS1Dp5yxIfPH2CscmuROVFAnD8OZ6J_VEJZDMsfmI5ZfcSAoErq54CW9A_l3sxNnOKz0WENE2bqNUbmU2t3f_zgf5ykUV7P60cue4lAAYvBsTpVwUmp1SMaA6nLjcEpYXb3X9SubYSgnWNyjpLTqBJKuXpIQftRca2aUlEez9C5gh8-koVoiQ2taos_TnbxS2IWvjV4_bTXs2TrQjkv4lWXV9UgB9y9evrtGM3uSy0CJ1n-xt4IdXVFMDJ8HVDcBv-mQ";
   
inviteUser(email,firstName,middleName,lastName,userType,notary)
    {
        let accesstoken=this.accessToken;
   
        cy.request({
            url:'https://api.sandbox.stavvy.com/users/invites',
            method:'POST',
            headers:{'authorization': accesstoken},
            body:{
            "users":
            [{"email":email,			 
                "name":"",
                "first_name":firstName,
                "middle_name":middleName,
                "last_name":lastName,
                "roles":["Meeting"+userType],
                "is_notary":notary}] }
           }).as('createdUser')}


verifyCreatedUser(email)
{
    cy.get('@createdUser').then((res)=>{
        expect(res.status).to.eq(200);
        expect(res.body).has.property(email,true);
     })
}
     
getUsers()
{
    let accesstoken=this.accessToken;
    cy.request({
        url:'https://api.sandbox.stavvy.com/users',
        method:'GET',
        headers:{'authorization': accesstoken,
    }
    }).as('usersList')
}

verifyUserInTheList(email,notaryStatus,userRole)
{
    cy.get('@usersList').then((res)=>{
        var length=res.body.users.length
        for(let i=0;i<length;i++)
                {
                    if(res.body.users[i].email==email)
                 {
                expect(res.status).to.eq(200);
                expect(res.body.users[i]).has.property("email",email);
                expect(res.body.users[i]).has.property("is_notary", notaryStatus);
                expect(res.body.users[i]).has.property("roles", "Meeting"+userRole);
                 break;
                 }  
                }
    })
}

verifyUsersList()
{
    cy.get('@usersList').then((res)=>{
        expect(res.status).to.eq(200);
        var length=res.body.users.length
        for(let i=0;i<length;i++)
                {
                    expect(res.body.users[i]).to.exist
                    expect(res.body.users[i].email).to.exist
                    expect(res.body.users[i].first_name).to.exist
                    expect(res.body.users[i].last_name).to.exist
                    expect(res.body.users[i].roles).to.exist
                    expect(res.body.users[i].is_notary).to.exist
                    expect(res.body.users[i].is_verified_notary).to.exist
                } })
}
}
    

export class Meetings{

    accessToken="Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Il9OVEFod1BnZldzS2QzYkk1V1dOWSJ9.eyJodHRwczovL3N0YXZ2eS1hdXRoMC5jb20vdXNlcl9hdXRob3JpemF0aW9uIjp7InJvbGVzIjpbIk1lZXRpbmdBZG1pbiJdLCJ1c2VyX21ldGFkYXRhIjp7InZlbmRvcklkIjozMDMsInJvbGVzIjpbIk1lZXRpbmdBZG1pbiJdLCJub3RhcnkiOmZhbHNlLCJqb2JUaXRsZSI6IlRlc3QgRW5naW5lZXIiLCJwcmVmZXJyZWRUaW1lem9uZSI6IlBhY2lmaWMvSG9ub2x1bHUiLCJzaWdudXBTdGF0ZSI6ImNvbXBsZXRlZCJ9LCJlbWFpbCI6Im1hbmFzYS5saW5nYWxhQHF1YWxpdGxhYnMuY29tIiwibmFtZSI6Im1hbmFzYSBrYWx5YW5pIGxpbmdhbGEiLCJjcmVhdGVkX2F0IjoiMjAyMS0xMC0wNVQxODoyMjoxNS4zMzZaIiwiaWRlbnRpdGllcyI6W3sidXNlcl9pZCI6IjYxNWM5N2Q3MDdhNTllMDA3N2M3ZDg4ZiIsInByb3ZpZGVyIjoiYXV0aDAiLCJjb25uZWN0aW9uIjoic2FuZGJveC1zdGF2dnktY29ubmVjdCIsImlzU29jaWFsIjpmYWxzZX1dfSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zYW5kYm94LnN0YXZ2eS5jb20vIiwic3ViIjoiYXV0aDB8NjE1Yzk3ZDcwN2E1OWUwMDc3YzdkODhmIiwiYXVkIjpbImh0dHBzOi8vc2FuZGJveC1zdGF2dnkudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL3NhbmRib3gtc3RhdnZ5LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NDU3NjI0ODMsImV4cCI6MTY0NTg0ODg4MywiYXpwIjoiNHdhWFltcmZERktJTFF0MEtjNjAxdkdsYlVobXUxWlUiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.j4mfOE4_J-QaHKrxvCx67NL_D1gbCArPmt6kvysen19xjqbFlcHTH7__sC3hFJ8WbBlOg1Z5s9BH1xYSXyKFh-kHrFF6iK_G7n4C6XspVPyT3NBlGEmcanisq-aYDBTldLhHzLrL8ogbjJRQ5uRgBXRc7E2Na-i6Zlu4ljqlRW3Ky6Tk9PZSNxttWEOojjz-qO9QVhgSOkjhpb5axplyX8hsOQ_Jat78tU8FNOQsPEqP8a0Z7j5kdGK0UrbS4948mSd9aiNIbQ9-gc47kBVkHCmsj-GvMLHKSluwY44LGD587BvVBnfpsT055GYJUxYqL-M1NxFOvoNPy9mgb9oWmw"
    getMeetings(status)
    {
        let accesstoken=this.accessToken;

        cy.request({
            url:'https://api.sandbox.stavvy.com/meetings/instances/scroll',
            method:'POST',
            headers:{'authorization': accesstoken},
                body:{
                    "status":status,
                     "notary_ids": [2077], 
                     "offset": 0,
                     "limit": 10
            }
        }).as('getMeetings')
    }


    verifyMeetingsList()
    {
        cy.get('@getMeetings').then((res)=>{
            expect(res.status).to.eq(200);

            var length=res.body.meetings.length

            for(let i=0;i<length;i++)
            {
                expect(res.body.meetings[i].id).to.exist
                expect(res.body.meetings[i].encoded_meeting_guid).to.exist
                expect(res.body.meetings[i].assigned_notary).to.exist
                expect(res.body.meetings[i].scheduled_start_time).to.exist
                expect(res.body.meetings[i].scheduled_timezone).to.exist
                expect(res.body.meetings[i].borrowers).to.exist
                expect(res.body.meetings[i].property).to.exist
                expect(res.body.meetings[i].hash).to.exist
            }
        })
    }



createMeeting(customIdentifier,signerFirstName,
        signerMiddleName,signerLastName,signerPhone,
        signerMail,attendeeRole,transactionSide,loanType,
        streetNumber,streetName,addressUnit,City,county,state,
        postalCode,country
        )
    {
        let accesstoken=this.accessToken
        cy.request({
            url:'https://api.sandbox.stavvy.com/meetings',
            method:'POST',
            headers:{'authorization': accesstoken},
            body:{
                "assigned_notary":2077,
             "custom_identifier":customIdentifier,
             "signers":[{
                        "first_name":signerFirstName,
                         "middle_initial":"",
                         "middle_name":signerMiddleName,
                         "last_name":signerLastName,
                         "phone":signerPhone,
                         "email":signerMail,
                         "legal_address":"",
                         "type":"signer",
                         "attending":true,
                         "roles":[attendeeRole,transactionSide],
                         "legal_address_detail":{
                                                "street_number":"",
                                                "street_name":"",
                                                "address_unit":"",
                                                "city":"",
                                                "county":"",
                                                "us_state":"",
                                                "postal_code":"",
                                                "country":"",
                                                 "google_place_id":""}
                                    }],
             "file":
             {"loan_type":loanType},
             "meeting_instances":
             [{
                 "attendees":[{ 
                 "first_name":signerFirstName,
                 "middle_initial":"",
                 "middle_name":signerMiddleName,
                 "last_name":signerLastName,
                 "phone":signerPhone,
                 "email":signerMail,
                 "legal_address":"",
                 "type":"signer",
                 "attending":true,
                 "roles":[attendeeRole,transactionSide],
                 "legal_address_detail":{
                                        "street_number":"",
                                         "street_name":"",
                                         "address_unit":"",
                                         "city":"",
                                         "county":"",
                                         "us_state":"",
                                         "postal_code":"",
                                         "country":"",
                                         "google_place_id":""
                                         }}],
                 "scheduled_length":60,
                 "scheduled_start_time":1647498600,
                 "scheduled_timezone":"Pacific/Honolulu",
                 "additional_notes":null,
                 "physical_meeting_location":null
                }],
                
                "property":{
                    "street_number":streetNumber,
                    "street_name":streetName,
                    "address_unit":addressUnit,
                    "city":City,
                    "county":county,
                    "us_state":state,
                    "postal_code":postalCode,
                    "country":country,
                    "google_place_id":"",
                    "longitude":-87.7488788,
                    "latitude":41.4671308},
                 "import_file_documents":[]
                },          
        }
        ).as('createdMeeting')}



verifyCreatedMeeting(customIdentifier,loanType,signerMail,streetNumber,streetName,city,postalCode)
{
    let accesstoken=this.accessToken
    cy.get('@createdMeeting').then((res)=>{
    expect(res.status).to.eq(200);
    expect(res.body.meeting_guid).to.exist
    expect(res.body.encoded_meeting_guid).to.exist
    const meetingId= res.body.id
    cy.log("meeting id is"+meetingId)

    cy.request({
        method:'GET',
        url:'https://api.sandbox.stavvy.com/meetings/'+meetingId,
        headers:{'authorization': accesstoken,
    },
}).then((res)=>{

    //Verify created meeitng
    cy.log(JSON.stringify(res.body));
    expect(res.status).to.eq(200);
    expect(res.body).has.property("id",meetingId);
    expect(res.body).has.property("meeting_status","created");
    expect(res.body).has.property("assigned_notary", 2077);
    expect(res.body).has.property("custom_identifier", customIdentifier);
    expect(res.body.file).has.property("loan_type",loanType);
    expect(res.body.signers[0]).has.property("email", signerMail);
    expect(res.body.signers[0]).has.property("attendee_type", "signer",);
    expect(res.body.property).has.property("street_number",streetNumber);
    expect(res.body.property).has.property("street_name",streetName);
    expect(res.body.property).has.property("city",city);
    expect(res.body.property).has.property("postal_code",postalCode);
})})
}
}


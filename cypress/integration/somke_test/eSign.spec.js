import { Login } from "../Pages/login_page";
import { ESign } from "../Pages/eSign_page";

const login = new Login();
const eSign = new ESign();
describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })
    
     it("Create new eSign with Just Others", ()=>{

         var packetTitle="packet3551";

         //Creating packet
         eSign.creatingNewESignWithJustOtherOption(packetTitle,'title_exam (4).pdf',"manasa","kalyani","k","manasa.lingala+123@qualitlabs.com");

         //Verify created packet
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList("Ready To Sign");
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.verifyPacketStatusInDetailsPage("Ready To Sign");
         eSign.verifyPacketNameInDetailsPage(packetTitle);
        })

        it("Create new eSign with Just Me & Others", ()=>{

         var packetTitle="packet3552";

         //Creating packet
         eSign.createNewEsignWithMeAndOthers(packetTitle,'title_exam (4).pdf',"manasa","kalyani","lingala","manasa.lingala+123@qualitlabs.com");

         //Verify creared packet
         eSign.verifyPacketNameInDetailsPage(packetTitle);
         eSign.verifyPacketStatusInDetailsPage("Ready To Sign");
         eSign.clickOneSignLink();
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList("Ready To Sign");
         })

      it("create new eSign with just Me", () =>{

         var packetTitle="packet3553";

         //Creating packet
         eSign.creatingNewESignWithJustMeOption(packetTitle,'title_exam (4).pdf');

         //Verify created packet
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList("Ready To Sign");
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.verifyPacketNameInDetailsPage(packetTitle);
         eSign.verifyPacketStatusInDetailsPage("Ready To Sign");
      })


     it("verify searching a packet by title and navigating to details page",()=>{

        var packetTitle="packet3553"

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Search packet
        eSign.searcPacket(packetTitle);

        //Verify searched packet
        eSign.verifyPacketInTheList(packetTitle)
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketNameInDetailsPage(packetTitle);
     }) 


     it("upload document to  an eSign", ()=>{

         //Navigate to eSign page
         eSign.clickOneSignButton();

         //Upload document
         eSign.clickOnPacketFromTheList("packet3553");
         eSign.clickOnAddDocument();
         eSign.clickOnUploadDocuments('title_exam (4).pdf');

         //Verify added document
         eSign.clickUploadButton();
         eSign.verifyAddedDocumentInTheList('title_exam (4).pdf');
     })
   })


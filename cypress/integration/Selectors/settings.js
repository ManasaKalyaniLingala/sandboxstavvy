export default
{
profileIcon:'//div[@class="hover:text-brand-secondary py-2"]',
settingsBttn:'//span[text()="Settings"]',
firstName:'//div[text()="First Name"]/../div[2]',
middleName:'//div[text()="Middle Name"]/../div[2]',
lastName:'//div[text()="Last Name"]/../div[2]',
organization:'(//div[text()="Organization"]/../div[2])[2]',
firstNameEditBttn:'//div[text()="First Name"]/../div/span',
middleNameEditBttn:'//div[text()="Middle Name"]/../div/span/*[@data-icon="pencil"]',
lastNameEditBttn:'//div[text()="Last Name"]/../div/span/*[@data-icon="pencil"]',
organizationEditBttn:'//div[text()="Organization"]/../div/span/*[@data-icon="pencil"]',
inputTextBx:'[placeholder="Enter value"]',
saveIconBttn:'[data-icon="check"]',
timeZoneDropDown:'[name="timezone-dropdown"]',
seleTimeZone:'//ul/li/span/text()',
orgnizationTab:'[data-testid="organization"]',
enableFilesCheckBx:'//div[text()="Enable files"]/following-sibling::div/span',
filesCheckBoxText:'//div[text()="Enable files"]/following-sibling::div/label',
saveSettingsBttn:'//button[text()="Save Settings"]',
transactionsListInTheSidebar:'//nav/div[text()="Transactions"]/../ul/li/a/text()',
acknowledgementCheckBox:'//label[@for="acknowledgementMeetingsEnabled"]/../span/span',
acknowledgementCheckBoxText:'//div[text()="Enable acknowledgement meetings"]/following-sibling::div/label',
acknowledgementTransactionsList:'//nav/div[text()="Transactions"]/../ul/li[3]/ul/li',
qualityControlCheckBox:'//div[text()="Enable Quality Control"]/following-sibling::div/span',
qualityControlCheckBoxText:'//div[text()="Enable Quality Control"]/following-sibling::div/label',
acknowledgementLinkInSideBar:'[data-testid="nav-link-Acknowledgement"]',
}
@isTest
public class AccountTriggerTest {

    @isTest
    public static void beforeInsertTest() {
        Account a = new Account(Name='1', BillingStreet='aaa', BillingCity='bbb', BillingState='cc', BillingPostalCode='11111', BillingCountry='USA');
        Test.startTest();
        insert a;
        Test.stopTest();
        System.assertEquals(a.BillingAddress, a.ShippingAddress);
        
    }
}s
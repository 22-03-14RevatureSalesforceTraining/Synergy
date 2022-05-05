public class AccountTriggerHandler {
    public static void beforeInsert(List<Account> accts) {
        for (Account a : accts) {
            if(a.ShippingStreet == null) {
                a.ShippingStreet = a.BillingStreet;
            }
            if(a.ShippingCity == null) {
            	a.ShippingCity = a.BillingCity;
            }
            if(a.ShippingState == null) {
                a.ShippingState = a.BillingState;
            }
            if(a.ShippingPostalCode == null) {
                a.ShippingPostalCode = a.BillingPostalCode;
            }
            if(a.ShippingCountry == null) {
                a.ShippingCountry = a.BillingCountry;
            }
        }
    }
}
public class TopAccountsController {
    public Boolean sortByName = false;
    public List<Account> getTopAccounts() {
		List<Account> topAccs = [SELECT Name, Total_Revenue__c, Total_Shoes_Purchased__c FROM Account ORDER BY Total_Revenue__c DESC LIMIT 20];
        return topAccs;
    }
    public List<Branch__c> getTopBranches() {
		List<Branch__c> topBranches = new List<Branch__c>();
        if (!sortByName) {
            topBranches = [SELECT Account__r.Name, Name, Total_Order_revenue__c, Total_Shoes_Purchased__c FROM Branch__c ORDER BY Total_Order_revenue__c DESC NULLS LAST LIMIT 20];
        }
        else {
            topBranches = [SELECT Account__r.Name, Name, Total_Order_revenue__c, Total_Shoes_Purchased__c FROM Branch__c ORDER BY Account__r.Name ASC NULLS LAST LIMIT 20];
        }
        return topBranches;
    }
    public void sortByAccount() {
        this.sortByName = true;
    }
    public void sortByTotalRevenue() {
        this.sortByName=false;
    }
    
    public Component.Apex.OutputText getAverageRevenue() {
        return new Component.Apex.OutputText(value=[SELECT AVG(Total_Revenue__c) FROM Account][0].get('expr0'));
    }
    public Component.Apex.OutputText getTotalRevenue() {
        return new Component.Apex.OutputText(value=[SELECT SUM(Total_Revenue__c) FROM Account][0].get('expr0'));
    }
    public Component.Apex.OutputText getAverageShoes() {
        return new Component.Apex.OutputText(value=[SELECT AVG(Total_Shoes_Purchased__c) FROM Account][0].get('expr0'));
    }
}
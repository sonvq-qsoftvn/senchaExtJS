/**
 * A GridPanel class with live search support.
 * @author Vu Quang Son
 */
 
Ext.define('QsoftTrainingApp.common.function.CommonFunction', {
    alias: 'widget.AppFunctionConstants',
    singleton: true,
    reloadStore: function(arrayStore) { 
        
        if (typeof arrayStore == 'undefined') {
            arrayStore = [
                "teamlistall", 
                "teamtreelistall", 
                "userlistall",
                "topiclistall",
                "teamdashboardchart",
                "overivewdashboardchart",
                "scoredashboardchart"
            ];
        }

        arrayStore.forEach(function(entry) {
            Ext.getCmp(entry).getStore().load();
        });
    	
        console.log('All Stores reloaded');
    }    
});
